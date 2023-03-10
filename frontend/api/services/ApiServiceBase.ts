import { $Fetch } from "ofetch";

export class ApiServiceBase {
    private client: $Fetch;

    constructor(client: $Fetch) {
        this.client = client;
    }

    protected get call(): $Fetch {
        return this.client;
    }
}
