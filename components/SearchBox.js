// @flow
import React from 'react';
import { Container, Form, Input, Button, Icon } from 'semantic-ui-react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { submitHost } from '../actions';


class SearchBox extends Component {
    host : Object;

    constructor(props) {
        super(props);
        this.host = {};
    }
    
    render() {
        return (
            <Container fluid textAlign='center'>
                <Form style={{ width: "100%" }} onSubmit={
                    (e) => {
                        e.preventDefault();
                        if (!this.host.value.trim()) return;
                        this.props.submitHost(this.host.value);
                    }
                }>
                    <Form.Field inline>
                        <Input action style={{ width: "50%" }}>
                            <input name="host" key="host" type="text" placeholder="Input host..." ref={host => { this.host = host } } />
                            <Button>
                                <Icon name='search' />
                            </Button>
                        </Input>
                    </Form.Field>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {result : state.submitHost.data};
}

export default connect(mapStateToProps, { submitHost })(SearchBox);