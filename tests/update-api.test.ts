import { ApiRequest } from "./../api-core/utils/requests";

const api = require('../resources/api.json');

describe("test update apis",() => {
    let request: ApiRequest;
    request = new ApiRequest();

    it("tests update api",  (): void => {
        request.updateApi(api.updateApi, 200);
    });

    it("tests update with wrong api",  (): void => {
        request.updateApi('/ai/users/2', 404);
    });
})
