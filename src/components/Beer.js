import React, { Component } from 'react'
import Card from './Card';

export default class Beer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             beers: [],
             buttonCount: 0,
             name: '',
             tagline: '',
             description: '',
             imageUrl: ''
        }
    }

    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers")
        .then((response)=> response.json())
        .then((data) => {
            this.setState({
                beers: data,
                name: data.name,
                tagline: data.tagline,
                description: data.description,
                imageUrl: data.image_url
            })
        })
    }

    render() {
        return (
            <div>
               The beers we have:
                {this.state.beers.map((beer)=> {
                    return <Card key={beer.id} name={beer.name}
                                 tagline={beer.tagline} description={beer.description} 
                                 imageUrl={beer.image_url}/>
                })}
            </div>
        )
    }
}
