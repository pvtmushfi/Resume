function Education() {
  const educationData = [
    {
      degree: "B.Tech - Computer Science & Engineering",
      institute: "IES College of Technology, Bhopal",
      score: "CGPA: 8.0",
      year: "Expected Graduation: 2027",
    },
    {
      degree: "Higher Secondary (12th - Science)",
      institute: "CBSE Board",
      score: "72%",
      year: "",
    },
    {
      degree: "Secondary (10th - CBSE)",
      institute: "CBSE Board",
      score: "83.6% (Best 5 Subjects)",
      year: "",
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>

      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.degree}</h3>
            <p><strong>Institute:</strong> {edu.institute}</p>
            <p><strong>Score:</strong> {edu.score}</p>

            {edu.year && (
              <p><strong>{edu.year}</strong></p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;