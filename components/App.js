// @flow
import React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';
import SearchBox from './SearchBox';
import Result from './Result';
import { connect } from 'react-redux';
import { submitHost } from '../actions';

class App extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let ResultComp = null;
		if (this.props.data) {
			ResultComp = (<Result/>);
		}
    	return (
			<div>
				<Navbar/>
				<SearchBox/>
				{ResultComp}
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {data : state.submitHost.data};
}

export default connect(mapStateToProps, { submitHost })(App);