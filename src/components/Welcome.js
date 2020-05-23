import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        const { name } = this.props
        // const { state1, state2 } = this.state
        return (
            <div>
                <h1> Welcome {name}</h1>
            </div>
        )
    }
}

export default Welcome
