import TopBar from "./scenes/global/TopBar";
import Home from "./page/FoodDetail"
import SideBar from "./scenes/global/SideBar";
import { Table } from "@mui/material";
function App() {
  return (
    <div className="app">
      <TopBar></TopBar>
      <SideBar></SideBar>
      
    </div>
  );
}

export default App;
