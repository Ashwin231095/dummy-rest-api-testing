import { ApiRequest } from "./../api-core/utils/requests";

describe("test delete apis",() => {
    let request: any;
    request = new ApiRequest();

    it("tests delete api",  (): void => {
        request.deleteApi();
    })
})
