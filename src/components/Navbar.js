import React, {Component} from 'react';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';


class Navbar extends Component{
    // set the state for the navigation bar
    state = {
        isOpen : false
    };

    // handler to change the state of navigation bar to icon or tabs
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    };
    render(){
        return(
            <nav className="navbar">
                <div className="navbar-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="click here to enter the homepage" />
                        </Link>
                        {/* button to handle the state of the toggle menu*/}
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight classname="nav-icon" />
                        </button>
                    </div>
                    {/* create a list of navigation bar options and link the options with correct routess*/}
                    <ul className={this.state.isOpen? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    };
}

export default Navbar;
