import { useEffect, useState } from "react";
import "../styles/CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      
      // Check if cursor is over clickable element
      const target = event.target;
      const isClickableElement = target.matches('a, button, [role="button"], input[type="submit"], .clickable') ||
        target.closest('a, button, [role="button"], input[type="submit"], .clickable');
      
      setIsClickable(isClickableElement);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className={`custom-cursor ${isClickable ? 'clickable' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`
      }} 
    />
  );
};

export default CustomCursor;
