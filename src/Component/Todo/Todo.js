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
                key: Date.now()
            }
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItems)
                }
            })
            this._inputElement.value = ""
        }
    }

    deleteTodoHandler = (key) => {
        const updatedItems = this.state.items.filter(item => {
            console.log(item)
        })
        return updatedItems;
    }


    render() {

        let todoLists = this.state.items.map((todo) => {
            return (
                <div>
                    <Form>
                        <Form.Check>
                            <Listodo item={todo.text} itemKey={todo.key} key={todo.key} clicked = {() => {this.deleteTodoHandler(todo.key)}}></Listodo>
                        </Form.Check>
                    </Form>
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
                                    <Col  md="auto">
                                        <Button className = "btnFilter">All</Button>
                                    </Col>
                                    <Col md="auto">
                                        <Button className = "btnFilter">Active</Button>
                                    </Col>
                                    <Col md="auto">
                                        <Button className = "btnFilter">Completed</Button>
                                    </Col>
                                {todoLists}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Aux>

        )
    }
}

export default Todo;