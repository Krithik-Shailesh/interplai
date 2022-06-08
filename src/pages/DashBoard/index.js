import React, { Component } from 'react'
import Content from './content';
import API from '../../api/model';
import Utils from '../../Utils';

class DashBoard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            drawer: false,
            data: [],
            favs: [],
            loading: true
        }
        this.filteredFavs = []
    }

    componentDidMount(){
        API.getEntries().then(res => {
            this.setState({
                data: res.entries,
                loading: false
            })
            return Utils.getFavourites()
        }).then(res => {
            this.setState({
                favs: res
            })
        })
    }

    setItemState = (name) =>{
        let favs = this.state.favs
        favs.push(name)
        this.setState({
            [name]:name,
            favs: favs
        })

    }

    setDrawerState = () => {
        this.setState({
            drawer: !this.state.drawer
        })
    }

    removeItemFromState = (item) => {
        let state = {...this.state}
        delete state[item]
        this.setState({
            state,
            favs: this.state.favs.filter(data => data != item)
        })
       
        
    }

    render() {
        return (
            <Content
                state={this.state}
                navigation={this.props.navigation}
                setItemState={this.setItemState}
                setDrawerState={this.setDrawerState}
                removeItemFromState={this.removeItemFromState}
            />
        )
    }
}

export default DashBoard;