import { ApiRequest } from "./../api-core/utils/requests";

const api = require('../resources/api.json');

describe("test create apis",() => {
    let request: ApiRequest;
    request = new ApiRequest();

    it("tests create api",  (): void => {
        request.createApi(api.createApi, 201);
    })

    it("tests create wrong api",  (): void => {
        request.createApi('/ap/users', 404);
    })
})
