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
      <div className="Header">
        <h2>● 城市介绍</h2>
        <div className="search">
          <input type="text" />
          <button></button>
        </div>
      </div>
      <hr />
      <div className="intro">
        <p>
          天津市（英文名：Tianjin
          City），简称“津”，别称津沽、津门，是中华人民共和国直辖市、国家中心城市、超大城市，地处中华人民共和国华北地区，海河流域下游，东临渤海，北依燕山，西靠首都北京市，其余均与河北省相邻。截至2023年10月，天津市下辖16个区，总面积11966.45平方千米。截至2023年末，天津市常住人口1364万人，城镇化率85.49%。天津市是国务院批复确定的中国重要的中心城市，国家历史文化名城，现代海洋城市，国际性综合交通枢纽城市，全国先进制造研发基地、北方国际航运核心区、金融创新运营示范区。天津市是中蒙俄经济走廊主要节点、海上丝绸之路的战略支点、“一带一路”交汇点、亚欧大陆桥最近的东部起点，是邻近内陆国家的重要出海口，也是中国北方最大的港口城市及拱卫京畿的要地和门户。
        </p>
      </div>
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
      <div className="places-btn">
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
    </div>
  );
};
