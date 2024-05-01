import styles from "./Button.module.css";
function Button() {
  return (
    <>
      <br></br>
      <br></br>
      <div className="d-grid gap-3 col-4 mx-auto">
        <a
          href="https://drive.google.com/file/d/1U8FbkjDUbkNenTki9HrsW_psgNWo4Wew/view?usp=drive_link"
          target="_blank"
          className="btn btn-danger"
          id={styles.btn1}
        >
          View Resume
        </a>
        <a href="#contact" className="btn btn-dark" id={styles.btn1}>
          Contact Me
        </a>
      </div>
    </>
  );
}

export default Button;
