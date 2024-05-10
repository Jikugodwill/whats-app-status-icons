import React, { useState, useEffect } from 'react';

const CircleWithArcs = ({ imageUrl, arcData }) => {
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const newCanvas = document.createElement('canvas');
    newCanvas.width = 200;
    newCanvas.height = 200;
    setCanvas(newCanvas);
  }, []);

  useEffect(() => {
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Clear previous drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw circle
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white'; // adjust fill color as needed
    ctx.fill();

    // Draw image
    const image = new Image();
    image.onload = () => {
      ctx.drawImage(image, centerX - image.width / 2, centerY - image.height / 2);
      drawArcs(ctx);
    };
    image.src = imageUrl;
  }, [arcData, canvas]);

  const drawArcs = (ctx) => {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY);

    const totalArcs = arcData.length;
    const anglePerArc = (2 * Math.PI) / totalArcs; // Even distribution

    let startingAngle = 0;
    for (const arcValue of arcData) {
      const angle = anglePerArc; // Use constant angle for even size
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startingAngle, startingAngle + angle);
      ctx.lineWidth = 2; // adjust line width
      ctx.strokeStyle = 'blue'; // adjust arc color
      ctx.stroke();
      startingAngle += angle;
    }
  };

  return <canvas ref={(el) => setCanvas(el)} />;
};

export default CircleWithArcs;