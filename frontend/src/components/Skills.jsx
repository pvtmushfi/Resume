function Skills() {
  const technicalSkills = {
    Languages: ["Java", "Python"],
    "Web Technologies": ["HTML", "CSS", "JavaScript"],
    Frameworks: ["Angular", "FastAPI"],
    Libraries: ["Pandas", "NumPy", "Matplotlib"],
    Databases: ["MySQL"],
    Tools: [
      "Git",
      "GitHub",
      "VS Code",
      "PyCharm",
      "Eclipse",
      "Postman",
    ],
    Concepts: ["OOPs", "DBMS", "Data Structures & Algorithms"],
  };

  const softSkills = [
    "Proficient in English (Spoken & Written)",
    "Effective Team Player",
    "Public Speaking & Anchoring",
    "Leadership & Group Coordination",
    "Adaptable & Proactive",
    "Teamwork & Collaboration",
  ];

  return (
    <section id="skills">
      <h1>My Skills</h1>

      <div className="skills-container">
        <div className="skills-card">
          <h2>Technical Skills</h2>

          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div key={category}>
              <h4>{category}</h4>

              {skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="skills-card">
          <h2>Soft Skills</h2>

          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;