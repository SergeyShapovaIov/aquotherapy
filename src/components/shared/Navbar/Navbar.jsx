import React from "react";
import './Navbar.css'

class Navbar extends React.Component {
    render() {
            return(
                <div className="link_wrapper">
            <ul id = "nav">

                <li><a href="#">Главная</a></li>
                <li><a href="#">Сеансы</a></li>
                <li><a href="#">Отзывы</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Обо мне</a></li>
                <li><a href="#">Блог</a></li>

            </ul>
            <div className="sign_in_button">
            <button>Записаться на сеанс </button>
            </div>
            
        </div>
            );
    };
};

export default Navbar;