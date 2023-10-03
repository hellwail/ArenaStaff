import React, { Component } from 'react'
import css from './Categories.module.css'

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'All',
                    name: 'Все'
                },
                {
                    key: 'Head',
                    name: 'Бошки'
                },
                {
                    key: 'Weapon',
                    name: 'Пушки'
                },
                {
                    key: 'Chest',
                    name: 'Грудаки'
                },
                {
                    key: 'Gloves',
                    name: 'Перчи'
                },
                {
                    key: 'Legs',
                    name: 'Шаровары'
                },
                {
                    key: 'Shoulder',
                    name: 'Погоны'
                }
            ]
        }
    }
    render() {
        return (
            <div className={css.cata}>
                {this.state.categories.map(e => (
                    <div key={e.key} onClick={() => this.props.chooseCategory(e.key)}> {e.name} </div>
                ))}
            </div>
        )
    }
}

export default Categories