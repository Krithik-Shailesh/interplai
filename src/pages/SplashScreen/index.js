import React, { Component } from 'react'
import Content from './content';

class SplashScreen extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.splashTimer()
    }

    splashTimer = () => {
        setTimeout(() => {
            this.props.navigation.replace('RootScreen')
        }, 2000);
    }

    render() {
        return (

            <Content />

        )
    }
}

export default SplashScreen;