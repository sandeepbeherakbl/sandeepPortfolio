import { usePDF } from "react-to-pdf";

export const DesktopPDFViewer = () => {
  const { toPDF, targetRef } = usePDF({
    filename: "cv.pdf",
  });

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    name: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#783fef",
    },
    contact: {
      fontSize: "14px",
      //   color: "#555",
      marginTop: "5px",
    },
    sectionTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#783fef",
      borderBottom: "1px solid #783fef",
      paddingBottom: "5px",
      marginBottom: "15px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "20px",
    },
    tableRow: {
      //   borderBottom: "1px solid #ddd",
    },
    tableCell: {
      padding: "10px",
      textAlign: "left",
    },
    list: {
      listStyleType: "disc",
      paddingLeft: "20px",
      marginBottom: "15px",
    },
    listItem: {
      marginBottom: "5px",
    },
    button: {
      backgroundColor: "#3498db",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      marginBottom: "20px",
      textAlign: "center",
    },
    buttonHover: {
      backgroundColor: "#2980b9",
    },
    downloadbtn:{
        width:"100%",
    }
  };

  return (
    <>
      <div style={styles.container}>
        <div ref={targetRef}>
          {/* Header Section */}
          <div style={styles.header}>
            <h1 style={styles.name}>Sandeep Kumar Behera</h1>
            <p style={styles.contact}>Bhubaneswar, India</p>
            <p style={styles.contact}>
              sandeepbeherakbl@gmail.com | 9556230850 | sandeepbeherakbl
            </p>
          </div>

          {/* Profile Section */}
          <div>
            <h2 style={styles.sectionTitle}>PROFILE</h2>
            <p>
              Dedicated and skilled Frontend Engineer with{" "}
              <strong>2.8 years</strong> of experience in ReactJS and modern web
              technologies. Proficient in designing scalable, efficient, and
              modular user interfaces for web and mobile platforms. Adept at
              collaborating with cross-functional teams to deliver user-centric
              products. Passionate about creating seamless user experiences and
              solving complex challenges with innovative solutions.
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h2 style={styles.sectionTitle}>EDUCATION</h2>
            <table style={styles.table}>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}>
                  Indira Gandhi Institute of Technology, Sarang
                </td>
                <td style={styles.tableCell}>2021</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}>
                  B-tech in Metallurgical and Materials Engineering
                </td>
                <td style={styles.tableCell}>8.02 CGPA</td>
              </tr>
            </table>
          </div>

          {/* Skills Section */}
          <div>
            <h2 style={styles.sectionTitle}>SKILLS</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>Programming Languages:</strong> JavaScript (ES6), HTML5,
                CSS3/Sass
              </li>
              <li style={styles.listItem}>
                <strong>Frameworks & Libraries:</strong> ReactJS, Redux,
                Next.js, React Native, AngularJS
              </li>
              <li style={styles.listItem}>
                <strong>Tools & Platforms:</strong> AWS, REST APIs, NPM, GIT,
                CI/CD pipelines
              </li>
              <li style={styles.listItem}>
                <strong>UI Libraries:</strong> Material Design, Chakra UI,
                Tailwind, Bootstrap
              </li>
              <li style={styles.listItem}>
                <strong>Methodologies:</strong> Agile Development, TDD, UX
                Collaboration
              </li>
              <li style={styles.listItem}>
                <strong>Soft Skills:</strong> Excellent communication,
                self-direction, adaptability to dynamic environments
              </li>
            </ul>
          </div>

          {/* Work Experience Section */}
          <div>
            <h2 style={styles.sectionTitle}>WORK EXPERIENCE</h2>
            <h3>Associate Consultant</h3>
            <p>Invincix Solution Private Limited</p>
            <p>2022 – present | Bhubaneswar, India</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Developed high-performance web applications using ReactJS,
                adhering to modular and scalable architecture principles.
              </li>
              <li style={styles.listItem}>
                Led the creation of user-friendly interfaces for carrier and
                business-focused portals, enhancing usability and engagement.
              </li>
              <li style={styles.listItem}>
                Collaborated with cross-functional teams to integrate systems
                and streamline workflows, ensuring reliable and seamless project
                execution.
              </li>
              <li style={styles.listItem}>
                Implemented CI/CD pipelines, ensuring efficient delivery cycles
                and optimizing application performance.
              </li>
              <li style={styles.listItem}>
                Conducted code reviews and enforced coding standards to maintain
                high-quality deliverables.
              </li>
              <li style={styles.listItem}>
                Developed dynamic, real-time features using AWS-based services
                to handle data-intensive applications.
              </li>
              <li style={styles.listItem}>
                Built responsive, cross-browser compliant designs, integrating
                with UX and design teams for consistent user experiences.
              </li>
            </ul>
          </div>

          {/* Projects Section */}
          <div>
            <h2 style={styles.sectionTitle}>PROJECTS</h2>
            <h3>Scheduler Application</h3>
            <p>
              <strong>Technology Stack:</strong> React, CSS, NPM, API
              integration
            </p>
            <p>
              <strong>Description:</strong>
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Developed a scheduling application with Month, Day, and Week
                views.
              </li>
              <li style={styles.listItem}>
                Features include recurring events, daily agendas, and
                notifications for streamlined meeting management.
              </li>
              <li style={styles.listItem}>
                Promotes collaboration and accessibility across various devices.
              </li>
            </ul>

            <h3>Whiteboard Application</h3>
            <p>
              <strong>Technology Stack:</strong> React, CSS, NPM, API
              integration, CICD pipeline
            </p>
            <p>
              <strong>Description:</strong>
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Created a dynamic whiteboard for real-time collaboration,
                supporting drawing, typing, and sticky notes.
              </li>
              <li style={styles.listItem}>
                Ideal for remote teams and virtual classrooms, with continuous
                updates for reliability.
              </li>
              <li style={styles.listItem}>
                Enhances interactive visual communication.
              </li>
            </ul>

            <h3>GDC Mapbox</h3>
            <p>
              <strong>Technology Stack:</strong> React, CSS, NPM, API
              integration with Mapbox
            </p>
            <p>
              <strong>Description:</strong>
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Developed an interactive map showcasing global projects with
                real-time status monitoring.
              </li>
              <li style={styles.listItem}>
                Provides detailed data visualization and intuitive navigation
                for strategic project management.
              </li>
              <li style={styles.listItem}>
                Ensures regular enhancements through a CICD pipeline.
              </li>
            </ul>

            <h3>Office Management System</h3>
            <p>
              <strong>Technology Stack:</strong> Next JS, CSS, Tailwind, NPM,
              API integration
            </p>
            <p>
              <strong>Description:</strong>
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Developed an office management system with role-based access
                control and graphical data representation.
              </li>
              <li style={styles.listItem}>
                Features include note addition and milestone tracking, promoting
                efficient communication and collaboration.
              </li>
              <li style={styles.listItem}>
                Supports a paperless office environment.
              </li>
            </ul>

            <h3>Blood Donation App</h3>
            <p>
              <strong>Technology Stack:</strong> React Native, SASS, NPM, API
              integration
            </p>
            <p>
              <strong>Description:</strong>
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Built a blood donation app for requesting and donating blood,
                connecting donors within a 20 km range.
              </li>
              <li style={styles.listItem}>
                Features multi-language support and seamless login
                authentication.
              </li>
              <li style={styles.listItem}>
                Emphasizes user-friendliness and accessibility, with unit
                testing for reliability.
              </li>
            </ul>
          </div>

          {/* Personal Qualities Section */}
          <div>
            <h2 style={styles.sectionTitle}>PERSONAL QUALITIES</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>Strong problem-solving skills</li>
              <li style={styles.listItem}>
                Excellent communication and teamwork abilities
              </li>
              <li style={styles.listItem}>
                Adaptability to fast-paced development environments
              </li>
              <li style={styles.listItem}>
                Detail-oriented with a focus on delivering high-quality code
              </li>
              <li style={styles.listItem}>
                Passion for continuous learning and self-improvement
              </li>
            </ul>
          </div>
        </div>

        <div style={{display:"flex", justifyContent:"center", marginTop:"50px", width:"100%"}}>
          <a href="/cv.pdf" download>
            <button
              style={styles.button}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = styles.button.backgroundColor)
              }
            >
              Download Resume as PDF
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
