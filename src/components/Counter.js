import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter: 0
        }

        this.addCount = this.addCount.bind(this)
    }

    addCount () {
        this.setState(state => ({
            counter: state.counter++
        }))
    }
    
    render() {
        return (
            <div>
                <p>
                    Depends on previous state. Counter: {this.state.counter}
                </p>
                <button onClick={this.addCount}>
                    +
                </button>
            </div>
        )
    }
}
