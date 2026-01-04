import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { skills } from "./data";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/img/jamersc.jpg" alt="Jamer Catalla" />;
}

function Intro() {
  return (
    <div>
      <h1>Jamer Catalla</h1>
      <p className="intro">
        Software Engineer in NexBridge Technologies Inc. (former Assoc. Project
        Manager). Currently a Laravel/Php API Backend Developer. Springboot
        Developer & DevOps practitioner. My indoor activities are studying,
        reading, listening music & podcast. Outdoor activities hiking, trekking,
        running/jogging, camping, & beachineering and more.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
