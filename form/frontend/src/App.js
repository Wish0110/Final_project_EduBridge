import "antd/dist/antd.css";
import "./App.css";
import {Menu} from "antd";

function App() {
  return (
  <div>
    <Menu
    items={[
      { label: "Home"},
      { label: "Dashboard"},
      { label: "Users List"},
      { label: "Profile"},
      { label: "Submit"},

    ]}>

    </Menu>
  </div>
);
}

export default App;