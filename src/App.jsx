import "./App.css";
import { useMediaQuery } from "react-responsive";
import { MobileMain } from "./components/Mobile/MobileMain";
import { DesktopMain } from "./components/Desktop/DesktopMain";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./components/Desktop/pages/SplashScreen";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Ensure all assets are loaded before hiding splash screen
  useEffect(() => {
    window.onload = () => {
      // Add any additional loading logic here if needed
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <SplashScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <Router>
          {isMobile ? <MobileMain /> : <DesktopMain />}
        </Router>
      )}
    </AnimatePresence>
  );
}

export default App;
