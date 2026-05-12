export const Intro = () => {
  const startingDate = new Date(2022, 6);
  const currentDate = new Date();
  let totalMonths = (currentDate.getFullYear() - startingDate.getFullYear()) * 12 + currentDate.getMonth() - startingDate.getMonth() + 1;
  const yearsOfExperience = (totalMonths / 12).toFixed(1);

  return (
    <>
      <div className="mob-intro-main-div">
        <div className="mob-intro-sub-div">
          <div className="mob-intro-header">
            <p>My Digital Journey:</p>
            <p>Empowering Innovation as a Full Stack & Generative AI Engineer.</p>
          </div>
          <div className="mob-intro-content">
            <p style={{marginBottom: '1rem'}}>
              I’m a Full Stack & Generative AI Engineer with {yearsOfExperience}+ years of experience building scalable web applications, AI-powered systems, and modern digital experiences. My expertise lies in React.js, Next.js, React Native, Python (FastAPI), Node.js, REST APIs, and cloud-integrated AI technologies, with a strong focus on performance, scalability, and user experience.
            </p>
            <p style={{marginBottom: '1rem'}}>
              I enjoy transforming complex ideas into clean, intuitive, and impactful digital products. From responsive frontend interfaces to scalable backend architectures and intelligent AI workflows, I love building solutions that solve real-world problems and create meaningful user experiences.
            </p>
            <p style={{marginBottom: '1rem'}}>
              My journey in tech has evolved from frontend engineering and UI-focused development to building intelligent systems powered by LLMs, conversational AI, and automation workflows. I’m passionate about combining modern software engineering with Generative AI to create smarter and more efficient digital platforms.
            </p>
            <p>
              I believe in continuous learning, clean architecture, and building products that are not only visually polished but also technically scalable and future-ready.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
