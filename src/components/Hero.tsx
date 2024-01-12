import React from "react";

const Hero = () => {
  return (
    <header>
      <nav>
        <div className="logo clink">
          {/* <img src="" alt="" />  */}
          {/* <img
            data-src="./img/nahid.png"
            alt="Lazy-loaded Image"
            className="lazy-load"
          /> */}
          Nahid Hasan
        </div>
        <div className="nav">
          <ol>
            <li>
              <a className="clink" href="#">
                home
              </a>
            </li>
            <li>
              <a className="clink" href="projects.html">
                projects
              </a>
            </li>
          </ol>
        </div>
      </nav>
      <div className="hero">
        <div className="name">
          <span className="ifo">I&#39;am</span>{" "}
          <span className="n">Nahid Hasan</span>
        </div>
        <div className="sub select-none">
          make <span className="hi">thing</span> real on
          <span className="hi"> internet</span>
        </div>
        <div className="des">
          I am a Full-stack web developer focused on building beautiful and
          high-performance system using cutting-edge technologies.
        </div>
        <div className="btn-g">
          <span className="br">
            <a
              className="clink"
              href="mailto:nahidhasan141400.main@gmail.com?subject=from portfolio"
            >
              <span>
                <i className="fa-solid fa-envelope" />
              </span>
              <span>Contact Me</span>
            </a>
          </span>
          <span className="br">
            <a className="clink" href="./MD._NAHID HASAN Resume with ref.pdf">
              <span>
                <i className="fa-solid fa-file" />
              </span>
              <span>My Resume</span>
            </a>
          </span>
        </div>
      </div>
      {/* wave */}
    </header>
  );
};

export default Hero;
