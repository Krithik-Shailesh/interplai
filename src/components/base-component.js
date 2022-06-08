import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Loader from './loader'

class BaseComponent extends Component {
    renderLoader(animating) {
        return <Loader animating={animating} />;
    }
}

export default BaseComponent