import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClass: 'header__nav_initial',
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 30) {
                this.setState({ activeClass: 'header__nav_last' });
            } else {
                this.setState({ activeClass: 'header__nav_initial' });
            }
        });
    };

    render() {
        const { activeClass } = this.state;
        return (
            <div className='header__container_initial' id='background'>
                <nav className={activeClass}>
                    <h2>
                        <Link to='/'>WINIL</Link>
                    </h2>
                    <div className='header__menu'>
                        <div className='header__menu--ul'>
                            <ul>
                                <li>
                                    <Link to='/Login'>Mi trabajo</Link>
                                </li>
                                <li>
                                    <Link to='/Login'>Iniciar sesión</Link>
                                </li>
                                <li>
                                    <Link to='/'>Contacto</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default connect()(Header);