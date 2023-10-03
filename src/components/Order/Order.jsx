import React from 'react'
import css from './Order.module.css'
import { FaTrash } from 'react-icons/fa'


const Order = (props) => {
  return (
    <div className={css.item}>
      <img src={'./img/' + props.item.img} />
      <h2 className={css.title}>{props.item.title}</h2>
      <p className={css.price}>{props.item.price}</p>
      <FaTrash className={css.delete} onClick={() => props.onDelete(props.item.id)} />
    </div>
  )
}

export default Order;