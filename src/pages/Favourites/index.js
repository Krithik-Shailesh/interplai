import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Utils from '../../Utils'
import Content from '../Favourites/content'

class Favourites extends Component {

    constructor(props) {
        
        super(props)
        this.state = {
            favs: [],
            loading: true
        }
    }

    componentDidMount(){
        Utils.getFavourites().then(res => {
            this.setState({
                favs: res,
                loading: false
            })
        })
        this.props.navigation.addListener('drawerItemPress', (e) => {
            // Prevent default behavior
            console.log(e)
            // Do something manually
            // ...
            Utils.getFavourites().then(res => {
                this.setState({
                    favs: res,
                    loading: false
                })
            })
          });
    }

    render() {
        return (
            <Content
                state={this.state}
                navigation={this.props.navigation}
            />
        )
    }
}

export default Favourites;