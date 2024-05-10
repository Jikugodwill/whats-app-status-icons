import React, { useState } from "react";
import StatusList from "./components/StatusList";
import sampleStatuses from "./sampleData";
import CircleWithArcs from "./components/CircleWithArcs";
import DynamicStatusCircle from "./components/DynamicStatusCircle";

const CircleWithBackground = ({ imageUrl }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    width: "80px",
    height: "80px",
  };

  return (
    <div
      style={{
        ...backgroundStyle,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

const ProgressBar = ({ progress, segments = 20, color }) => {
  const circumference = 2 * Math.PI * 45; // Calculate circumference based on circle radius (adjust)
  const gap = circumference / segments; // Gap between segments (new)
  const strokeDasharray = `${circumference} ${circumference}`; // Full circle for segments (new)
  const strokeDashoffset = `${circumference * (1 - progress)} + ${
    gap * progress
  }`; // Adjusted for gaps (new)

  const progressStyle = {
    strokeDasharray,
    strokeDashoffset,
    strokeLinecap: "round", // Adjust line cap style
    animation: `progress ${progress * 2}s linear forwards infinite`, // Add animation for progress bar
  };

  return (
    <svg
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // marginTop: "52px",
        // width: "100%",
        // height: "100%",
      }}
      width={98}
      height={98}
      viewBox="0 0 104 104"
    >
      <circle
        cx="52"
        cy="52"
        r="50"
        fill="none"
        strokeLinecap="round"
        className="cicle"
        strokeDashoffset="387.69908169872417"
        strokeDasharray="52.83185307179586 10 52.83185307179586 10 52.83185307179586 10 52.83185307179586 10 52.83185307179586 10"
        strokeWidth="4"
        stroke={color}
      ></circle>
    </svg>
  );
};

const StatusPreview = ({ imageUrl, progress, color }) => {
  return (
    <div
      className="status-preview"
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        gap: "50px",
        margin: "10px auto",
        width: "160px",
        height: "180px",
        cursor: "pointer",
      }}
    >
      <ProgressBar progress={progress} color={color} />
      <CircleWithBackground imageUrl={imageUrl} />
    </div>
  );
};

function App() {
  // const [arcs, setArcs] = useState([0.5, 0.3]); // adjust arc values (0 to 1)

  // const handleArcChange = (index, value) => {
  //   setArcs((prevArcs) => {
  //     const updatedArcs = [...prevArcs];
  //     updatedArcs[index] = value;
  //     return updatedArcs;
  //   });
  // };
  const data = [{}, {}, {}, {}, {}];
  return (
    <div className="app">
      {/* <StatusList sampleStatuses={sampleStatuses} /> */}
      {/* <CircleWithArcs imageUrl={imageUri} arcData={arcs} />
      <input
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={arcs[0]}
        onChange={(e) => handleArcChange(0, e.target.value)}
      />
      <input
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={arcs[1]}
        onChange={(e) => handleArcChange(1, e.target.value)}
      /> */}
      {/* <div> */}
      {sampleStatuses.map((status) => (
        <StatusPreview
          key={status.id}
          imageUrl={status.user.profilePicture}
          progress={status.progress}
          color={status.viewed? "darkgrey": "green"}
        />
      ))}
      {/* </div> */}
      {/* <DynamicStatusCircle
        imageUrl={imageUri1}
        stroke="blue"
        strokeWidth="4"
        data={data}
      /> */}
    </div>
  );
}

export default App;
