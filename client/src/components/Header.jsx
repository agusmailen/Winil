import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClass: 'header__nav_initial',
        };
    };

    componentDidMount() {
        const { location } = this.props;
        if (location.pathname === '/') {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 30) {
                    this.setState({ activeClass: 'header__nav_last' });
                } else {
                    this.setState({ activeClass: 'header__nav_initial' });
                }
            });
        }
        this.foo();
    };

    foo = () => {
        const { location } = this.props;
        if (location.pathname !== '/') {
            this.setState({ activeClass: 'header__nav_last' });
        }
    };

    render() {
        const { activeClass } = this.state;
        return (
            <div className='header__container_initial'>
                <nav className={activeClass}>
                    <h2>
                        <Link to='/'>WINIL</Link>
                    </h2>
                    <div className='header__menu'>
                        <div className='header__menu--ul'>
                            <ul>
                                <li>
                                    <Link to='/Login'>INICIAR SESION</Link>
                                </li>
                                <li>
                                    <Link to='/Login'>SERVICIOS</Link>
                                </li>
                                <li>
                                    <Link to='/'>TRACKS</Link>
                                </li>
                                <li>
                                    <Link to='/'>CONTACTO</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(Header);