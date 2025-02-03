import "./index.css";
export const Message = () => {
  return (
    <div>
      <h2>● 给我留言</h2>
      <hr />
      <br />
      <form>
        <label>你的姓名： </label>
        <input type="text" className="input-text" />
        <span>（最大可输入10位）</span>
        <br />
        <br />
        <label>你的密码： </label>
        <input type="password" className="input-text" />
        <span>（最大可输入6位）</span>
        <br />
        <br />
        <label>你的性别： </label>
        <input type="radio" name="gender" value="male" /> 男
        <input type="radio" name="gender" value="female" /> 女
        <br />
        <br />
        <label>你的年龄： </label>
        <select id="age" name="age">
          <option value="1">18岁以下</option>
          <option value="2">18岁至30岁</option>
          <option value="3">31岁至60岁</option>
          <option value="4">60岁以上</option>
        </select>
        <br />
        <br />
        <label>你的爱好： </label>
        <input type="checkbox" id="hobby" name="hobby" value="sing" /> 唱歌
        <input type="checkbox" id="hobby" name="hobby" value="travel" /> 旅游
        <input type="checkbox" id="hobby" name="hobby" value="internet" /> 上网
        <input type="checkbox" id="hobby" name="hobby" value="friends" /> 交友
        <br />
        <br />
        <label>给我留言： </label>
        <textarea id="textarea" maxlength="300" />
        <span> （最大可以输入300文字）</span>
        <br />
        <br />
        <button className="submit-form" type="submit" value="submit">
          提交
        </button>
      </form>
    </div>
  );
};
