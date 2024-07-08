"use client";

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "./Button";

const WebcamComponent = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };

  return (
    <div>
      <h1>Webcam</h1>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <Button
        onClick={capture}
        title="Capture Photo"
        variant="primary"
        size="md"
      />
      <button></button>
      {imageSrc && (
        <div>
          <h2>Captured Photo:</h2>
          <img src={imageSrc} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default WebcamComponent;
