import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import logo from '../assets/static/iconHeader.jpg';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
    return (
        <header>
            <Link to='/'>
                <img className='header__img' src={logo} alt='icon' />
            </Link>
            <div className='header__menu'>
                <div>
                    <ul>
                        <li>Mi Trabajo</li>
                        <li>
                            <Link to='/Login'>Iniciar sesión</Link>
                        </li>
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