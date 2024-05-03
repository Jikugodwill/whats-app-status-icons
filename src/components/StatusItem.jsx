import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import './StatusItem.css';

const StatusItem = ({ user, type, url, timePosted, onStatusViewed, viewed, isActive, progress }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isPreview, setIsPreview] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    if (isActive) {
      setIsPreview(true);
      setAnimationProgress(0); // Reset animation on activation
      const intervalId = setInterval(() => {
        setAnimationProgress((prevProgress) => Math.min(prevProgress + 0.02, 1)); // Animate progress
        if (animationProgress === 1) {
          clearInterval(intervalId);
        }
      }, 20); // Adjust interval for desired animation speed
      return () => clearInterval(intervalId);
    } else {
      setIsPreview(false);
      setAnimationProgress(0); // Reset animation on deactivation
    }
  }, [isActive]);

  const handleViewStatus = () => {
    setIsPreview(true);
    onStatusViewed(user.id);
  };

  const renderPreview = () => {
    if (isPreview) {
      if (type === 'image') {
        return <img src={url} alt="Status preview" className="preview-image" />;
      } else if (type === 'video') {
        return (
          <video muted controls className="preview-video">
            <source src={url} type="video/mp4" />
          </video>
        );
      }
    } else {
      return <span className="viewed-indicator">{viewed && "Viewed"}</span>;
    }
  };

  return (
    <div
      className={`status-item ${isActive ? 'active' : ''} ${viewed ? 'viewed' : ''}`}
      onClick={handleViewStatus}
    >
      <img src={user.profilePicture} alt={user.name} className="profile-pic" />
      <div className="status-content">
        <div className="user-info">
          <span className="username">{user.name}</span>
          <span className="time">{timePosted}</span>
        </div>
        {renderPreview()}
        <div className="progress-bar">
          <div
            style={{ width: `${animationProgress * 100}%`, transition: 'width 5s ease-in-out' }}
            className="progress"
          />
        </div>
      </div>
    </div>
  );
};

export default StatusItem;