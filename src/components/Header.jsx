import React from 'react';
// import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
    return (
        <header>
            <div className='header__menu'>
                <p>Iniciar Sesión</p>
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