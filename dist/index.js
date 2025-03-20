#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema, } from "@modelcontextprotocol/sdk/types.js";
import { z } from 'zod';
import apiClientInstance from "./src/api/ApiBase";
const responseToString = (response) => {
    return {
        result: JSON.stringify(response),
        type: "json"
    };
};
const FigmaGetCommentsArgumentsSchema = z.object({
    fileKey: z.string().describe("The file key to get comments for"),
    as_md: z.boolean().describe("Whether to return the comments as markdown").default(false),
});
// Create server instance
const server = new Server({
    name: "mcp_figma",
    version: "0.6.2"
}, {
    capabilities: {
        tools: {}
    }
});
// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "figma_get_me",
                description: "Get the current user"
            },
            {
                name: "figma_get_comments",
                description: "Get the comments for a file",
                inputSchema: FigmaGetCommentsArgumentsSchema,
            }
        ]
    };
});
// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    try {
        if (name === "figma_get_me") {
            const response = await apiClientInstance.v1.getMe();
            return responseToString(response.data);
        }
        else if (name === "figma_get_comments") {
            const { fileKey, as_md } = FigmaGetCommentsArgumentsSchema.parse(args);
            const response = await apiClientInstance.v1.getComments(fileKey, { as_md: as_md });
            return responseToString(response.data);
        }
        else {
            throw new Error(`Unknown tool: ${name}`);
        }
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            throw new Error(`Invalid arguments: ${error.errors
                .map((e) => `${e.path.join(".")}: ${e.message}`)
                .join(", ")}`);
        }
        throw error;
    }
});
// Start the server
async function main() {
    try {
        console.error("Starting MCP Figma Server...");
        const transport = new StdioServerTransport();
        await server.connect(transport);
        console.error("MCP Figma Server running on stdio");
    }
    catch (error) {
        console.error("Error during startup:", error);
        process.exit(1);
    }
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
