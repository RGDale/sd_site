import React, { useState, useEffect } from 'react';

function ResponsiveImageComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSrc, setImageSrc] = useState(getImageSrc(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setImageSrc(getImageSrc(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getImageSrc(width) {
    return width < 769 ? '/logo192.png' : '/syd_side_profile.png';
  }

  return (
    <div className="container">
      <div className="image-container">
        <img src={imageSrc} alt="Responsive" />
      </div>
      <div className="svg-overlay">
        <img src={"/logo_white fill white outline.svg"} alt="Overlay" />
      </div>
    </div>
  );
}

export default ResponsiveImageComponent;
