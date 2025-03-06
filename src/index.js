import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skilllist />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/img/jamersc.jpg" alt="jamer" />;
}

function Intro() {
  return (
    <div>
      <h2>Jamer Catalla</h2>
      <p>
        Associate Project Manager in NexBridge Technologies Inc., Java
        Springboot Developer & DevOps practitioner, I like learning new things,
        reading, listening music/podcast etc, hiking, trekking, camping, &
        beachineering.
      </p>
    </div>
  );
}

function Skilllist() {
  return (
    <div className="skill-list">
      <Skill skill="Java+Springboot" emoji="💪" color="#40ff00" />
      <Skill skill="HTML+CSS" emoji="👌" color="#ffbf00" />
      <Skill skill="JavaScript" emoji="👌" color="#ffff00" />
      <Skill skill="JQuery" emoji="👌" color="#ff4000" />
      <Skill skill="React" emoji="👌" color="#00ffbf" />
      <Skill skill="MySQL" emoji="💪" color="#00bfff" />
      <Skill skill="Git+GitHub" emoji="💪" color="#ff8000" />
    </div>
  );
}

function Skill(props) {
  return (
    // using props to other components
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
