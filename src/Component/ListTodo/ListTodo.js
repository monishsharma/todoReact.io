import React from 'react';
import { ListGroup } from 'react-bootstrap'
const ListTodo = (props) => {

    return (
        <ListGroup key={props.itemKey}>
            <ListGroup.Item onClick = {props.clicked}>{props.item}</ListGroup.Item>
        </ListGroup>
    )
}

export default ListTodo;