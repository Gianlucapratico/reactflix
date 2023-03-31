import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Film1 from "./components/Film1";
import Film2 from "./components/Film2";
import Film3 from "./components/Film3";
import MyFooter from "./components/MyFooter";
import TopBar from "./components/TopBar";
import TvShows from "./components/TvShows";

function App() {
  return (
    <div className="Container bg-dark">
      <TopBar />
      <TvShows />
      <Film1 />
      <Film2 />
      <Film3 />
      <MyFooter />
    </div>
  );
}

export default App;
