// @flow
import React from 'react';
import { Segment } from 'semantic-ui-react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { submitHost } from '../actions';
import Immutable from 'immutable';


class Result extends Component{
    host : Object;

    constructor(props) {
        super(props);
        this.host = {};
    }
    
    render() {
        return (
            <div>
                <br/>
                <Segment raised vertical textAlign='center' color='blue'>
                        {this.props.result.data.split(/(?:\r\n|\r|\n)/g).map((el, i) => {
                            return (<p key={i}>{el.replace('%','')}</p>)    
                            }
                        )}
                </Segment>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {result : state.submitHost.data};
}

export default connect(mapStateToProps, { submitHost })(Result);