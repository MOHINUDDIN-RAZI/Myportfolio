function Projects() {
  return (
    <>
      <section id="projects" className="section">
        <div className="container text-center">
          <div className="h4 pb-2 text-light border-bottom border-danger d-flex flex-row mb-3">
            Projects
          </div>
          <div className="col custom text-start">
            <h3>My Portfolio Website </h3>
            <br></br>
            <div className="text-secondary">
              Technologies: BootStrap, HTML, CSS, React, GitHub.
              <br></br>
              <br></br>I've built a Personal Portfolio Website to showcase my
              skills, work, education, and experience. This platform serves as a
              digital resume and portfolio, offering visitors insight into my
              capabilities and expertise.
              <br></br>
              <a
                href="https://coursera.org/share/7a975d86d6f23b4aa819ebd466502da1"
                target="_blank"
                className="btn btn-secondary mb-5 mt-4"
              >
                Visit Website
              </a>
            </div>
          </div>
          <div className="col custom text-start">
            <h3>Venomous Snake Detection Website </h3>
            <br></br>
            <div className=" text-secondary">
              Technologies: BootStrap, HTML, CSS, Flask, AIML, Python, GitHub.
              <br></br>
              <br></br>
              The Venomous Snake Detection website offers a user-friendly
              platform powered by advanced image recognition technology and
              machine learning algorithms. Users can upload images of snakes
              encountered in various environments for rapid analysis, receiving
              real-time feedback on the potential venomous nature of the species
              depicted. In addition to facilitating snake identification, the
              website serves as an educational resource, providing insights into
              venomous snake species and safety tips for outdoor enthusiasts.
              <br></br>
              <a
                href="https://github.com/MOHINUDDIN-RAZI/Venomous-snake-detection"
                target="_blank"
                className="btn btn-secondary mb-5 mt-4"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
