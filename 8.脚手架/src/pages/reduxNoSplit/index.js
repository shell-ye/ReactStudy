import React, { Component } from 'react'
import actions from './../../reduxNoSplit/actions'
import store from '../../reduxNoSplit/store'

export default class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            todos: store.getState().todos
        }
    }

    componentDidMount () {
        store.subscribe(() => {
            this.setState({
                todos: store.getState().todos
            })
        })
    }

    renderItems = () => {
        return this.state.todos.map((item, index) => (
            <li key={ item.id }>
                <p>{ item.task }</p>
                <button onClick={() => { this.delete( index ) }}>删除</button>
            </li>
        ))
    }

    delete = index => {
        actions.delete_todos( index )
    }

    submit = e => {
        // console.log(e.keyCode)
        if ( e.keyCode == 13 ) {
            actions.add_todos( e.target.value )
        }
    }

    // 解决一个不知名的报错
    componentWillUnmount(){
        this.setState = (state, callback) => {
            return;
        }
    }

    render() {
        return (
            <div>
                <input type="text" onKeyUp={ this.submit } />
                <ul>{ this.renderItems() }</ul>
            </div>
        )
    }
}
