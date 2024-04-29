import styles from "./Button.module.css";
function Button() {
  return (
    <>
      <br></br>
      <br></br>
      <div className="d-grid gap-3 col-3 mx-auto">
        <a
          href="https://coursera.org/share/7a975d86d6f23b4aa819ebd466502da1"
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
