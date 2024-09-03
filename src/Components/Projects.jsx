import drivers from "../assets/drivers (1).png";
import logistics from "../assets/logistics-removebg.png";
import todo from '../assets/todo-removebg.png'

export default function Projects() {
  return (
    <div className="">
      <div className="m-auto border-b-2 border-b-cyan-400 w-[200px] mb-10">
        <h1 className="text-4xl font-audiowide text-purple-600 text-center pb-2 ">
          Projects
        </h1>
      </div>

      <div className="sm:flex justify-between  sm:p-5 p-1 sm:mb-0 mb-20 ">
        <div>
          <img className="w-[600px]" src={drivers} alt="" />
        </div>

        <div className=" m-auto">
          <h1 className="text-3xl sm:w-[210px] m-auto mb-8 text-purple-600 font-audiowide border-b text-center border-b-cyan-400 ">
            Drivers Api
          </h1>
          <p className="sm:w-[600px] text-xl font-audiowide text-white ">
            It is a <span className="text-purple-600 border-b border-b-cyan-300">full-stack</span> app made with react and nodejs for the back end
            and postgreSql, using the F1 drivers API in which you can find out
            their information, it has filters to be able to classify them by
            team, age, alphabetical order, etc.
          </p>
        </div>
      </div>

      <div className="sm:flex justify-between  sm:p-5 p-1 sm:mb-0 mb-20 ">
        <div className=" m-auto">
          <h1 className="text-3xl sm:w-[360px] m-auto mb-8 text-purple-600 font-audiowide border-b text-center border-b-cyan-400 ">
            Palacios Logistics
          </h1>
          <p className="sm:w-[600px] text-xl font-audiowide text-white ">
            It is a <span className="text-purple-600 border-b border-b-cyan-300" >Freelance</span> app, full-stack app made with react and nodejs for
            the back end and postgreSql,I developed the app for the Palacios
            Logistics company, in which they enter their shipping information.
            This information can be downloaded as a PDF and when creating the
            record, the corresponding users are also sent the information by
            email. The administrator has a dashboard and can create users and
            view all the records, among other things. .
          </p>
        </div>

        <div>
          <img className="w-[600px]" src={logistics} alt="" />
        </div>
      </div>

      <div className="sm:flex justify-between  sm:p-5 p-1 sm:mb-0 mb-20 ">
        <div>
          <img className="w-[600px]" src={todo} alt="" />
        </div>

        <div className=" m-auto">
          <h1 className="text-3xl sm:w-[210px] m-auto mb-8 text-purple-600 font-audiowide border-b text-center border-b-cyan-400 ">
            Todo App
          </h1>
          <p className="sm:w-[600px] text-xl font-audiowide text-white ">
            It is a <span className="text-purple-600 border-b border-b-cyan-300">full-stack</span> app made with react and nodejs for the back end
            and postgreSql, This application is innovative, you can create tasks quickly and with an optimized system, it includes dark mode, beautiful notifications and a section that tells you the information of pending or completed tasks. .
          </p>
        </div>
      </div>

    </div>
  );
}
