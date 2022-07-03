import "./App.css";
import { motion } from "framer-motion";
function App() {
  return (
    <>
      <div className="wrapper">
        <motion.span
          animate={{ x: 0 }}
          initial={{ x: "-100vw" }}
          transition={{ duration: 0.9 }}
          className="text-hallo"
        >
          HALLO
        </motion.span>
        <motion.h1
          animate={{ x: 0 }}
          initial={{ x: "-100vw" }}
          transition={{ duration: 1 }}
          className="text-name"
        >
          I`M <span>Safarudin</span>
        </motion.h1>
        <motion.p
          animate={{ x: 0 }}
          initial={{ x: "-100vw" }}
          transition={{ duration: 1.5 }}
          className="about-text"
        >
          I am a <span className="text-wd">website developer</span>. I started
          to be interested in website developers in 2019. Mastering several
          technologies for <span className="text-wd">website development</span>{" "}
          such as <span className="text-js">javascript</span>,{" "}
          <span className="text-react">react</span>, nextjs and{" "}
          <span className="text-others">others</span>. my project can be seen on{" "}
          <a
            href="https://github.com/safarrr"
            target="_blank"
            className="text-link"
            rel="noopener noreferrer"
          >
            github
          </a>
        </motion.p>
      </div>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "-100vw" }}
        transition={{ duration: 1.6 }}
        className="card-link"
      >
        <a
          href="https://github.com/safarrr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a href="mailto:safar190305@gmail.com">
          <i className="bi bi-envelope-fill"></i>
        </a>
      </motion.div>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "-100vw" }}
        transition={{ duration: 1.9 }}
        whileDrag={{ scale: 2 }}
        drag
        dragSnapToOrigin="true"
        dragConstraints={{ left: 0, right: 10 }}
        className="drag"
      ></motion.div>
    </>
  );
}

export default App;
