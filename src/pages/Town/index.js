import "./index.css";
import pic1 from "../../assets/02.jpg";
import pic2 from "../../assets/03.jpg";
import pic3 from "../../assets/04.jpg";
import pic4 from "../../assets/05.jpg";
export const Town = () => {
  const items = [
    {
      id: 1,
      img: pic1,
      title: "抗美援朝纪念馆",
      content: "抗美援朝运动历史的专题纪念馆",
    },
    {
      id: 2,
      img: pic2,
      title: "鸭绿江断桥",
      content: "抗美援朝沧桑历史的见证者",
    },
    {
      id: 3,
      img: pic3,
      title: "凤凰山",
      content: "贞观年间，唐太宗李世民游览此山",
    },
    {
      id: 4,
      img: pic4,
      title: "安东老街",
      content: "殖民时期的历史缩影",
    },
  ];
  const pageItems = [
    {
      id: 1,
      label: "首页",
    },
    {
      id: 2,
      label: "<上一页",
    },
    {
      id: 3,
      label: "1",
    },
    {
      id: 4,
      label: "2",
    },
    {
      id: 5,
      label: "3",
    },
    {
      id: 6,
      label: "下一页>",
    },
    {
      id: 7,
      label: "尾页",
    },
  ];
  return (
    <div>
      <h2>● 城市介绍</h2>
      <hr />
      <p>
        丹东市，古称安东，是辽宁省辖地级市，国务院批复确定的辽宁省重要的边境口岸和辽东地区中心城市，辽宁沿海经济带重要的港口城市。地处辽宁省东南部，东与朝鲜的新义州隔江相望，南临黄海，西接鞍山，西南与大连毗邻，北与本溪接壤，地势由东北向西南逐渐降低，属暖温带湿润季风气候区，总面积15289.6平方千米。全市下辖3个市辖区、1个自治县，代管2个县级市。截至2023年末，丹东市常住人口209.2万。
      </p>
      <br />
      <h2>● 名胜古迹</h2>
      <hr />
      <br />
      <ul className="places-interest">
        {items.map((item) => (
          <li id={item.id}>
            <img src={item.img} alt="" />
            <br />
            <strong>{item.title}</strong>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
      <br />
      <ul className="page">
        {pageItems.map((item) => (
          <li id={item.id} className={item.id < 3 ? "paging" : ""}>
            <button className={item.id === 3 ? "onClick" : ""}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
