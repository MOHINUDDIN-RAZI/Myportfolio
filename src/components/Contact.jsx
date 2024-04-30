import linkedin from "../assets/images/linkedin.png";
import gmail from "../assets/images/gmail.png";
import github from "../assets/images/github.png";

function Contact() {
  return (
    <>
      <section id="contact" className="section">
        <div className="container text-center">
          <div className="row">
            <div className="col text-light">
              <h3>Connect With Me!</h3>
              <div className="mail text-info mt-2"></div>
            </div>
            <div className="socialmedia mb-5">
              <a
                href="https://www.linkedin.com/in/mohinuddinrazi "
                target="_blank"
              >
                <img src={linkedin} width="40px" height="35px"></img>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mohinuddin6razi@gmail.com"
                target="_blank"
              >
                <img src={gmail} width="54px" height="35px"></img>
              </a>
              <a href="https://github.com/MOHINUDDIN-RAZI" target="_blank">
                <img src={github} width="35px" height="35px"></img>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
