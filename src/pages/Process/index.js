import "./index.css";
export const Process = () => {
  return (
    <div>
      <h2>● 成长历程</h2>
      <hr />
      <div className="table">
        <table border="1">
          <thead>
            <tr>
              <th rowSpan="2">受理员</th>
              <th rowSpan="2">受理数</th>
              <th colSpan="2">拟办意见</th>
              <th colSpan="2">返回修改</th>
            </tr>
            <tr>
              <th>同意</th>
              <th>比例</th>
              <th>数量</th>
              <th>比例</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};
