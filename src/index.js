import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Profile Card</h1>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <Skilllist skill="Java" />
      <Skilllist skill="Springboot" />
      <Skilllist skill="HTML + CSS" />
      <Skilllist skill="Javascript" />
      <Skilllist skill="JQuery" />
      <Skilllist skill="React" />
      <Skilllist skill="MySQL" />
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="/img/jamer.jpg" alt="jamer" className="img" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h2>Jamer Catalla</h2>
      <p>
        Associate Project Manager, Java Springboot & DevOps practitioner, I love
        reading books, listening news & podcast, learning new things, taking
        risks, & challenges.
      </p>
    </div>
  );
}

function Skilllist(props) {
  return (
    <div>
      <span>{props.skill}</span>
    </div>
  );
}
