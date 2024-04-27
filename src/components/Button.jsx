import styles from "./Button.module.css";
function Button() {
  return (
    <>
      <br></br>
      <br></br>
      <div className="d-grid gap-3 col-3 mx-auto">
        <button
          id={styles.btn1}
          className="btn btn-danger"
          type="button"
          target="_blank"
          href
        >
          View Resume
        </button>
        <button id={styles.btn1} className="btn btn-dark" type="button" href>
          Contact Me
        </button>
      </div>
    </>
  );
}

export default Button;
