import Mock from "mockjs";

const userPools = [
  { name: "laoc", password: "123456" },
  { name: "xchen", password: "123456" },
  { name: "admin", password: "123456" },
  { name: "lucy", password: "123456" },
];

Mock.mock("/api/login", "post", (req) => {
  const { username, password } = JSON.parse(req.body).val;
  const userLength = userPools.filter((item) => {
    return item.name === username;
  });

  if (userLength.length > 0) {
    if (userLength[0].password === password) {
      return {
        code: "200",
        message: "用户登录成功",
        token: Mock.Random.guid(),
      };
    } else {
      return {
        code: "401",
        message: "密码错误",
      };
    }
  } else {
    return {
      code: "404",
      message: "用户不存在",
    };
  }
});
