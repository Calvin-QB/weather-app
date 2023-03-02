import { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import { UnitContext, CityContext } from "../App";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isCelsius, setIsCelsius] = useContext(UnitContext);
  const [city, setCity] = useContext(CityContext);

  const handleMenuClick = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  const handleUnitClick = () => {
    isCelsius ? setIsCelsius(false) : setIsCelsius(true);
  };
  return (
    <header className="flex justify-between">
      <button className="ml-2 text-xl md:ml-10">
        {city ? city.label.split(", ")[1] : "Weather"}
      </button>
      <button
        onClick={handleMenuClick}
        className="bg-contain bg-no-repeat right-0 top-2 bg-[url('https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg')]	 fixed z-50 md:hidden"
      >
        <span className="collapse">Menu</span>
      </button>
      <nav
        className={` ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 flex flex-col pt-20 inset-y-0 right-0 left-32 fixed backdrop-brightness-50 backdrop-blur-sm md:backdrop-blur-none md:backdrop-brightness-100 md:translate-x-0 md:flex-row items-center md:basis-1/3 md:pt-0 md:justify-end md:static gap-5`}
      >
        <button
          onClick={handleUnitClick}
          className="whitespace-nowrap text-2xl hover:text-blue-300	"
        >{`${isCelsius ? "C°" : "F°"}`}</button>
        <SearchBar />
      </nav>
    </header>
  );
}

export default Navbar;
