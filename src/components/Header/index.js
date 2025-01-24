import "./index.css";
import pic from "../../assets/01.jpg";
import { Link, useLocation } from "react-router-dom";
export const Header = () => {
  const items = [
    {
      id: 1,
      path: "",
      label: "网站首页",
    },
    {
      id: 2,
      path: "/Process",
      label: "成长历程",
    },
    {
      id: 3,
      path: "/Town",
      label: "我的家乡",
    },
    {
      id: 4,
      path: "",
      label: "我的学校",
    },
    {
      id: 5,
      path: "",
      label: "喜欢美食",
    },
    {
      id: 6,
      path: "/Message",
      label: "给我留言",
    },
  ];
  //获取路由路径
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div>
      <div className="top-img">
        <img src={pic} alt="这是一个图" />
      </div>
      <div className="Navbar">
        <ul className="flex-container">
          {/* <li>网站首页</li>
          <li>
            <Link to="/Process">成长历程</Link>
          </li>
          <li>
            <Link to="/Town">我的家乡</Link>
          </li>
          <li>我的学校</li>
          <li>喜欢美食</li>
          <li>
            <Link to="/Message">给我留言</Link>
          </li> */}
          {items.map((item) => (
            <li
              id={item.id}
              key={item.id}
              className={pathname === item.path ? "Link" : ""}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
