'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsHidden(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loading-screen ${isHidden ? 'hidden' : ''}`}>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
          EPIC AMENITIES
        </h1>
        <p className="text-gray-400 mb-2">Loading Experience...</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">{progress}%</p>
      </div>
    </div>
  );
}
