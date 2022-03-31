import React from "react";
import './Header.css'

const Header = ({ Title, headerExpanded }) => {
    return (
        <div className="header-container">
            <img
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                alt="img"
                // className="head-img head-img-expanded"
                className={`head-img ${
                    headerExpanded ? 'head-img-expanded' : 'head-img-contracted'
                }`}
            />
            <h1
                className={`head-text ${
                    headerExpanded ? 'head-text-expanded' : 'head-text-contracted'
                }`}
            >
                {Title}
            </h1>
        </div>
    )
}

export default Header;