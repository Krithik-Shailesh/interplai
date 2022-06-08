import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

class Content extends Component {
    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../../../assets/images/api.png')} />
            </View>
        )
    }
}

export default Content;