import ApplicationService from "./ApplicationService";
import AuthenticationService from "./AuthenticationService";

export interface ApiServiceContainer {
    application: ApplicationService;
    authentication: AuthenticationService;
}
