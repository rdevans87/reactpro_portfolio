import React from "react";
import "./Resume.css";

// By importing the Resume.css file, it is added to the DOM whenever this component loads
function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <div>
      <h3>Skills:</h3>
      <img src="" width="300px" alt="profile" className="profile"></img> 
       <h3>Certificates:</h3>
       <ul>
         <li>Full Stack Coding Bootcamp (2021)</li>
         <li>Agile Master Training (2021)</li>
         <li>Projext Management Professional (2019)</li>
         <li>Software Testing Bootcamp (2019)</li>
       </ul>
      <br></br>
       <h3>Employment:</h3>
       <br></br>
       Product Owner
       <br></br>
       Sr. Technical Support Analyst
      <br></br>
      Customer Service Specialist
      <br></br>
      Education:
      <br></br>
      B.A. Communication and Media Studies.
      </div>
      <div>
        <p>View or Download my full <a href="ryansreactapp/src/assets/RyanEvansResumeUpdated.pdf">Resume</a></p>
      </div>
    </section>


  );
}

export default Resume;