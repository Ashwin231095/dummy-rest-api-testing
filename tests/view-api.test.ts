import { ApiRequest } from "../api-core/utils/requests";


const api = require('../resources/api.json');

describe("test view apis",() => {
    let request: ApiRequest;
    request = new ApiRequest();

    it("tests view api",  (): void => {
        request.getApi(api.getApi, 200);
    })

    it("tests view with wrong api",  (): void => {
        request.getApi('/api?page=2', 404);
    })
})
