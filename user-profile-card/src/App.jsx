import React from "react";
import UserCard from "./UserCard";
import "./index.css";

function App() {
  const users = [
    {
      name: "James",
      city: "New York",
      description: "Front-end developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      online: false,
      skills: [
        "UI / UX",
        "Front End Development",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node",
      ],
    },
    {
      name: "Robert",
      city: "California",
      description: "Full Stack web developer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      online: true,
      skills: [
        "Vlogging",
        "Web Development",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Angular",
      ],
    },
    {
      name: "Sarah",
      city: "Seattle",
      description: "UX/UI Designer",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      online: true,
      skills: [
        "UI Design",
        "UX Research",
        "Figma",
        "Prototyping",
        "Web Design",
        "CSS",
        "Adobe XD",
      ],
    },
    {
      name: "Michael",
      city: "Austin",
      description: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      online: false,
      skills: [
        "Node.js",
        "Python",
        "Database Design",
        "API Development",
        "MongoDB",
        "PostgreSQL",
        "Docker",
      ],
    },
  ];

  return (
    <div className="app">
      {/* Mapping over the users array to render a UserCard for each one */}
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          image={user.image}
          online={user.online}
          skills={user.skills}
        />
      ))}
    </div>
  );
}

export default App;
