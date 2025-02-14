import { Button, Card, Form, Input, message } from "antd";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../utils/token";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    message.success("登录成功");
  }, []);
  const navigate = useNavigate();
  const handleLogin = (val) => {
    console.log(val, "val");
    axios
      .post("/api/login", { val })
      .then((res) => {
        if (res.data.code === "200") {
          console.log("res", res);
          setToken(res.data.token);
          navigate("/");
          message.success("登录成功");
        } else if (res.data.code === "401") {
          message.error(res.data.message);
        } else if (res.data.code === "404") {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };
  return (
    <div className="login">
      <Card className="login-container">
        <h3 className="card-title">系统登录</h3>
        <Form onFinish={handleLogin}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "用户名为必须" }]}
          >
            <Input placeholder="请输入用户名" size="large" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "密码为必须" }]}
          >
            <Input.Password placeholder="请输入密码" size="large" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
