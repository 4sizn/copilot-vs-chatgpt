import React, { useState, useEffect, useRef } from "react";

export const VideoComponent: React.FC = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const getMediaStream = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setStream(mediaStream);
      } catch (error) {
        console.error("Error accessing user media", error);
      }
    };

    getMediaStream();
  }, []);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return <div>{stream && <video ref={videoRef} autoPlay />}</div>;
};

export default VideoComponent;

// To output video from the camera using React TypeScript, you can use the getUserMedia API to access the user's camera and display the video in a video element. Here is an example code snippet:

// In this code snippet, we first define a state variable stream to store the user's media stream. We also define a videoRef using the useRef hook to get a reference to the video element.

// We use the useEffect hook to call the getUserMedia API to access the user's camera and set the stream state variable with the resulting media stream.

// We then use another useEffect hook to set the srcObject property of the video element with the stream state variable.

// Finally, we render the video element only if we have a valid stream object.

// Note that to use the getUserMedia API, you may need to request permission from the user to access their camera. You can handle this using the Permissions API or by adding the permission attribute to the video element.
