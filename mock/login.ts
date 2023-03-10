import type { MockMethod } from "vite-plugin-mock"

export default [
  {
    url: "/login",
    method: "post",
    response({ body }) {
      if (!body.username || !body.password) {
        this.res.statusCode = 500
        return {
          code: 500,
          data: {},
          msg: "请填写账号或密码",
        }
      }

      return {
        code: 200,
        data: {
          username: body.username,
          token: "eyJhbGciOiJIUzUxMiJ9",
        },
        msg: "成功",
      }
    },
  },
] as MockMethod[]
