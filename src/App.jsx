import "./App.css";
function App() {
  return (
    <>
      <div className="wrapper">
        <span className="text-hallo">HALLO</span>
        <h1 className="text-name">
          I`M <span>Safarudin</span>
        </h1>
        <p className="about-text">
          I am a <span className="text-wd">website developer</span>. I started
          to be interested in website developers in 2019. Mastering several
          technologies for website development such as{" "}
          <span className="text-js">javascript</span>,{" "}
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
        </p>
      </div>
      <div className="card-link">
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
      </div>
    </>
  );
}

export default App;
