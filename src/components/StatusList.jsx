import React, { useState, useEffect, useRef } from 'react';
import StatusItem from './StatusItem';
import sampleStatuses from '../sampleData';

const StatusList = () => {
  const [viewedStatuses, setViewedStatuses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleStatusViewed = (userId) => {
    setViewedStatuses([...viewedStatuses, userId]);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (currentIndex === sampleStatuses.length - 1) {
        clearInterval(intervalRef.current); // Stop at the end
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sampleStatuses.length);
      }
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const getUserStatuses = (userId) => {
    return sampleStatuses.filter((status) => status.user.id === userId);
  };

  return (
    <div className="status-list">
      {sampleStatuses.map((status) => {
        const userStatuses = getUserStatuses(status.user.id);
        const userStatusIndex = userStatuses.findIndex((s) => s.id === status.id);
        return (
          <StatusItem
            key={status.id}
            {...status}
            onStatusViewed={handleStatusViewed}
            viewed={viewedStatuses.includes(status.id)}
            isActive={currentIndex === userStatusIndex}
            progress={(userStatusIndex + 1) / userStatuses.length} // Added progress prop
          />
        );
      })}
    </div>
  );
};

export default StatusList;
