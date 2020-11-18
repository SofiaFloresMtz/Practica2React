import React,{Component} from 'react';

import logo from '../logoEscuela.PNG'

class Header extends Component{
    render(){
        return(
            <div>
                <img src={logo} alt="logo" />
                <h1>Práctica 2 React</h1>
            </div>
        );
    }
}

export default Header;