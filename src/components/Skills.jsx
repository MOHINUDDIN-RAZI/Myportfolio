import html from "../assets/images/html.png";
import CSS from "../assets/images/CSS.png";
import Bootstrap from "../assets/images/Bootstrap.png";
import js from "../assets/images/js.png";
import Cpro from "../assets/images/C pro.png";
import Cplus from "../assets/images/c++.png";
import java from "../assets/images/java.png";
import Python from "../assets/images/Python.png";
import Android from "../assets/images/Android.png";
import react1 from "../assets/images/react.svg";
import sql from "../assets/images/mysql.png";

function Skills() {
  return (
    <>
      <section id="skills" className="section">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="h4 pb-2 text-light border-bottom border-danger d-flex flex-row mb-3">
                Skills
              </div>
            </div>
            <div className="ihc d-flex pt-5 justify-content-around text-secondary">
              <figure>
                <img
                  src={html}
                  width="70px"
                  height="60px"
                  className="img2 pb-2"
                ></img>
                <figcaption>HTML5</figcaption>
              </figure>
              <figure>
                <img
                  src={CSS}
                  width="70px"
                  height="60px"
                  className="img2 pb-2"
                ></img>
                <figcaption>CSS</figcaption>
              </figure>
              <figure>
                <img
                  src={Bootstrap}
                  width="60px"
                  height="60px"
                  className="img2 pb-2"
                ></img>
                <figcaption>Bootstrap</figcaption>
              </figure>
              <figure>
                <img
                  src={Cpro}
                  width="70px"
                  height="60px"
                  className="img2 pb-2 pe-2 ps-1"
                ></img>
                <figcaption>C Prog</figcaption>
              </figure>
              <figure>
                <img
                  src={js}
                  width="70px"
                  height="60px"
                  className="img2 pb-2 pe-1"
                ></img>
                <figcaption> Javascript</figcaption>
              </figure>
            </div>
            <div className="ihc d-flex pt-5 pe-5 justify-content-around text-secondary">
              <figure>
                <img
                  src={Cplus}
                  width="70px"
                  height="60px"
                  className="img1 pb-1 pe-2"
                ></img>
                <figcaption>C++</figcaption>
              </figure>
              <figure>
                <img
                  src={java}
                  width="70px"
                  height="60px"
                  className="img1 pb-1 pe-2"
                ></img>
                <figcaption>Java</figcaption>
              </figure>
              <figure>
                <img
                  src={Python}
                  width="70px"
                  height="60px"
                  className="img1 pb-1 pe-2"
                ></img>
                <figcaption>Python</figcaption>
              </figure>
              <figure>
                <img
                  src={sql}
                  width="75px"
                  height="60px"
                  className="img1 pb-1 pe-2"
                ></img>
                <figcaption>MySQl</figcaption>
              </figure>
              <figure>
                <img
                  src={react1}
                  width="70px"
                  height="60px"
                  className="img1 pb-1 pe-2"
                ></img>
                <figcaption>React</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
