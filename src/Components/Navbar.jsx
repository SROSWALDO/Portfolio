import menu from '../assets/menu.svg'

export default function Navbar() {
  return (
    <div className='flex justify-between w-full px-2' >
      <h2>LOGO</h2>
      <img className='w-[70px] cursor-pointer hover:text-blue-600 ' src={menu} alt="menu" />

    </div>
  )
}
