import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

export default class ReactTransitionGroup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             animate: true
        }
    }


    changeAnimate = () => {
        this.setState({
            animate: !this.state.animate
        })
    }
    

    render() {
        const { animate } = this.state

        return (
            <div>
                <button onClick={ this.changeAnimate }>触发</button>
                {/* 给 p 添加动画效果 */}
                <CSSTransition
                    // in 的值必须是变化的
                    in={ animate }

                    // timeout 是动画延迟时间
                    timeout={ 1000 }
                    unmountOnExit

                    // classNames 是动画效果,在他的属性对象中写类名即可
                    // enter - 元素进入的一瞬间
                    // enterActive - 元素进入的过程
                    // exit - 元素离开的瞬间 *
                    // exitActive - 元素离开的过程
                    classNames={{
                        enter: 'animated',
                        enterActive: 'rotateIn',
                        exit: 'animated',
                        exitActive: 'rotateOut'
                    }}
                >
                    <p>动画元素</p>
                </CSSTransition>
            </div>
        )
    }
}
