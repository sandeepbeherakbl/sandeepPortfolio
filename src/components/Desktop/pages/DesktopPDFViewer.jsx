import { usePDF } from "react-to-pdf";
import { useEffect, useRef, useState } from "react";
import resumeData from "../../../json/resume.json"; // Import the JSON data
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'

export const DesktopPDFViewer = () => {
  const { toPDF, targetRef } = usePDF({
    filename: "cv.pdf",
  });

  const [visibleSections, setVisibleSections] = useState({});
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const sectionRefs = useRef([]);

  // Fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Carousel navigation
  const handleNextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === resumeData.projects.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? resumeData.projects.length - 1 : prev - 1
    );
  };

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px",
      fontFamily: "'Roboto', sans-serif",
      background: "linear-gradient(145deg, #1e1e2f, #2a2a40)",
      color: "#fff",
      borderRadius: "15px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      height: "80%",
      overflowY: "scroll",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
      padding: "20px",
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "10px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    name: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#783fef",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    },
    contact: {
      fontSize: "18px",
      marginTop: "10px",
      color: "#ccc",
    },
    sectionTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#783fef",
      borderBottom: "2px solid #783fef",
      paddingBottom: "10px",
      marginBottom: "20px",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
    },
    section: {
      opacity: 0,
      transform: "translateY(20px)",
      transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
    },
    visible: {
      opacity: 1,
      transform: "translateY(0)",
    },
    card: {
      background: "rgba(255, 255, 255, 0.05)",
      padding: "20px",
      borderRadius: "10px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      marginBottom: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "20px",
    },
    tableCell: {
      padding: "10px",
      textAlign: "left",
      color: "#ccc",
    },
    list: {
      listStyleType: "disc",
      paddingLeft: "20px",
    },
    listItem: {
      marginBottom: "10px",
      color: "#ccc",
    },
    button: {
      background: "#783fef",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      background: "#5a2dbf",
    },
    carousel: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "10px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    carouselContent: {
      display: "flex",
      transition: "transform 0.5s ease-in-out",
    },
    carouselItem: {
      minWidth: "100%",
      boxSizing: "border-box",
      padding: "20px 120px",
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "10px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    carouselNav: {
      position: "absolute",
      bottom: "5px",
      background: "rgba(227, 227, 227, 0.17)",
      border: "1px solid white",
      color: "#fff",
      //   border: "none",
      padding: " 5px 10px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "background 0.3s ease",
      borderRadius: "25px",
    },
    carouselNavHover: {
      background: "rgba(0, 0, 0, 0.8)",
    },
  };

  return (
    <div style={styles.container}>
      <div ref={targetRef}>
        {/* Header Section */}
        <div
          id="header"
          ref={(el) => (sectionRefs.current[0] = el)}
          style={{
            ...styles.header,
            ...styles.section,
            ...(visibleSections.header && styles.visible),
          }}
        >
          <h1 style={styles.name}>{resumeData.name}</h1>
          <p style={styles.contact}>{resumeData.contact.location}</p>
          <p style={styles.contact}>{resumeData.contact.email}</p>
        </div>

        {/* Profile Section */}
        <div
          id="profile"
          ref={(el) => (sectionRefs.current[1] = el)}
          style={{
            ...styles.section,
            ...(visibleSections.profile && styles.visible),
          }}
        >
          <h2 style={styles.sectionTitle}>PROFILE</h2>
          <div style={styles.card}>
            <p>{resumeData.profile}</p>
          </div>
        </div>

        {/* Education Section */}
        <div
          id="education"
          ref={(el) => (sectionRefs.current[2] = el)}
          style={{
            ...styles.section,
            ...(visibleSections.education && styles.visible),
          }}
        >
          <h2 style={styles.sectionTitle}>EDUCATION</h2>
          <div style={styles.card}>
            <table style={styles.table}>
              {resumeData.education.map((edu, index) => (
                <tbody key={index}>
                  <tr>
                    <td style={styles.tableCell}>{edu.institution}</td>
                    <td style={styles.tableCell}>{edu.year}</td>
                  </tr>
                  <tr>
                    <td style={styles.tableCell}>{edu.degree}</td>
                    <td style={styles.tableCell}>{edu.grade}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>

        {/* Skills Section */}
        <div
          id="skills"
          ref={(el) => (sectionRefs.current[3] = el)}
          style={{
            ...styles.section,
            ...(visibleSections.skills && styles.visible),
          }}
        >
          <h2 style={styles.sectionTitle}>SKILLS</h2>
          <div style={styles.card}>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>Programming Languages:</strong>{" "}
                {resumeData.skills.languages.join(", ")}
              </li>
              <li style={styles.listItem}>
                <strong>Frameworks & Libraries:</strong>{" "}
                {resumeData.skills.frameworks.join(", ")}
              </li>
              <li style={styles.listItem}>
                <strong>Tools & Platforms:</strong>{" "}
                {resumeData.skills.tools.join(", ")}
              </li>
              <li style={styles.listItem}>
                <strong>UI Libraries:</strong>{" "}
                {resumeData.skills.uiLibraries.join(", ")}
              </li>
              <li style={styles.listItem}>
                <strong>Methodologies:</strong>{" "}
                {resumeData.skills.methodologies.join(", ")}
              </li>
              <li style={styles.listItem}>
                <strong>Soft Skills:</strong>{" "}
                {resumeData.skills.softSkills.join(", ")}
              </li>
            </ul>
          </div>
        </div>

        {/* Work Experience Section */}
        <div
          id="workExperience"
          ref={(el) => (sectionRefs.current[4] = el)}
          style={{
            ...styles.section,
            ...(visibleSections.workExperience && styles.visible),
          }}
        >
          <h2 style={styles.sectionTitle}>WORK EXPERIENCE</h2>
          {resumeData.workExperience.map((work, index) => (
            <div style={styles.card} key={index}>
              <h3>{work.title}</h3>
              <p>{work.company}</p>
              <p>
                {work.duration} | {work.location}
              </p>
              <ul style={styles.list}>
                {work.responsibilities.map((resp, i) => (
                  <li key={i} style={styles.listItem}>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div
          id="projects"
          ref={(el) => (sectionRefs.current[5] = el)}
          style={{
            ...styles.section,
            ...(visibleSections.projects && styles.visible),
          }}
        >
          <h2 style={styles.sectionTitle}>PROJECTS</h2>
          <div>
            <CCarousel controls transition="crossfade">
              {resumeData.projects.map((project, index) => (
                <CCarouselItem key={index}>
                  <div style={styles.carouselItem}>
                    <h3>{project.name}</h3>
                    <p>
                      <strong>Technology Stack:</strong>{" "}
                      {project.stack.join(", ")}
                    </p>
                    <p>
                      <strong>Description:</strong>
                    </p>
                    <ul style={styles.list}>
                      {project.description.map((desc, i) => (
                        <li key={i} style={styles.listItem}>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CCarouselItem>
              ))}
            </CCarousel>
          </div>

          {/* <div style={styles.carousel}> */}
          {/* <div
              style={{
                ...styles.carouselContent,
                transform: `translateX(-${currentProjectIndex * 100}%)`,
              }}
            >
              {resumeData.projects.map((project, index) => (
                <div style={styles.carouselItem} key={index}>
                  <h3>{project.name}</h3>
                  <p>
                    <strong>Technology Stack:</strong> {project.stack.join(", ")}
                  </p>
                  <p>
                    <strong>Description:</strong>
                  </p>
                  <ul style={styles.list}>
                    {project.description.map((desc, i) => (
                      <li key={i} style={styles.listItem}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div> */}

          {/* <button
              style={{
                ...styles.carouselNav,
                left: "10px",
              }}
              onClick={handlePrevProject}
            >
              &#10094;
            </button>
            <button
              style={{
                ...styles.carouselNav,
                right: "10px",
              }}
              onClick={handleNextProject}
            >
              &#10095;
            </button> */}
          {/* </div> */}
        </div>

        {/* Personal Qualities Section */}
        <div
          id="personalQualities"
          ref={(el) => (sectionRefs.current[6] = el)}
          style={{
            ...styles.section,
            ...(visibleSections.personalQualities && styles.visible),
          }}
        >
          <h2 style={styles.sectionTitle}>PERSONAL QUALITIES</h2>
          <div style={styles.card}>
            <ul style={styles.list}>
              {resumeData.personalQualities.map((quality, index) => (
                <li key={index} style={styles.listItem}>
                  {quality}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "50px",
        }}
      >
        <button
          style={styles.button}
          onClick={toPDF}
          onMouseEnter={(e) =>
            (e.target.style.background = styles.buttonHover.background)
          }
          onMouseLeave={(e) =>
            (e.target.style.background = styles.button.background)
          }
        >
          Download Resume as PDF
        </button>
      </div>
    </div>
  );
};
