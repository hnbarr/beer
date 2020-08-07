import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            buttonCount: 0
        }
    }

    subscribe = () => {
        this.setState({
            buttonCount: this.state.buttonCount + 1
        })
    }
    render() {
        return (
            <div className="card">
            <div className="details">
                <div className="name">
                    {this.props.name}
                </div>
                <div className="tagline">
                    {this.props.tagline}
                </div>
                <div className="description">
                    {this.props.description}
                </div>
                <button className="button" onClick={this.subscribe}>Likes: {this.state.buttonCount}</button>
            </div>
            <div className="image">
                <img className="image_url"
                    src={this.props.imageUrl} />
            </div>
        </div>
        )
    }
}

