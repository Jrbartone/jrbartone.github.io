import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        return(
            <header>
                <ul id="headerButtons">
                    <li className="NavButton"><Link to="">Home</Link></li>
                </ul>
            </header>
        )
    }
}

export default NavBar;