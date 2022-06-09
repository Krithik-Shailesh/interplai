import React, { Component } from 'react'
import { View, Image } from 'react-native'

class Content extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../../assets/images/apiLogo.png')} style={{ height: "30%", width: "60%" }} />
            </View>
        )
    }
}

export default Content;