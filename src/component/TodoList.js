import React, { Component } from 'react'
import Item from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <section>
                <h1>todo list</h1>
                <Item/>
            </section>
        )
    }
}
