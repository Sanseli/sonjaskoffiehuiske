import Image from "next/image";
import logo from "../assets/logo-temp-transparent.png";

function Navbar() {
    return (
        <div className="bg-milk-white w-full h-20 flex justify-between px-56 shadow-lg">
            <button className="text-dark-brown">Home</button>
            <button className="text-dark-brown">Over ons</button>
            <div className="w-32 h-32 bg-milk-white rounded-full hover:translate-y-2 transition duration-300 delay-100 cursor-pointer flex justify-center z-10 relative">
                <Image src={logo} alt="sonjaskoffiehuiske logo" fill className="p-2" />
            </div>
            <button className="text-dark-brown">Menu</button>
            <button className="text-dark-brown">Contact</button>
        </div>
    )
}

export default Navbar;