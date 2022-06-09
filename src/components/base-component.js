import React, {Component} from 'react'
import Loader from './loader'

class BaseComponent extends Component {
    renderLoader(animating) {
        return <Loader animating={animating} />;
    }
}

export default BaseComponent