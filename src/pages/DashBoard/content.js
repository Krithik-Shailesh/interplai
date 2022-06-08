import React, { Component } from 'react'
import { View, Text, Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Button, IconButton, Colors } from 'react-native-paper';

import MenuIcon from '../../../assets/svgIcons/menu.svg'
import BaseComponent from '../../components/base-component';
import Utils from '../../Utils';

class Content extends BaseComponent {
    constructor(props) {
        super(props)
    }



    renderItem = (item, index) => {
        
        return (
            <View style={{ borderRadius: 8, backgroundColor: '#FFFFFF', marginHorizontal: 15, marginBottom: 15, height: 80, flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', flex: 1, paddingLeft: 20 }}><Text>{item.API}</Text></View>
                <Pressable style={{ justifyContent: 'center' }}>
                    { this.props.state.favs.includes(item.API) ?
                        <IconButton onPress={() => { this.props.removeItemFromState(item.API), Utils.removeItemFromFavourites(item.API) }} icon='heart' color={Colors.red300} size={20} /> :
                        <IconButton onPress={() => { Utils.setToFavourites(item.API), this.props.setItemState(item.API) }} icon='heart-outline' color={Colors.red300} size={20} />
                    }
                </Pressable>
            </View>
        )
    }

    render() {
        return (

            this.props.state.data && this.props.state.data.length > 0 ?
                <View style={{ flex: 1, marginTop: 10 }}>
                    <FlatList
                        data={this.props.state.data}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => this.renderItem(item, index)}
                    />
                </View>
                :
                <View style={{flex: 1 ,justifyContent: 'center', alignItems: 'center' }}>{this.renderLoader(this.props.state.loading)}</View>

        )
    }
}

export default Content;