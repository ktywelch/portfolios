import React from 'react'
import { Paper} from '@material-ui/core'

const Item = (props) => {
    return (
        <Paper  align='center' style={{ align: 'center'}}>
            <h2>{props.item.name}</h2>
            <h3>{props.item.description}</h3>
            <img className="d-block w-100" src={props.item.img} alt={props.item.alt}></img>
        </Paper>
    )
}

export default Item
