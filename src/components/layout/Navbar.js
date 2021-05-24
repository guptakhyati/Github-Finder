import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const Navbar = ({icon,title}) => {                   //this in this.props.icon(and title) refers to class Navbar ka prop which is defined in the main file ie. App.js[In this example, default props are used(which are defined in the same file where they need to used ie. Navbar.js here), so props are not defined in the main file ie. App.js]
                                                //we can also add default props in case no value of props is passed in App.js; default props wil be specified in Navbar.js file only ie. jahan pe we are actually using the props. [Props ki default value will only be used if main file ie. App.js mein props ki value specify nhi ki gayi hogi otherwise App.js vali hi values use hongi.]
    
        return (
            <nav className="navbar bg-primary">
                <h1>
                   <i className={icon}></i> {title}   
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        ); 
         
}
Navbar.defaultProps={                //static defaultProps changed to classname.defaultProps because now these props are declared outside the class/function.
    title:"Github Finder",
    icon:"fab fa-github"
};
    
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}
    


export default Navbar;
