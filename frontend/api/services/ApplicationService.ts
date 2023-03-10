import Application from "../models/Application";
import { ApiServiceBase } from "./ApiServiceBase";

export default class ApplicationService extends ApiServiceBase {
    async info(): Promise<Application> {
        return await this.call<Application>("/");
    }
}
