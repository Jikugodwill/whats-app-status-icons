import React from "react";

const DynamicStatusCircle = ({
  imageUrl,
  stroke,
  strokeWidth,
  data,
  maxItems = 100,
}) => {
  const radius = 50; // Adjust circle radius
  const circumference = 2 * Math.PI * radius;

  const totalItems = Math.min(data.length, maxItems); // Limit items to maxItems
  const arcLength = circumference / Math.max(totalItems, 1); // Avoid division by zero

  const circles = data.slice(0, maxItems).map((item, index) => {
    const dasharray = [];
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      console.log("el: ", element);
    } // Full arc for each item
    const dashoffset = 387.699; // Offset based on item index

    //   alert(dasharray);

    const cx = 52; // Position for even distribution
    const cy = 52;

    return (
      <circle
        key={index}
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={dasharray}
        strokeDashoffset={dashoffset}
      />
    );
  });

  return (
    <svg width="100%" height="100%">
      <defs>
        <clipPath id="circleClip">
          <circle cx="50%" cy="50%" r={radius} />
        </clipPath>
      </defs>
      <image
        href={imageUrl}
        width="100%"
        height="100%"
        clipPath="url(#circleClip)"
      />
      {circles}
    </svg>
  );
};

export default DynamicStatusCircle;
