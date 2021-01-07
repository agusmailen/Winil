import React from 'react';
// import { connect } from 'react-redux';
import logo from '../assets/static/iconHeader.jpg';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
    return (
        <header>
            <a href='/'>
                <img className='header__img' src={logo} alt='icon' />
            </a>
            <div className='header__menu'>
                <div>
                    <ul>
                        <li>Mi Trabajo</li>
                        <a href='/Login'><li>Iniciar Sesión</li></a>
                        <li>Contacto</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
// const mapStateToProps = (state) => {
//     return {
//         user: state.user,
//     };
// };
// export default connect(mapStateToProps, null)(Header);
export default (Header);