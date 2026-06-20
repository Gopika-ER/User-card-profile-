import React from "react";

function UserCard({ name, city, description, image, online, skills }) {
  return (
    <div className="card">
      {/* Conditional Rendering: shows ONLINE or OFFLINE badge based on the online prop */}
      <span className={online ? "status online" : "status offline"}>
        {online ? "ONLINE" : "OFFLINE"}
      </span>

      <img className="avatar" src={image} alt={name} />

      <h2 className="name">{name}</h2>
      <p className="city">{city}</p>
      <p className="description">{description}</p>

      <div className="buttons">
        <button className="btn message-btn">Message</button>
        <button className="btn following-btn">Following</button>
      </div>

      <div className="skills">
        <h3 className="skills-title">SKILLS</h3>
        <div className="skills-list">
          {/* Mapping over data: renders one tag per skill in the skills array */}
          {skills.map((skill, index) => (
            <span className="skill-tag" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
