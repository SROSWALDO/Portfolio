import "swiper/css";
import "swiper/css/autoplay";
import Navbar from "./Components/Navbar";
import avatar from "./assets/avatar.png";
import js from "./assets/js.svg";
import ts from "./assets/ts.svg";
import pg from "./assets/pg.svg";
import redux from "./assets/redux.svg";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwind.svg";
import next from "./assets/next.svg";
import sq from "./assets/sq.png";
import my from "./assets/my.svg";
import css from "./assets/css.svg";
import node from "./assets/node.svg";
import Marquee from "react-marquee-slider";


function App() {
  return (
    <div className="bg-gradient-to-r from-[#0a0f24] via-[#0d1330] to-[#0a0f24] sm:min-h-screen  sm:h-[100vh] h-[140vh]">
      <Navbar />
      <div className="sm:p-5 p-1 mt-8">
        <p className="text-2xl bg-[#243dafa9] text-blue-400 font-audiowide w-[300px] p-1 rounded-lg text-center">
          Hi there, I'm Oswaldo!
        </p>
        <h1
          className="text-[#490581] sm:text-6xl text-2xl sm:text-left text-center font-orbitron font-bold mt-10"
          style={{
            textShadow: "0 0 8px #b517ff, 0 0 10px #b517ff, 0 0 15px #b517ff",
          }}
        >
          FRONT END DEVELOPER
        </h1>
        <img
          className="w-[700px] sm:w-[600px] absolute sm:right-[50px] sm:top-32 top-48"
          src={avatar}
          alt="avatar"
        />
      </div>

      <div className="technologies absolute sm:left-28 left-4 sm:mr-0 sm:top-[350px] top-[705px]  w-[360px] sm:w-[600px]">
        <p
          className="bg-[#243dafa9] text-blue-400 rounded-lg font-audiowide text-4xl text-center p-1 w-[290px] m-auto"
          style={{
            textShadow: "0 0 1px #54c1f8, 0 0 4px #54c1f8, 0 0 1px #54c1f8",
          }}
        >
          Technologies
        </p>
        <p className="text-white font-audiowide text-center mt-4 text-2xl">
          Frontend
        </p>
        <div className="flex justify-center  w-[450px] m-auto ">
          <Marquee velocity={50} minScale={0.5} resetAfterTries={200} >
          <img className="w-[50px] sm:mr-3 " src={js} alt="JavaScript" />
          <img className="w-[50px] sm:mr-3" src={react} alt="React" />
          <img className="w-[50px] sm:mr-3" src={ts} alt="TypeScript" />
          <img className="w-[50px] sm:mr-3" src={redux} alt="Redux" />
          <img className="w-[50px] sm:mr-3" src={css} alt="CSS" />
          <img className="w-[50px] sm:mr-3" src={next} alt="Next.js" />
          <img className="w-[50px]" src={tailwind} alt="Tailwind CSS" />
          </Marquee>
        </div>

        <p className="text-white font-audiowide text-center mt-5 text-2xl">
          Backend
        </p>
        <div className="flex justify-center">
          <img className="w-[50px]" src={node} alt="Node.js" />
          <img className="w-[50px]" src={pg} alt="PostgreSQL" />
          <img className="w-[50px]" src={sq} alt="Sequelize" />
          <img className="w-[50px]" src={my} alt="MySQL" />
        </div>
      </div>
    </div>
  );
}

export default App;
