import Navbar from "../Components/Navbar";
import avatar from "../assets/avatar.png";
import js from "../assets/js.svg";
import ts from "../assets/ts.svg";
import pg from "../assets/pg.svg";
import redux from "../assets/redux.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import next from "../assets/next.svg";
import sq from "../assets/sq.png";
import my from "../assets/my.svg";
import css from "../assets/css.svg";
import node from "../assets/node.svg";
import Marquee from "react-marquee-slider";
import gmail from "../assets/gmail.svg";
import whatsPurple from "../assets/whatsPurple.svg";
import linkdin from "../assets/linkPurple.svg";
import gitPurple from "../assets/gitPurple.svg";
import Projects from "./Projects";
import { useState } from "react"; // No olvides importar useState

function Home() {
  const [showProjects, setShowProjects] = useState(false);

  const handleProjectsClick = () => {
    setShowProjects(true);
  };

  return (
    <div className="bg-gradient-to-r from-[#0a0f24] via-[#0d1330] to-[#0a0f24] sm:min-h-screen min-h-[200vh] ">
      <Navbar onProjectsClick={handleProjectsClick} />
      <div className="sm:p-5 p-1 mt-8">
        {showProjects ? (
          <Projects />
        ) : (
          <>
            <p className="text-2xl bg-[#243dafa9] text-blue-400 font-audiowide w-[300px] p-1 rounded-lg text-center ml-4 ">
              Hi there, I{`'`}m Oswaldo!
            </p>
            <h1
              className="text-[#490581] sm:text-6xl text-2xl sm:text-left text-center font-orbitron font-bold mt-10 ml-4"
              style={{
                textShadow:
                  "0 0 8px #b517ff, 0 0 10px #b517ff, 0 0 15px #b517ff",
              }}
            >
              FULL STACK DEVELOPER
            </h1>
            <img
              className="w-[700px] sm:w-[567px] absolute sm:right-[50px] sm:top-32 top-48"
              src={avatar}
              alt="avatar"
            />
            <div>
              <a
                href="/Oswaldo_CV.pdf"
                download="Oswaldo_CV.pdf"
                className="sm:text-xl font-audiowide text-purple-600 absolute sm:left-3 sm:bottom-36 bottom-64 py-2 border-l border-l-cyan-500 hover:bg-purple-600/70 hover:text-cyan-400 hover:border-none hover:transition-all cursor-pointer "
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {'< '}CV Resume{' />'}
              </a>
            </div>

            <div className="absolute sm:right-2 sm:bottom-36 bottom-[10px] right-16 sm:block flex ">
              <a href="tel:+524426665226" target="_blank">
                <img
                  className="mb-5 sm:w-[35px] w-[45px] sm:mr-0 mr-3 hover:scale-110 transition-all  "
                  src={whatsPurple}
                  alt="WhatsApp"
                />
              </a>
              <a href="https://github.com/SROSWALDO" target="_blank" rel="noopener noreferrer">
                <img
                  className="mb-5 sm:w-[35px] w-[45px] sm:mr-0 mr-3 hover:scale-110 transition-all"
                  src={gitPurple}
                  alt="Github"
                />
              </a>

              <a href="https://www.linkedin.com/in/oswaldo-palacios-perez-523887270/" target="_blank" rel="noopener noreferrer">
                <img
                  className="mb-5 sm:w-[35px] w-[45px] sm:mr-0 mr-3 hover:scale-110 transition-all"
                  src={linkdin}
                  alt="Linkdin"
                />
              </a>
              <a href="mailto:yaco2002@live.com.mx" target="_blank" rel="noopener noreferrer">
                <img
                  className="mb-5 sm:w-[35px] w-[45px] sm:mr-0 mr-3 hover:scale-110 transition-all"
                  src={gmail}
                  alt="Gmail"
                />
              </a>
            </div>

            <div className="technologies absolute sm:left-28 left-4 sm:mr-0 sm:top-[350px] top-[905px]  w-[360px] sm:w-[600px]">
              <p
                className="bg-[#243dafa9] text-blue-400 rounded-lg font-audiowide text-5xl text-center p-1 w-[380px] m-auto sm:mb-0 mb-10 "
                style={{
                  textShadow:
                    "0 0 1px #54c1f8, 0 0 4px #54c1f8, 0 0 1px #54c1f8",
                }}
              >
                Technologies
              </p>
              <p className="text-white font-audiowide text-center mt-4 text-3xl sm:mb-0 mb-5">
                Frontend
              </p>
              <div className="flex justify-center w-[350px] m-auto sm:mb-0 mb-10 ">
                <Marquee velocity={50} minScale={0.5} resetAfterTries={200}>
                  <img
                    className="icon-whatsapp w-[60px] sm:mr-3 "
                    src={js}
                    alt="JavaScript"
                  />
                  <img className="w-[60px] sm:mr-3" src={react} alt="React" />
                  <img
                    className="w-[60px] sm:mr-3"
                    src={ts}
                    alt="TypeScript"
                  />
                  <img className="w-[60px] sm:mr-3" src={redux} alt="Redux" />
                  <img className="w-[60px] sm:mr-3" src={css} alt="CSS" />
                  <img
                    className="w-[60px] sm:mr-3"
                    src={next}
                    alt="Next.js"
                  />
                  <img
                    className="w-[60px]"
                    src={tailwind}
                    alt="Tailwind CSS"
                  />
                </Marquee>
              </div>

              <p className="text-white font-audiowide text-center mt-5 text-3xl sm:mb-0 mb-5 ">
                Backend
              </p>
              <div className="flex justify-center w-[350px] m-auto">
                <Marquee velocity={40} minScale={0.5} resetAfterTries={200}>
                  <img
                    className="w-[60px] sm:mr-3 "
                    src={js}
                    alt="JavaScript"
                  />
                  <img className="w-[60px] mr-4 " src={node} alt="Node.js" />
                  <img
                    className="w-[60px] mr-4"
                    src={pg}
                    alt="PostgreSQL"
                  />
                  <img
                    className="w-[60px] mr-4"
                    src={sq}
                    alt="Sequelize"
                  />
                  <img className="w-[60px]" src={my} alt="MySQL" />
                </Marquee>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
