import React, { Component } from 'react'
import css from './FullItem.module.css'
import btn from '../Items.module.css'


export class FullItem extends Component {
    render() {
        return (
            <div className={css.full}>
                <div>
                    <img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    <b>{this.props.item.price}</b>
                    <div className={btn.buy} onClick={() => this.props.onAdd(this.props.item)} >+</div>
                </div>
            </div>
        )
    }
}

export default FullItem