import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import { Button, Form, Table, Container,  Checkbox } from 'semantic-ui-react'
import axios from 'axios'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { id140302064Action } from '../actions'


class id140302064Component extends Component {
    constructor (props) {
        super()
        this.state = {
            pro140302064: []
        }

        this.props = props
        console.log(props)


    }

    componentWillMount() {
        this.props.actions.fetchs140302064()
    }

    render() {
        return (
            <Container>
                const ImageExampleWrapped = () => (
                <Image src={pro140302064.url} size='small' wrapped />
            </Container>
        )
    }


}
const mapStateToProps = ({id140302064}) => id140302064
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                id140302064Action
            ),
            dispatch
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(id140302064Component)