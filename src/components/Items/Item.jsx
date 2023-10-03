import React, { Component } from 'react'
import css from './Items.module.css'

export class Item extends Component {
  render() {
    return (
      <div className={css.item}>
        <img src= {'./img/' + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}</b> 
        <div className={css.buy} onClick={() => this.props.onAdd(this.props.item)} >+</div>
      </div>
    )
  }
}

export default Item