import React, {Component} from 'react'

class PropsClassComponent extends Component {
    render () {
        return (
            <p>
                Pais de origen: {this.props.country}
            </p>
        )
    }
}

export default PropsClassComponent