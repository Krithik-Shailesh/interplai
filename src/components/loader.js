import React, { Component } from "react"
import { ActivityIndicator } from 'react-native'
import { Colors } from 'react-native-paper'
class Loader extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ActivityIndicator color={Colors.red300} animating={this.props.animating}/>
        )
    }

}

export default Loader;