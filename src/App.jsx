import "./App.css";
import { useMediaQuery } from 'react-responsive';
import { MobileMain } from "./components/Mobile/MobileMain";
import { DesktopMain } from "./components/Desktop/DesktopMain";


function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <div>
      {isMobile ? <MobileMain /> : <DesktopMain />}
    </div>
    </>
  );
}

export default App;
