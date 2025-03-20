/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
/**
 * This type is a string enum with the following possible values
 *
 * Normal blends:
 * - `PASS_THROUGH` (only applicable to objects with children)
 * - `NORMAL`
 *
 * Darken:
 * - `DARKEN`
 * - `MULTIPLY`
 * - `LINEAR_BURN`
 * - `COLOR_BURN`
 *
 * Lighten:
 * - `LIGHTEN`
 * - `SCREEN`
 * - `LINEAR_DODGE`
 * - `COLOR_DODGE`
 *
 * Contrast:
 * - `OVERLAY`
 * - `SOFT_LIGHT`
 * - `HARD_LIGHT`
 *
 * Inversion:
 * - `DIFFERENCE`
 * - `EXCLUSION`
 *
 * Component:
 * - `HUE`
 * - `SATURATION`
 * - `COLOR`
 * - `LUMINOSITY`
 */
export var BlendMode;
(function (BlendMode) {
    BlendMode["PASS_THROUGH"] = "PASS_THROUGH";
    BlendMode["NORMAL"] = "NORMAL";
    BlendMode["DARKEN"] = "DARKEN";
    BlendMode["MULTIPLY"] = "MULTIPLY";
    BlendMode["LINEAR_BURN"] = "LINEAR_BURN";
    BlendMode["COLOR_BURN"] = "COLOR_BURN";
    BlendMode["LIGHTEN"] = "LIGHTEN";
    BlendMode["SCREEN"] = "SCREEN";
    BlendMode["LINEAR_DODGE"] = "LINEAR_DODGE";
    BlendMode["COLOR_DODGE"] = "COLOR_DODGE";
    BlendMode["OVERLAY"] = "OVERLAY";
    BlendMode["SOFT_LIGHT"] = "SOFT_LIGHT";
    BlendMode["HARD_LIGHT"] = "HARD_LIGHT";
    BlendMode["DIFFERENCE"] = "DIFFERENCE";
    BlendMode["EXCLUSION"] = "EXCLUSION";
    BlendMode["HUE"] = "HUE";
    BlendMode["SATURATION"] = "SATURATION";
    BlendMode["COLOR"] = "COLOR";
    BlendMode["LUMINOSITY"] = "LUMINOSITY";
})(BlendMode || (BlendMode = {}));
/**
 * This type is a string enum with the following possible values:
 *
 * - `EASE_IN`: Ease in with an animation curve similar to CSS ease-in.
 * - `EASE_OUT`: Ease out with an animation curve similar to CSS ease-out.
 * - `EASE_IN_AND_OUT`: Ease in and then out with an animation curve similar to CSS ease-in-out.
 * - `LINEAR`: No easing, similar to CSS linear.
 * - `EASE_IN_BACK`: Ease in with an animation curve that moves past the initial keyframe's value and then accelerates as it reaches the end.
 * - `EASE_OUT_BACK`: Ease out with an animation curve that starts fast, then slows and goes past the ending keyframe's value.
 * - `EASE_IN_AND_OUT_BACK`: Ease in and then out with an animation curve that overshoots the initial keyframe's value, then accelerates quickly before it slows and overshoots the ending keyframes value.
 * - `CUSTOM_CUBIC_BEZIER`: User-defined cubic bezier curve.
 * - `GENTLE`: Gentle animation similar to react-spring.
 * - `QUICK`: Quick spring animation, great for toasts and notifications.
 * - `BOUNCY`: Bouncy spring, for delightful animations like a heart bounce.
 * - `SLOW`: Slow spring, useful as a steady, natural way to scale up fullscreen content.
 * - `CUSTOM_SPRING`: User-defined spring animation.
 */
export var EasingType;
(function (EasingType) {
    EasingType["EASE_IN"] = "EASE_IN";
    EasingType["EASE_OUT"] = "EASE_OUT";
    EasingType["EASE_IN_AND_OUT"] = "EASE_IN_AND_OUT";
    EasingType["LINEAR"] = "LINEAR";
    EasingType["EASE_IN_BACK"] = "EASE_IN_BACK";
    EasingType["EASE_OUT_BACK"] = "EASE_OUT_BACK";
    EasingType["EASE_IN_AND_OUT_BACK"] = "EASE_IN_AND_OUT_BACK";
    EasingType["CUSTOM_CUBIC_BEZIER"] = "CUSTOM_CUBIC_BEZIER";
    EasingType["GENTLE"] = "GENTLE";
    EasingType["QUICK"] = "QUICK";
    EasingType["BOUNCY"] = "BOUNCY";
    EasingType["SLOW"] = "SLOW";
    EasingType["CUSTOM_SPRING"] = "CUSTOM_SPRING";
})(EasingType || (EasingType = {}));
/** Component property type. */
export var ComponentPropertyType;
(function (ComponentPropertyType) {
    ComponentPropertyType["BOOLEAN"] = "BOOLEAN";
    ComponentPropertyType["INSTANCE_SWAP"] = "INSTANCE_SWAP";
    ComponentPropertyType["TEXT"] = "TEXT";
    ComponentPropertyType["VARIANT"] = "VARIANT";
})(ComponentPropertyType || (ComponentPropertyType = {}));
/** Geometric shape type. */
export var ShapeType;
(function (ShapeType) {
    ShapeType["SQUARE"] = "SQUARE";
    ShapeType["ELLIPSE"] = "ELLIPSE";
    ShapeType["ROUNDED_RECTANGLE"] = "ROUNDED_RECTANGLE";
    ShapeType["DIAMOND"] = "DIAMOND";
    ShapeType["TRIANGLE_UP"] = "TRIANGLE_UP";
    ShapeType["TRIANGLE_DOWN"] = "TRIANGLE_DOWN";
    ShapeType["PARALLELOGRAM_RIGHT"] = "PARALLELOGRAM_RIGHT";
    ShapeType["PARALLELOGRAM_LEFT"] = "PARALLELOGRAM_LEFT";
    ShapeType["ENG_DATABASE"] = "ENG_DATABASE";
    ShapeType["ENG_QUEUE"] = "ENG_QUEUE";
    ShapeType["ENG_FILE"] = "ENG_FILE";
    ShapeType["ENG_FOLDER"] = "ENG_FOLDER";
    ShapeType["TRAPEZOID"] = "TRAPEZOID";
    ShapeType["PREDEFINED_PROCESS"] = "PREDEFINED_PROCESS";
    ShapeType["SHIELD"] = "SHIELD";
    ShapeType["DOCUMENT_SINGLE"] = "DOCUMENT_SINGLE";
    ShapeType["DOCUMENT_MULTIPLE"] = "DOCUMENT_MULTIPLE";
    ShapeType["MANUAL_INPUT"] = "MANUAL_INPUT";
    ShapeType["HEXAGON"] = "HEXAGON";
    ShapeType["CHEVRON"] = "CHEVRON";
    ShapeType["PENTAGON"] = "PENTAGON";
    ShapeType["OCTAGON"] = "OCTAGON";
    ShapeType["STAR"] = "STAR";
    ShapeType["PLUS"] = "PLUS";
    ShapeType["ARROW_LEFT"] = "ARROW_LEFT";
    ShapeType["ARROW_RIGHT"] = "ARROW_RIGHT";
    ShapeType["SUMMING_JUNCTION"] = "SUMMING_JUNCTION";
    ShapeType["OR"] = "OR";
    ShapeType["SPEECH_BUBBLE"] = "SPEECH_BUBBLE";
    ShapeType["INTERNAL_STORAGE"] = "INTERNAL_STORAGE";
})(ShapeType || (ShapeType = {}));
/** Connector line type. */
export var ConnectorLineType;
(function (ConnectorLineType) {
    ConnectorLineType["STRAIGHT"] = "STRAIGHT";
    ConnectorLineType["ELBOWED"] = "ELBOWED";
})(ConnectorLineType || (ConnectorLineType = {}));
/**
 * The method of navigation. The possible values are:
 * - `"NAVIGATE"`: Replaces the current screen with the destination, also closing all overlays.
 * - `"OVERLAY"`: Opens the destination as an overlay on the current screen.
 * - `"SWAP"`: On an overlay, replaces the current (topmost) overlay with the destination. On a top-level frame,
 *   behaves the same as `"NAVIGATE"` except that no entry is added to the navigation history.
 * - `"SCROLL_TO"`: Scrolls to the destination on the current screen.
 * - `"CHANGE_TO"`: Changes the closest ancestor instance of source node to the specified variant.
 */
export var Navigation;
(function (Navigation) {
    Navigation["NAVIGATE"] = "NAVIGATE";
    Navigation["SWAP"] = "SWAP";
    Navigation["OVERLAY"] = "OVERLAY";
    Navigation["SCROLL_TO"] = "SCROLL_TO";
    Navigation["CHANGE_TO"] = "CHANGE_TO";
})(Navigation || (Navigation = {}));
/** Defines the types of data a VariableData object can hold */
export var VariableDataType;
(function (VariableDataType) {
    VariableDataType["BOOLEAN"] = "BOOLEAN";
    VariableDataType["FLOAT"] = "FLOAT";
    VariableDataType["STRING"] = "STRING";
    VariableDataType["COLOR"] = "COLOR";
    VariableDataType["VARIABLE_ALIAS"] = "VARIABLE_ALIAS";
    VariableDataType["EXPRESSION"] = "EXPRESSION";
})(VariableDataType || (VariableDataType = {}));
/** Defines the types of data a VariableData object can eventually equal */
export var VariableResolvedDataType;
(function (VariableResolvedDataType) {
    VariableResolvedDataType["BOOLEAN"] = "BOOLEAN";
    VariableResolvedDataType["FLOAT"] = "FLOAT";
    VariableResolvedDataType["STRING"] = "STRING";
    VariableResolvedDataType["COLOR"] = "COLOR";
})(VariableResolvedDataType || (VariableResolvedDataType = {}));
/** Defines the list of operators available to use in an Expression. */
export var ExpressionFunction;
(function (ExpressionFunction) {
    ExpressionFunction["ADDITION"] = "ADDITION";
    ExpressionFunction["SUBTRACTION"] = "SUBTRACTION";
    ExpressionFunction["MULTIPLICATION"] = "MULTIPLICATION";
    ExpressionFunction["DIVISION"] = "DIVISION";
    ExpressionFunction["EQUALS"] = "EQUALS";
    ExpressionFunction["NOT_EQUAL"] = "NOT_EQUAL";
    ExpressionFunction["LESS_THAN"] = "LESS_THAN";
    ExpressionFunction["LESS_THAN_OR_EQUAL"] = "LESS_THAN_OR_EQUAL";
    ExpressionFunction["GREATER_THAN"] = "GREATER_THAN";
    ExpressionFunction["GREATER_THAN_OR_EQUAL"] = "GREATER_THAN_OR_EQUAL";
    ExpressionFunction["AND"] = "AND";
    ExpressionFunction["OR"] = "OR";
    ExpressionFunction["VAR_MODE_LOOKUP"] = "VAR_MODE_LOOKUP";
    ExpressionFunction["NEGATE"] = "NEGATE";
    ExpressionFunction["NOT"] = "NOT";
})(ExpressionFunction || (ExpressionFunction = {}));
/** The type of style */
export var StyleType;
(function (StyleType) {
    StyleType["FILL"] = "FILL";
    StyleType["TEXT"] = "TEXT";
    StyleType["EFFECT"] = "EFFECT";
    StyleType["GRID"] = "GRID";
})(StyleType || (StyleType = {}));
/** An enum representing the possible events that a webhook can subscribe to */
export var WebhookV2Event;
(function (WebhookV2Event) {
    WebhookV2Event["PING"] = "PING";
    WebhookV2Event["FILE_UPDATE"] = "FILE_UPDATE";
    WebhookV2Event["FILE_VERSION_UPDATE"] = "FILE_VERSION_UPDATE";
    WebhookV2Event["FILE_DELETE"] = "FILE_DELETE";
    WebhookV2Event["LIBRARY_PUBLISH"] = "LIBRARY_PUBLISH";
    WebhookV2Event["FILE_COMMENT"] = "FILE_COMMENT";
})(WebhookV2Event || (WebhookV2Event = {}));
/**
 * An enum representing the possible statuses you can set a webhook to:
 * - `ACTIVE`: The webhook is healthy and receive all events
 * - `PAUSED`: The webhook is paused and will not receive any events
 */
export var WebhookV2Status;
(function (WebhookV2Status) {
    WebhookV2Status["ACTIVE"] = "ACTIVE";
    WebhookV2Status["PAUSED"] = "PAUSED";
})(WebhookV2Status || (WebhookV2Status = {}));
/**
 * Scopes allow a variable to be shown or hidden in the variable picker for various fields. This declutters the Figma UI if you have a large number of variables. Variable scopes are currently supported on `FLOAT`, `STRING`, and `COLOR` variables.
 *
 * `ALL_SCOPES` is a special scope that means that the variable will be shown in the variable picker for all variable fields. If `ALL_SCOPES` is set, no additional scopes can be set.
 *
 * `ALL_FILLS` is a special scope that means that the variable will be shown in the variable picker for all fill fields. If `ALL_FILLS` is set, no additional fill scopes can be set.
 *
 * Valid scopes for `FLOAT` variables:
 * - `ALL_SCOPES`
 * - `TEXT_CONTENT`
 * - `WIDTH_HEIGHT`
 * - `GAP`
 * - `STROKE_FLOAT`
 * - `EFFECT_FLOAT`
 * - `OPACITY`
 * - `FONT_WEIGHT`
 * - `FONT_SIZE`
 * - `LINE_HEIGHT`
 * - `LETTER_SPACING`
 * - `PARAGRAPH_SPACING`
 * - `PARAGRAPH_INDENT`
 *
 * Valid scopes for `STRING` variables:
 * - `ALL_SCOPES`
 * - `TEXT_CONTENT`
 * - `FONT_FAMILY`
 * - `FONT_STYLE`
 *
 * Valid scopes for `COLOR` variables:
 * - `ALL_SCOPES`
 * - `ALL_FILLS`
 * - `FRAME_FILL`
 * - `SHAPE_FILL`
 * - `TEXT_FILL`
 * - `STROKE_COLOR`
 * - `EFFECT_COLOR`
 */
export var VariableScope;
(function (VariableScope) {
    VariableScope["ALL_SCOPES"] = "ALL_SCOPES";
    VariableScope["TEXT_CONTENT"] = "TEXT_CONTENT";
    VariableScope["CORNER_RADIUS"] = "CORNER_RADIUS";
    VariableScope["WIDTH_HEIGHT"] = "WIDTH_HEIGHT";
    VariableScope["GAP"] = "GAP";
    VariableScope["ALL_FILLS"] = "ALL_FILLS";
    VariableScope["FRAME_FILL"] = "FRAME_FILL";
    VariableScope["SHAPE_FILL"] = "SHAPE_FILL";
    VariableScope["TEXT_FILL"] = "TEXT_FILL";
    VariableScope["STROKE_COLOR"] = "STROKE_COLOR";
    VariableScope["STROKE_FLOAT"] = "STROKE_FLOAT";
    VariableScope["EFFECT_FLOAT"] = "EFFECT_FLOAT";
    VariableScope["EFFECT_COLOR"] = "EFFECT_COLOR";
    VariableScope["OPACITY"] = "OPACITY";
    VariableScope["FONT_FAMILY"] = "FONT_FAMILY";
    VariableScope["FONT_STYLE"] = "FONT_STYLE";
    VariableScope["FONT_WEIGHT"] = "FONT_WEIGHT";
    VariableScope["FONT_SIZE"] = "FONT_SIZE";
    VariableScope["LINE_HEIGHT"] = "LINE_HEIGHT";
    VariableScope["LETTER_SPACING"] = "LETTER_SPACING";
    VariableScope["PARAGRAPH_SPACING"] = "PARAGRAPH_SPACING";
    VariableScope["PARAGRAPH_INDENT"] = "PARAGRAPH_INDENT";
})(VariableScope || (VariableScope = {}));
import axios from "axios";
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = async ({ secure, path, type, query, format, body, ...params }) => {
            const secureParams = ((typeof secure === "boolean" ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = format || this.format || undefined;
            if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
                body = this.createFormData(body);
            }
            if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
                body = JSON.stringify(body);
            }
            return this.instance.request({
                ...requestParams,
                headers: {
                    ...(requestParams.headers || {}),
                    ...(type ? { "Content-Type": type } : {}),
                },
                params: query,
                responseType: responseFormat,
                data: body,
                url: path,
            });
        };
        this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://api.figma.com" });
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    mergeRequestParams(params1, params2) {
        const method = params1.method || (params2 && params2.method);
        return {
            ...this.instance.defaults,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...((method && this.instance.defaults.headers[method.toLowerCase()]) || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
    stringifyFormItem(formItem) {
        if (typeof formItem === "object" && formItem !== null) {
            return JSON.stringify(formItem);
        }
        else {
            return `${formItem}`;
        }
    }
    createFormData(input) {
        if (input instanceof FormData) {
            return input;
        }
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent = property instanceof Array ? property : [property];
            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }
            return formData;
        }, new FormData());
    }
}
/**
 * @title Figma API
 * @version 0.25.0
 * @termsOfService https://www.figma.com/developer-terms/
 * @baseUrl https://api.figma.com
 * @externalDocs https://www.figma.com/developers/api
 * @contact <support@figma.com>
 *
 * This is the OpenAPI specification for the [Figma REST API](https://www.figma.com/developers/api).
 *
 * Note: we are releasing the OpenAPI specification as a beta given the large surface area and complexity of the REST API. If you notice any inaccuracies with the specification, please [file an issue](https://github.com/figma/rest-api-spec/issues).
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.v1 = {
            /**
             * @description Returns the document identified by `file_key` as a JSON object. The file key can be parsed from any Figma file url: `https://www.figma.com/file/{file_key}/{title}`. The `document` property contains a node of type `DOCUMENT`. The `components` property contains a mapping from node IDs to component metadata. This is to help you determine which components each instance comes from.
             *
             * @tags Files
             * @name GetFile
             * @summary Get file JSON
             * @request GET:/v1/files/{file_key}
             * @secure
             */
            getFile: (fileKey, query, params = {}) => this.request({
                path: `/v1/files/${fileKey}`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Returns the nodes referenced to by `ids` as a JSON object. The nodes are retrieved from the Figma file referenced to by `file_key`. The node ID and file key can be parsed from any Figma node url: `https://www.figma.com/file/{file_key}/{title}?node-id={id}` The `name`, `lastModified`, `thumbnailUrl`, `editorType`, and `version` attributes are all metadata of the specified file. The `linkAccess` field describes the file link share permission level. There are 5 types of permissions a shared link can have: `"inherit"`, `"view"`, `"edit"`, `"org_view"`, and `"org_edit"`. `"inherit"` is the default permission applied to files created in a team project, and will inherit the project's permissions. `"org_view"` and `"org_edit"` restrict the link to org users. The `document` attribute contains a Node of type `DOCUMENT`. The `components` key contains a mapping from node IDs to component metadata. This is to help you determine which components each instance comes from. By default, no vector data is returned. To return vector data, pass the geometry=paths parameter to the endpoint. Each node can also inherit properties from applicable styles. The styles key contains a mapping from style IDs to style metadata. Important: the nodes map may contain values that are `null`. This may be due to the node id not existing within the specified file.
             *
             * @tags Files
             * @name GetFileNodes
             * @summary Get file JSON for specific nodes
             * @request GET:/v1/files/{file_key}/nodes
             * @secure
             */
            getFileNodes: (fileKey, query, params = {}) => this.request({
                path: `/v1/files/${fileKey}/nodes`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Renders images from a file. If no error occurs, `"images"` will be populated with a map from node IDs to URLs of the rendered images, and `"status"` will be omitted. The image assets will expire after 30 days. Images up to 32 megapixels can be exported. Any images that are larger will be scaled down. Important: the image map may contain values that are `null`. This indicates that rendering of that specific node has failed. This may be due to the node id not existing, or other reasons such has the node having no renderable components. It is guaranteed that any node that was requested for rendering will be represented in this map whether or not the render succeeded. To render multiple images from the same file, use the `ids` query parameter to specify multiple node ids. ``` GET /v1/images/:key?ids=1:2,1:3,1:4 ```
             *
             * @tags Files
             * @name GetImages
             * @summary Render images of file nodes
             * @request GET:/v1/images/{file_key}
             * @secure
             */
            getImages: (fileKey, query, params = {}) => this.request({
                path: `/v1/images/${fileKey}`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Returns download links for all images present in image fills in a document. Image fills are how Figma represents any user supplied images. When you drag an image into Figma, we create a rectangle with a single fill that represents the image, and the user is able to transform the rectangle (and properties on the fill) as they wish. This endpoint returns a mapping from image references to the URLs at which the images may be download. Image URLs will expire after no more than 14 days. Image references are located in the output of the GET files endpoint under the `imageRef` attribute in a `Paint`.
             *
             * @tags Files
             * @name GetImageFills
             * @summary Get image fills
             * @request GET:/v1/files/{file_key}/images
             * @secure
             */
            getImageFills: (fileKey, params = {}) => this.request({
                path: `/v1/files/${fileKey}/images`,
                method: "GET",
                secure: true,
                ...params,
            }),
            /**
             * @description You can use this endpoint to get a list of all the Projects within the specified team. This will only return projects visible to the authenticated user or owner of the developer token. Note: it is not currently possible to programmatically obtain the team id of a user just from a token. To obtain a team id, navigate to a team page of a team you are a part of. The team id will be present in the URL after the word team and before your team name.
             *
             * @tags Projects
             * @name GetTeamProjects
             * @summary Get projects in a team
             * @request GET:/v1/teams/{team_id}/projects
             * @secure
             */
            getTeamProjects: (teamId, params = {}) => this.request({
                path: `/v1/teams/${teamId}/projects`,
                method: "GET",
                secure: true,
                ...params,
            }),
            /**
             * @description Get a list of all the Files within the specified project.
             *
             * @tags Projects
             * @name GetProjectFiles
             * @summary Get files in a project
             * @request GET:/v1/projects/{project_id}/files
             * @secure
             */
            getProjectFiles: (projectId, query, params = {}) => this.request({
                path: `/v1/projects/${projectId}/files`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description This endpoint fetches the version history of a file, allowing you to see the progression of a file over time. You can then use this information to render a specific version of the file, via another endpoint.
             *
             * @tags Files
             * @name GetFileVersions
             * @summary Get versions of a file
             * @request GET:/v1/files/{file_key}/versions
             * @secure
             */
            getFileVersions: (fileKey, query, params = {}) => this.request({
                path: `/v1/files/${fileKey}/versions`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Gets a list of comments left on the file.
             *
             * @tags Comments
             * @name GetComments
             * @summary Get comments in a file
             * @request GET:/v1/files/{file_key}/comments
             * @secure
             */
            getComments: (fileKey, query, params = {}) => this.request({
                path: `/v1/files/${fileKey}/comments`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Posts a new comment on the file.
             *
             * @tags Comments
             * @name PostComment
             * @summary Add a comment to a file
             * @request POST:/v1/files/{file_key}/comments
             * @secure
             */
            postComment: (fileKey, data, params = {}) => this.request({
                path: `/v1/files/${fileKey}/comments`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),
            /**
             * @description Deletes a specific comment. Only the person who made the comment is allowed to delete it.
             *
             * @tags Comments
             * @name DeleteComment
             * @summary Delete a comment
             * @request DELETE:/v1/files/{file_key}/comments/{comment_id}
             * @secure
             */
            deleteComment: (fileKey, commentId, params = {}) => this.request({
                path: `/v1/files/${fileKey}/comments/${commentId}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),
            /**
             * @description Gets a paginated list of reactions left on the comment.
             *
             * @tags Comment Reactions
             * @name GetCommentReactions
             * @summary Get reactions for a comment
             * @request GET:/v1/files/{file_key}/comments/{comment_id}/reactions
             * @secure
             */
            getCommentReactions: (fileKey, commentId, query, params = {}) => this.request({
                path: `/v1/files/${fileKey}/comments/${commentId}/reactions`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Posts a new comment reaction on a file comment.
             *
             * @tags Comment Reactions
             * @name PostCommentReaction
             * @summary Add a reaction to a comment
             * @request POST:/v1/files/{file_key}/comments/{comment_id}/reactions
             * @secure
             */
            postCommentReaction: (fileKey, commentId, data, params = {}) => this.request({
                path: `/v1/files/${fileKey}/comments/${commentId}/reactions`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),
            /**
             * @description Deletes a specific comment reaction. Only the person who made the reaction is allowed to delete it.
             *
             * @tags Comment Reactions
             * @name DeleteCommentReaction
             * @summary Delete a reaction
             * @request DELETE:/v1/files/{file_key}/comments/{comment_id}/reactions
             * @secure
             */
            deleteCommentReaction: (fileKey, commentId, query, params = {}) => this.request({
                path: `/v1/files/${fileKey}/comments/${commentId}/reactions`,
                method: "DELETE",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Returns the user information for the currently authenticated user.
             *
             * @tags Users
             * @name GetMe
             * @summary Get current user
             * @request GET:/v1/me
             * @secure
             */
            getMe: (params = {}) => this.request({
                path: `/v1/me`,
                method: "GET",
                secure: true,
                ...params,
            }),
            /**
             * @description Get a paginated list of published components within a team library.
             *
             * @tags Components
             * @name GetTeamComponents
             * @summary Get team components
             * @request GET:/v1/teams/{team_id}/components
             * @secure
             */
            getTeamComponents: (teamId, query, params = {}) => this.request({
                path: `/v1/teams/${teamId}/components`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Get a list of published components within a file library.
             *
             * @tags Components
             * @name GetFileComponents
             * @summary Get file components
             * @request GET:/v1/files/{file_key}/components
             * @secure
             */
            getFileComponents: (fileKey, params = {}) => this.request({
                path: `/v1/files/${fileKey}/components`,
                method: "GET",
                secure: true,
                ...params,
            }),
            /**
             * @description Get metadata on a component by key.
             *
             * @tags Components
             * @name GetComponent
             * @summary Get component
             * @request GET:/v1/components/{key}
             * @secure
             */
            getComponent: (key, params = {}) => this.request({
                path: `/v1/components/${key}`,
                method: "GET",
                secure: true,
                ...params,
            }),
            /**
             * @description Get a paginated list of published component sets within a team library.
             *
             * @tags Component Sets
             * @name GetTeamComponentSets
             * @summary Get team component sets
             * @request GET:/v1/teams/{team_id}/component_sets
             * @secure
             */
            getTeamComponentSets: (teamId, query, params = {}) => this.request({
                path: `/v1/teams/${teamId}/component_sets`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Get a list of published component sets within a file library.
             *
             * @tags Component Sets
             * @name GetFileComponentSets
             * @summary Get file component sets
             * @request GET:/v1/files/{file_key}/component_sets
             * @secure
             */
            getFileComponentSets: (fileKey, params = {}) => this.request({
                path: `/v1/files/${fileKey}/component_sets`,
                method: "GET",
                secure: true,
                ...params,
            }),
            /**
             * @description Get metadata on a published component set by key.
             *
             * @tags Component Sets
             * @name GetComponentSet
             * @summary Get component set
             * @request GET:/v1/component_sets/{key}
             * @secure
             */
            getComponentSet: (key, params = {}) => this.request({
                path: `/v1/component_sets/${key}`,
                method: "GET",
                secure: true,
                ...params,
            }),
            /**
             * @description Get a paginated list of published styles within a team library.
             *
             * @tags Styles
             * @name GetTeamStyles
             * @summary Get team styles
             * @request GET:/v1/teams/{team_id}/styles
             * @secure
             */
            getTeamStyles: (teamId, query, params = {}) => this.request({
                path: `/v1/teams/${teamId}/styles`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Get a list of published styles within a file library.
             *
             * @tags Styles
             * @name GetFileStyles
             * @summary Get file styles
             * @request GET:/v1/files/{file_key}/styles
             * @secure
             */
            getFileStyles: (fileKey, params = {}) => this.request({
                path: `/v1/files/${fileKey}/styles`,
                method: "GET",
                secure: true,
                ...params,
            }),
            /**
             * @description Get metadata on a style by key.
             *
             * @tags Styles
             * @name GetStyle
             * @summary Get style
             * @request GET:/v1/styles/{key}
             * @secure
             */
            getStyle: (key, params = {}) => this.request({
                path: `/v1/styles/${key}`,
                method: "GET",
                secure: true,
                ...params,
            }),
            /**
             * @description Returns a list of activity log events
             *
             * @tags Activity Logs
             * @name GetActivityLogs
             * @summary Get activity logs
             * @request GET:/v1/activity_logs
             * @secure
             */
            getActivityLogs: (query, params = {}) => this.request({
                path: `/v1/activity_logs`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description There are two methods to query for a user's payment information on a plugin, widget, or Community file. The first method, using plugin payment tokens, is typically used when making queries from a plugin's or widget's code. The second method, providing a user ID and resource ID, is typically used when making queries from anywhere else. Note that you can only query for resources that you own. In most cases, this means that you can only query resources that you originally created.
             *
             * @tags Payments
             * @name GetPayments
             * @summary Get payments
             * @request GET:/v1/payments
             * @secure
             */
            getPayments: (query, params = {}) => this.request({
                path: `/v1/payments`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description **This API is available to full members of Enterprise orgs.** The `GET /v1/files/:file_key/variables/local` endpoint lets you enumerate local variables created in the file and remote variables used in the file. Remote variables are referenced by their `subscribed_id`. As a part of the Variables related API additions, the `GET /v1/files/:file_key` endpoint now returns a `boundVariables` property, containing the `variableId` of the bound variable. The `GET /v1/files/:file_key/variables/local` endpoint can be used to get the full variable or variable collection object. Note that `GET /v1/files/:file_key/variables/published` does not return modes. Instead, you will need to use the `GET /v1/files/:file_key/variables/local` endpoint, in the same file, to examine the mode values.
             *
             * @tags Variables
             * @name GetLocalVariables
             * @summary Get local variables
             * @request GET:/v1/files/{file_key}/variables/local
             * @secure
             */
            getLocalVariables: (fileKey, params = {}) => this.request({
                path: `/v1/files/${fileKey}/variables/local`,
                method: "GET",
                secure: true,
                ...params,
            }),
            /**
             * @description **This API is available to full members of Enterprise orgs.** The `GET /v1/files/:file_key/variables/published` endpoint returns the variables that are published from the given file. The response for this endpoint contains some key differences compared to the `GET /v1/files/:file_key/variables/local` endpoint: - Each variable and variable collection contains a `subscribed_id`. - Modes are omitted for published variable collections Published variables have two ids: an id that is assigned in the file where it is created (`id`), and an id that is used by subscribing files (`subscribed_id`). The `id` and `key` are stable over the lifetime of the variable. The `subscribed_id` changes every time the variable is modified and published. The same is true for variable collections. The `updatedAt` fields are ISO 8601 timestamps that indicate the last time that a change to a variable was published. For variable collections, this timestamp will change any time a variable in the collection is changed.
             *
             * @tags Variables
             * @name GetPublishedVariables
             * @summary Get published variables
             * @request GET:/v1/files/{file_key}/variables/published
             * @secure
             */
            getPublishedVariables: (fileKey, params = {}) => this.request({
                path: `/v1/files/${fileKey}/variables/published`,
                method: "GET",
                secure: true,
                ...params,
            }),
            /**
             * @description **This API is available to full members of Enterprise orgs with Editor seats.** The `POST /v1/files/:file_key/variables` endpoint lets you bulk create, update, and delete variables and variable collections. The request body supports the following 4 top-level arrays. Changes from these arrays will be applied in the below order, and within each array, by array order. - **variableCollections**: For creating, updating, and deleting variable collections - **variableModes**: For creating, updating, and deleting modes within variable collections - Each collection can have a maximum of 40 modes - Mode names cannot be longer than 40 characters - **variables**: For creating, updating, and deleting variables - Each collection can have a maximum of 5000 variables - Variable names must be unique within a collection and cannot contain certain special characters such as `.{}` - **variableModeValues**: For setting a variable value under a specific mode. - When setting aliases, a variable cannot be aliased to itself or form an alias cycle Temporary ids can be used to reference an object later in the same POST request body. They can be used at create time in the `id` property of variable collections, modes, variables, and in the `initialModeId` property of variable collections. They are scoped to a single request body, and must be unique within the body. The mapping of temporary ids to real ids is returned in the response. This endpoint has the following key behaviors: - The request body must be 4MB or less. - Must include an `action` property for collections, modes, and variables to tell the API whether to create, update, or delete the object. - When creating a collection, mode, or variable, you can include a temporary `id` that can be referenced in dependent objects in the same request. For example, you can create a new collection with the id `"my_new_collection"`. You can then set `variableCollectionId` to `"my_new_collection"` in new modes or variables. Temporary ids must be unique in the request body. - New collections always come with one mode. You can reference this mode by setting `initialModeId` to a temporary id in the request body. This is useful if you want to set values for variables in the mode in the `variableModeValues` array. - The `tempIdToRealId` array returns a mapping of the temporary ids in the request, to the real ids of the newly created objects. - When adding new modes or variables, default variable values will be applied, consistent with what happens in the UI. - Everything to be created, updated, and deleted in the request body is treated as one atomic operation. If there is any validation failure, you will get a 400 status code response, and no changes will be persisted. - You will not be able to update remote variables or variable collections. You can only update variables in the file where they were originally created.
             *
             * @tags Variables
             * @name PostVariables
             * @summary Create/modify/delete variables
             * @request POST:/v1/files/{file_key}/variables
             * @secure
             */
            postVariables: (fileKey, data, params = {}) => this.request({
                path: `/v1/files/${fileKey}/variables`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),
            /**
             * @description Get dev resources in a file
             *
             * @tags Dev Resources
             * @name GetDevResources
             * @summary Get dev resources
             * @request GET:/v1/files/{file_key}/dev_resources
             * @secure
             */
            getDevResources: (fileKey, query, params = {}) => this.request({
                path: `/v1/files/${fileKey}/dev_resources`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Bulk create dev resources across multiple files. Dev resources that are successfully created will show up in the links_created array in the response. If there are any dev resources that cannot be created, you may still get a 200 response. These resources will show up in the errors array. Some reasons a dev resource cannot be created include: - Resource points to a `file_key` that cannot be found. - The node already has the maximum of 10 dev resources. - Another dev resource for the node has the same url.
             *
             * @tags Dev Resources
             * @name PostDevResources
             * @summary Create dev resources
             * @request POST:/v1/dev_resources
             * @secure
             */
            postDevResources: (data, params = {}) => this.request({
                path: `/v1/dev_resources`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),
            /**
             * @description Bulk update dev resources across multiple files. Ids for dev resources that are successfully updated will show up in the `links_updated` array in the response. If there are any dev resources that cannot be updated, you may still get a 200 response. These resources will show up in the `errors` array.
             *
             * @tags Dev Resources
             * @name PutDevResources
             * @summary Update dev resources
             * @request PUT:/v1/dev_resources
             * @secure
             */
            putDevResources: (data, params = {}) => this.request({
                path: `/v1/dev_resources`,
                method: "PUT",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),
            /**
             * @description Delete a dev resource from a file
             *
             * @tags Dev Resources
             * @name DeleteDevResource
             * @summary Delete dev resource
             * @request DELETE:/v1/files/{file_key}/dev_resources/{dev_resource_id}
             * @secure
             */
            deleteDevResource: (fileKey, devResourceId, params = {}) => this.request({
                path: `/v1/files/${fileKey}/dev_resources/${devResourceId}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),
            /**
             * @description Returns a list of library analytics component actions data broken down by the requested dimension.
             *
             * @tags Library Analytics
             * @name GetLibraryAnalyticsComponentActions
             * @summary Get library analytics component action data.
             * @request GET:/v1/analytics/libraries/{file_key}/component/actions
             * @secure
             */
            getLibraryAnalyticsComponentActions: (fileKey, query, params = {}) => this.request({
                path: `/v1/analytics/libraries/${fileKey}/component/actions`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Returns a list of library analytics component usage data broken down by the requested dimension.
             *
             * @tags Library Analytics
             * @name GetLibraryAnalyticsComponentUsages
             * @summary Get library analytics component usage data.
             * @request GET:/v1/analytics/libraries/{file_key}/component/usages
             * @secure
             */
            getLibraryAnalyticsComponentUsages: (fileKey, query, params = {}) => this.request({
                path: `/v1/analytics/libraries/${fileKey}/component/usages`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Returns a list of library analytics style actions data broken down by the requested dimension.
             *
             * @tags Library Analytics
             * @name GetLibraryAnalyticsStyleActions
             * @summary Get library analytics style action data.
             * @request GET:/v1/analytics/libraries/{file_key}/style/actions
             * @secure
             */
            getLibraryAnalyticsStyleActions: (fileKey, query, params = {}) => this.request({
                path: `/v1/analytics/libraries/${fileKey}/style/actions`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Returns a list of library analytics style usage data broken down by the requested dimension.
             *
             * @tags Library Analytics
             * @name GetLibraryAnalyticsStyleUsages
             * @summary Get library analytics style usage data.
             * @request GET:/v1/analytics/libraries/{file_key}/style/usages
             * @secure
             */
            getLibraryAnalyticsStyleUsages: (fileKey, query, params = {}) => this.request({
                path: `/v1/analytics/libraries/${fileKey}/style/usages`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Returns a list of library analytics variable actions data broken down by the requested dimension.
             *
             * @tags Library Analytics
             * @name GetLibraryAnalyticsVariableActions
             * @summary Get library analytics variable action data.
             * @request GET:/v1/analytics/libraries/{file_key}/variable/actions
             * @secure
             */
            getLibraryAnalyticsVariableActions: (fileKey, query, params = {}) => this.request({
                path: `/v1/analytics/libraries/${fileKey}/variable/actions`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
            /**
             * @description Returns a list of library analytics variable usage data broken down by the requested dimension.
             *
             * @tags Library Analytics
             * @name GetLibraryAnalyticsVariableUsages
             * @summary Get library analytics variable usage data.
             * @request GET:/v1/analytics/libraries/{file_key}/variable/usages
             * @secure
             */
            getLibraryAnalyticsVariableUsages: (fileKey, query, params = {}) => this.request({
                path: `/v1/analytics/libraries/${fileKey}/variable/usages`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),
        };
        this.v2 = {
            /**
             * @description Create a new webhook which will call the specified endpoint when the event triggers. By default, this webhook will automatically send a PING event to the endpoint when it is created. If this behavior is not desired, you can create the webhook and set the status to PAUSED and reactivate it later.
             *
             * @tags Webhooks
             * @name PostWebhook
             * @summary Create a webhook
             * @request POST:/v2/webhooks
             * @secure
             */
            postWebhook: (data, params = {}) => this.request({
                path: `/v2/webhooks`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),
            /**
             * @description Get a webhook by ID.
             *
             * @tags Webhooks
             * @name GetWebhook
             * @summary Get a webhook
             * @request GET:/v2/webhooks/{webhook_id}
             * @secure
             */
            getWebhook: (webhookId, params = {}) => this.request({
                path: `/v2/webhooks/${webhookId}`,
                method: "GET",
                secure: true,
                ...params,
            }),
            /**
             * @description Update a webhook by ID.
             *
             * @tags Webhooks
             * @name PutWebhook
             * @summary Update a webhook
             * @request PUT:/v2/webhooks/{webhook_id}
             * @secure
             */
            putWebhook: (webhookId, data, params = {}) => this.request({
                path: `/v2/webhooks/${webhookId}`,
                method: "PUT",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),
            /**
             * @description Deletes the specified webhook. This operation cannot be reversed.
             *
             * @tags Webhooks
             * @name DeleteWebhook
             * @summary Delete a webhook
             * @request DELETE:/v2/webhooks/{webhook_id}
             * @secure
             */
            deleteWebhook: (webhookId, params = {}) => this.request({
                path: `/v2/webhooks/${webhookId}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),
            /**
             * @description Returns all webhooks registered under the specified team.
             *
             * @tags Webhooks
             * @name GetTeamWebhooks
             * @summary Get team webhooks
             * @request GET:/v2/teams/{team_id}/webhooks
             * @secure
             */
            getTeamWebhooks: (teamId, params = {}) => this.request({
                path: `/v2/teams/${teamId}/webhooks`,
                method: "GET",
                secure: true,
                ...params,
            }),
            /**
             * @description Returns all webhook requests sent within the last week. Useful for debugging.
             *
             * @tags Webhooks
             * @name GetWebhookRequests
             * @summary Get webhook requests
             * @request GET:/v2/webhooks/{webhook_id}/requests
             * @secure
             */
            getWebhookRequests: (webhookId, params = {}) => this.request({
                path: `/v2/webhooks/${webhookId}/requests`,
                method: "GET",
                secure: true,
                ...params,
            }),
        };
    }
}
