import { FiMenu } from 'react-icons/fi'; // Import ikony
import { IoMdClose } from 'react-icons/io'; // Import ikony pro zavření

const CustomNavbarToggle = ({ isMenuOpen, onMenuOpenChange }) => {

    const toggleMenu = () => {
        onMenuOpenChange(!isMenuOpen);
    };

    return (
        <button className="mx-[-35px] text-2xl  " aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"} onClick={toggleMenu}>
            {isMenuOpen ? <IoMdClose /> : <FiMenu />}
        </button>
    );
};

export default CustomNavbarToggle;
