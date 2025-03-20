import { Api } from "./Api";
import { QueryClient } from "react-query";
declare const queryClient: QueryClient;
declare const apiClientInstance: Api<unknown>;
export default apiClientInstance;
export { queryClient };
