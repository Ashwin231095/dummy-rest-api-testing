import request from 'request';
import { expect } from 'chai';
import dotenv from 'dotenv';

import { Helper } from "../helper";
const api = require('../../resources/api.json');

dotenv.config();


export class ApiRequest extends Helper {
    constructor() {
        super();
    }

    public getApi(apiString: string, statusCode: number): request.Request {
        return request.get(process.env.BASEURL + apiString, (error, response, body) => {
            expect(response.statusCode).to.equal(statusCode);
        });

    }

    public createApi(apiString: string, statusCode: number) {
        return request.post(process.env.BASEURL + apiString,{form: {
            "name": "test",
            "job": "tester"
        }},
        (err,httpResponse,body) => {
            console.log('create api response status', httpResponse.statusCode);
            expect(httpResponse.statusCode).to.equal(statusCode);
        })
    }

    public updateApi(apiString: string, statusCode: number) {
        return request.put(process.env.BASEURL + apiString,{form: {
            "name": "test",
            "job": "tester1"
        }},
        (err,httpResponse,body) => {
            expect(httpResponse.statusCode).to.equal(statusCode);
        })
    }

    public deleteApi() {
        return request.delete(process.env.BASEURL + api.deleteApi ,(httpResponse) => {
            expect(httpResponse).to.equal(null);
        })
    }


    
}
