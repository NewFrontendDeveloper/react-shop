import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class CartData extends Component {
    render() {
        return (
            <div className='cont-cart-item'>
                <img src={'./img/' + this.props.item.img} alt='' />
                <div className='info'>
                    <h2>{this.props.item.title}</h2>
                    <b>{this.props.item.price}₽</b>
                </div>
                <FaTrash className='delete-btn' onClick={() => this.props.onDelete(this.props.item.id)} />
            </div>
        )
    }
}

export default CartData