import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Java",
    level: "advanced",
    color: "#F29111",
  },
  {
    skill: "Springboot",
    level: "advanced",
    color: "#6db33f",
  },
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#ff0000",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#ffff00",
  },
  {
    skill: "JQuery",
    level: "intermediate",
    color: "#0769ad",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#58c4dc",
  },
  {
    skill: "Bootstrap",
    level: "intermediate",
    color: "#6528e0",
  },
  {
    skill: "Git & GitHub",
    level: "intermediate",
    color: "#f14e32",
  },
  {
    skill: "MySQL",
    level: "advanced",
    color: "#0074a3",
  },
];

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
