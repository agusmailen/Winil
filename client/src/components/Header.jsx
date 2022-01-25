//React
import React, { Component } from 'react';
import { Link as Link1, withRouter } from 'react-router-dom';
//React Redux
import { compose } from 'redux';
import { connect } from 'react-redux';
//React Scroll
import { Link as Link2 } from 'react-scroll';
//Material UI
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//Styles
import '../assets/styles/components/Header.scss';
//utils
import isAuth from '../utils/isAuth';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}))(Badge);

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClass: 'header__nav_initial',
        };
    };

    componentDidMount() {
        this.listener = this.handleScroll.bind(this);
        if (this.props.location.pathname === '/') {
            window.addEventListener('scroll', this.listener);
        }
        this.setClassName();
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listener);
    }

    handleScroll() {
        if (window.scrollY >= 30) {
            this.setState({ activeClass: 'header__nav_last' });
        } else {
            this.setState({ activeClass: 'header__nav_initial' });
        }
    }

    setClassName = () => {
        if (this.props.location.pathname !== '/') {
            this.setState({ activeClass: 'header__nav_last' });
        }
    };

    handleSesion = () => {
        localStorage.clear();
        window.location.reload();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='header__container_initial' id='header'>
                <nav className={this.state.activeClass}>
                    <h2>
                        <Link1 to='/'>WINIL</Link1>
                    </h2>
                    <div className='header__menu'>
                        <div className='header__menu--ul'>
                            <ul>
                                <li>
				                    <Link2 to='/Login'>SERVICIOS</Link2>
                                </li>
                                <li>
                                    {this.props.location.pathname === '/' ? <Link2 to='catalogo-id' smooth={true} duration={1000}>BEATS</Link2> : <Link1 to='/'>BEATS</Link1>}
                                </li>
                                <li>
                                    <Link2 to='contact_id' smooth={true} duration={1000}>CONTACTO</Link2>
                                </li>
                                { isAuth() ?
                                (
                                    <li onClick={this.handleSesion}>
                                        CERRAR SESION
                                    </li>

                                )
                                :
                                (
                                    <li>
                                        <Link1 to='/Login'>INICIAR SESION</Link1>
                                    </li>
                                )}
                                <li>
                                    <Link1 to='/Cart'>
                                        <IconButton aria-label='cart' id='button-cart-count'>
                                            <StyledBadge badgeContent={this.props.location.pathname === '/' ? this.props.cart?.length : this.props.count?.length}>
                                                <ShoppingCartIcon />
                                            </StyledBadge>
                                        </IconButton>
                                    </Link1>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart_items,
    };
};

export default compose(withRouter, connect(mapStateToProps))(Header);