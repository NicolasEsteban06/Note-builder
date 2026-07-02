import { useState } from 'react';
import './IllustrationWrapper.css';

function IllustrationWrapper({
  imagePath,
  alt,
  position = 'top-right',
  settings,
  className = ''
}) {
  const [imageError, setImageError] = useState(false);

  if (!settings.showIllustrations || imageError) {
    return null;
  }

  const sizeClass = `illustration-${settings.illustrationSize}`;
  const positionClass = `illustration-${position}`;

  return (
    <div className={`illustration-wrapper ${positionClass} ${sizeClass} ${className}`}>
      <img
        src={imagePath}
        alt={alt}
        style={{ opacity: settings.illustrationOpacity }}
        onError={() => setImageError(true)}
        className="illustration-image"
      />
    </div>
  );
}

export default IllustrationWrapper;
