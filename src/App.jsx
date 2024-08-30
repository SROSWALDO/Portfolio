
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Navbar from "./Components/Navbar";
import avatar from './assets/avatar.png';
import js from './assets/js.svg';
import ts from './assets/ts.svg';
import pg from './assets/pg.svg';
import redux from './assets/redux.svg';
import react from './assets/react.svg';
import tailwind from './assets/tailwind.svg';
import next from './assets/next.svg';
import sq from './assets/sq.png';
import my from './assets/my.svg';
import css from './assets/css.svg';
import node from './assets/node.svg';

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
          style={{ textShadow: "0 0 8px #b517ff, 0 0 10px #b517ff, 0 0 15px #b517ff" }}
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
        <p className="bg-[#243dafa9] text-blue-400 rounded-lg font-audiowide text-4xl text-center p-1 w-[290px] m-auto" style={{ textShadow: "0 0 1px #54c1f8, 0 0 4px #54c1f8, 0 0 1px #54c1f8" }}>
          Technologies
        </p>
        <p className="text-white font-audiowide text-center mt-4 text-2xl">Frontend</p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 500, disableOnInteraction: false }}
          className="mt-4 sm:ml-24"
        >
          <SwiperSlide><img className="w-[50px] m-0 " src={js} alt="JavaScript" /></SwiperSlide>
          <SwiperSlide><img className="w-[50px]" src={react} alt="React" /></SwiperSlide>
          <SwiperSlide><img className="w-[50px]" src={ts} alt="TypeScript" /></SwiperSlide>
          <SwiperSlide><img className="w-[50px]" src={redux} alt="Redux" /></SwiperSlide>
          <SwiperSlide><img className="w-[50px]" src={css} alt="CSS" /></SwiperSlide>
          <SwiperSlide><img className="w-[50px]" src={next} alt="Next.js" /></SwiperSlide>
          <SwiperSlide><img className="w-[50px]" src={tailwind} alt="Tailwind CSS" /></SwiperSlide>
        </Swiper>
        
        <p className="text-white font-audiowide text-center mt-5 text-2xl">Backend</p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 500, disableOnInteraction: false }}
          className="mt-4 sm:ml-24"
        >
          <SwiperSlide><img className="w-[50px]" src={node} alt="Node.js" /></SwiperSlide>
          <SwiperSlide><img className="w-[50px]" src={pg} alt="PostgreSQL" /></SwiperSlide>
          <SwiperSlide><img className="w-[50px]" src={sq} alt="Sequelize" /></SwiperSlide>
          <SwiperSlide><img className="w-[50px]" src={my} alt="MySQL" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
