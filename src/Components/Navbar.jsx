import menu from '../assets/menu.svg'
import logo from '../assets/LOGO.png'
import { useState } from 'react'
import proyect from '../assets/proyect.svg'
import phone from '../assets/phone.svg'

export default function Navbar() {
  const [open, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!open);
  };

  return (
    <div className="flex justify-between py-1 w-full relative px-2">
      <img className="w-[60px] h-[55px] ml-3" src={logo} alt="" />
      <img
        onClick={handleOpen}
        className="w-[60px] cursor-pointer hover:text-blue-600 hover:scale-105 transition-all sm:w-[70px]"
        src={menu}
        alt="menu"
      />
      <div
        className={`absolute top-5 flex sm:right-32 right-24 transition-transform transform ${
          open ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
        style={{ transitionDuration: '300ms' }}
      >
        <p
          className="text-xl text-purple-500 font-audiowide sm:block hidden"
          style={{
            transition: 'text-shadow 0.3s ease-in-out',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.textShadow =
              '0 0 1px #9900f5, 0 0 4px #9900f5, 0 0 1px #9900f5')
          }
          onMouseLeave={(e) => (e.currentTarget.style.textShadow = 'none')}
        >
          {"<"} Proyects {" />"}
        </p>
        <p
          className="text-xl text-purple-500 font-audiowide sm:block hidden ml-6"
          style={{
            transition: 'text-shadow 0.3s ease-in-out',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.textShadow =
              '0 0 1px #9900f5, 0 0 4px #9900f5, 0 0 1px #9900f5')
          }
          onMouseLeave={(e) => (e.currentTarget.style.textShadow = 'none')}
        >
          {"<"} contact {" />"}
        </p>
        <img
          src={proyect}
          className="w-[40px] sm:hidden block mr-5"
          alt="proyect"
        />
        <img
          src={phone}
          className="w-[40px] sm:hidden block mr-12"
          alt=""
        />
      </div>
    </div>
  );
}