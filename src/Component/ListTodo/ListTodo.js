import React from 'react';
import { ListGroup } from 'react-bootstrap'
const ListTodo = (props) => {
    return (
        <ListGroup key={props.itemKey}>
            <ListGroup.Item className = {props.complete ? 'completed' : ''} >{props.item} <span onClick = {props.clicked} style = {{float :'right',fontSize:'20px',cursor :'pointer'}}>&times;</span></ListGroup.Item>
        </ListGroup>
    )
}

export default ListTodo;