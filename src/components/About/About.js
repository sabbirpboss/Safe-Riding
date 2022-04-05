import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>site name: "SAFE RIDING"</h1>

      <div className="about-info">
        <ol>
        <li>
          installed react 18 version and created an awesome bike review website
        </li>
        <li>using react router DOM</li>
        <li>created Link by using react router "Routes"</li>
        <li>use charts from recharts.org</li>
        </ol>
      </div>
        <hr />
      <p className="note">
        note: At first I am installed react bootstrap for using Bootstrap. But
        then I am confused to use that. So, finally I have used vanilla css, but
        I could not remove those installed bootstrap package yet. And also I
        never try to remove that bootstrap package because I was being afraid
        what if my project was crushed.
      </p>
    </div>
  );
};

export default About;
