import "./App.css";
import { useMediaQuery } from "react-responsive";
import { MobileMain } from "./components/Mobile/MobileMain";
import { DesktopMain } from "./components/Desktop/DesktopMain";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <Router>
        <div>{isMobile ? <MobileMain /> : <DesktopMain />}</div>
      </Router>
    </>
  );
}

export default App;
