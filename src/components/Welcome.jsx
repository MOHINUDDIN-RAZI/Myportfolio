import { TypeAnimation } from "react-type-animation";
function Welcome() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <br></br>
          <br></br>
          <div className="name text-danger text-center">
            <h1>
              <i>Hi,My Name Is Mohinuddin Razi</i>
            </h1>
            <div className="container text-secondary ">
              <h1>
                I'm a{"  "}
                <TypeAnimation
                  sequence={[
                    "Tech Enthusiast",
                    1000,
                    "Editor",
                    1000,
                    "Front End Devloper",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>
            </div>
          </div>
        </div>
        <div className="col">
          <img src="./src/assets/portfoliopic.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Welcome;