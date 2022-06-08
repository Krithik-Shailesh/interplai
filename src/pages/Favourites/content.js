import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import BaseComponent from '../../components/base-component';
import Utils from '../../Utils';

class Content extends BaseComponent {

    constructor(props) {
        super(props)
    }


    renderItem = (item) => {
        return (
            <View style={{ borderRadius: 8, backgroundColor: '#FFFFFF', marginHorizontal: 15, marginBottom: 15, height: 80, flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', flex: 1, paddingLeft: 20 }}><Text>{item}</Text></View>
            </View>
        )
    }

    render() {
        
        return (

            this.props.state.favs.length > 0 ?
                <View style={{ flex: 1, marginTop: 10 }}>
                    <FlatList
                        data={this.props.state.favs}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => this.renderItem(item)}
                    />
                </View>
                :
                <View style={{flex: 1 ,justifyContent: 'center', alignItems: 'center' }}>{this.renderLoader(this.props.state.loading)}</View>
                
        )
    }
}

export default Content;