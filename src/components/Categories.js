import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    id: 'all',
                    name: 'Все'
                },
                {
                    id: 'cakes',
                    name: 'Торты'
                },
                {
                    id: 'desserts',
                    name: 'Десерты'
                },
                {
                    id: 'loaves',
                    name: 'Каравай'
                },
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.id} onClick={() => this.props.chooseCategory(el.id)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories