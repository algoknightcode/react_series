import "./navbar.css";
import dark from "./dark.svg";

export default function Navbar() {
    return (
        <div className="header_container" >
            <div className="header_content">
                <div className="title">
                    <a href="/">where is my world? class</a>
                </div>
                <div className="dark_theme">
                    <div className="icon">
                        <img src={dark} alt="Dark theme icon" />
                    </div>  
                    <div className="text">
                        Dark 
                    </div>
                </div>
            </div>
        </div>
    );
}
