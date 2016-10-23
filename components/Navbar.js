// @flow
import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Component } from 'react';
import Immutable from 'immutable';

class Navbar extends Component {
    handleItemClick : Object;
    state : Object;

    constructor(props : Object) {
        super(props);
        this.state = Immutable.fromJS({});
        this.handleItemClick = this.handleItemClick.bind(this);
    }
 
    handleItemClick(e : Object, { name } : Object) {
        if( { activeItem: name }){
            this.setState({ activeItem: name });
        }
    }

    render() {
        const { activeItem } = this.state;
        return (
          <Menu inverted>
            <Menu.Item key="whois" name="whois" onClick={this.handleItemClick} active={activeItem === 'whois'} color="blue">Whois</Menu.Item>      
          </Menu>
		);
	}
}

export default Navbar;