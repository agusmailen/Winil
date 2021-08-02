//React
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
//React Redux
import { compose } from 'redux';
import { connect } from 'react-redux';
//Material UI
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//Styles
import '../assets/styles/components/Header.scss';

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

    render() {
        return (
            <div className='header__container_initial'>
                <nav className={this.state.activeClass}>
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
                                    <Link to='/'>BEATS</Link>
                                </li>
                                <li>
                                    <Link to='/'>CONTACTO</Link>
                                </li>
                                <li>
                                    <Link to='/Cart'>
                                        <IconButton aria-label='cart' id='button-cart-count'>
                                            <StyledBadge badgeContent={this.props.location.pathname === '/' ? this.props.cart?.length : this.props.count?.length}>
                                                <ShoppingCartIcon />
                                            </StyledBadge>
                                        </IconButton>
                                    </Link>
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