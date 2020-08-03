import React, {Component} from 'react'

class StateExample extends Component {
    constructor () {
        super()
        this.state = {
            message: 'Is that all stranger?'
        }
    }

    changeMessage () {
        this.setState({
            message: 'Comeback anytime'
        })
        
    }

    render () {
        return (
            <div>
                <p>
                    State example: { this.state.message }
                </p>
                <button onClick={()=> this.changeMessage()}>
                    Pay
                </button>
            </div>
        )
    }

}

export default StateExample