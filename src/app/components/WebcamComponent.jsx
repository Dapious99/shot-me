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

  const saveImage = () => {
    if (imageSrc) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-"); // Generate a timestamp
      const fileName = `capturedwithshotme-${timestamp}.jpg`; // Create file name with timestamp

      const link = document.createElement("a");
      link.href = imageSrc;
      link.download = fileName;
      link.click();
    }
  };

  return (
    <div className="">
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={780}
        videoConstraints={videoConstraints}
        className="sm:w-68"
      />
      <div className="flex justify-center mt-4">
        <Button
          onClick={capture}
          title="Capture Photo"
          variant="primary"
          size="md"
        />
      </div>
      {imageSrc && (
        <div>
          <h2>Captured Photo:</h2>
          <img src={imageSrc} alt="Captured" style={{ maxWidth: "100%" }} />
          <div className="flex justify-center mt-4">
            <Button
              onClick={saveImage}
              title="Save to Device"
              variant="primary"
              size="md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WebcamComponent;
