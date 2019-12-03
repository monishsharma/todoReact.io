import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Listodo from '../ListTodo/ListTodo'
import { InputGroup, FormControl, Button, Container, Row, Col, Form } from 'react-bootstrap'
class Todo extends Component {

    state = {
        items: [],
    }

    addTodoHandler = () => {
        if (this._inputElement.value !== "") {
            let newItems = {
                text: this._inputElement.value,
                key: Date.now(),
                Completed: false
            }
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItems)
                }
            })
            this._inputElement.value = ""
        }
    }

    deleteTodoHandler = (index, key) => {

        const filteredItems = this.state.items.filter(item => {
            return item.key !== key
        })
        this.setState({ items: filteredItems })
    }

    onCheckedHandler = (index, key) => {
        const filteredItems = this.state.items;
        if (this.state.items[index].Completed === true) {
            filteredItems[index].Completed = false
        }
        else {
            filteredItems[index].Completed = true
        }
        this.setState({ items: filteredItems })
    }
    FilterTodoHandler = (type) => {
        // const All_Todo = 'All_Todo';
        // const Active_Todo = 'Active_Todo';
        // const Completed_Todo = 'Completed_Todo';
        // const todos = this.state.items;
        // let filter;
        // switch (type) {
        //     case Active_Todo:
        //         filter = todos.filter(todo => {
        //             if (!todo.Completed) {
        //                 return todo;
        //             }
        //         });
        //         break;
        //     case Completed_Todo:
        //         filter = todos.filter(todo => {
        //             if (todo.Completed) {
        //                 return todo;
        //             }
        //         });
        //         break;
        //     default:
        //         filter = null;
        //         break;
        // }

        // this.setState({ items: [...this.state.items,filter] })
        // console.log(this.state)

    }
    render() {
        let todoLists = {}
        todoLists = this.state.items.map((todo, index) => {
            return (
                <div key={todo.key}>
                    <Form>
                        <Form.Check style={{ position: 'absolute', marginTop: '20px' }} onChange={() => { this.onCheckedHandler(index, todo.key) }} ></Form.Check>
                    </Form>
                    <Listodo complete={todo.Completed} item={todo.text} itemKey={todo.key} clicked={() => { this.deleteTodoHandler(index, todo.key) }}></Listodo>
                </div>
            )
        })

        return (
            <Aux>
                <Container>
                    <Row>
                        <Col md={6} className="todo">
                            <h1>React Todo App</h1>
                            <InputGroup className="mb-4 " style={{ width: '70%' }}>
                                <FormControl
                                    ref={(a) => { this._inputElement = a }}
                                    placeholder="What to do ?"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append >
                                    <Button onClick={() => { this.addTodoHandler() }} variant="outline-secondary">Submit</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>

                        <Col md={6} style={{ marginTop: '50px' }}>
                            <Container>
                                <Row >
                                    <Col style={{ flexGrow: '0' }}>
                                        <Button className="btnFilter" onClick={() => { this.FilterTodoHandler('All_Todo') }}>All</Button>
                                    </Col>
                                    <Col style={{ flexGrow: '0' }}>
                                        <Button className="btnFilter" onClick={() => { this.FilterTodoHandler('Active_Todo') }}>Active</Button>
                                    </Col>
                                    <Col style={{ flexGrow: '0' }}>
                                        <Button className="btnFilter" onClick={() => { this.FilterTodoHandler('Completed_Todo') }}>Completed</Button>
                                    </Col>
                                </Row>
                                {todoLists}
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Aux>

        )
    }
}

export default Todo;