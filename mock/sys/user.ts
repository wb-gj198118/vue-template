// mock/sys/user
import { MockMethod } from "vite-plugin-mock";
import {
  resultError,
  resultSuccess,
  getRequestToken,
  requestParams,
} from "../_util";

export default [
  {
    url: "/basic-api/getUserInfo",
    method: "get",
    response: (request: requestParams) => {
      console.log("----请求了getUserInfo---");

      return resultSuccess({
        name: "章三",
        age: 40,
        sex: "男",
      });
    },
  },
] as MockMethod[];
