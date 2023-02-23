import { useState } from "react";
import "./App.css";
import { VideoComponent } from "./ChatGptCameraVIdeoComponent";
import ChatGptVideoComponent from "./ChatGptVideoComponent1";
// 코파일럿 자동화 코드 비디오 컴포넌트 작업 실패

function App() {
  return (
    <div className="App">
      <div>
        <VideoComponent />
        <ChatGptVideoComponent width={800} height={600} />
      </div>
    </div>
  );
}

export default App;
