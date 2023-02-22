import React from 'react';
import { useDispatch } from 'react-redux';
import { changeItem, deleteItem } from '../../../redux/todoSlice';
import { NavLink } from 'react-router-dom';
import classes from './TodoItem.module.css';
export default function TodoItem({ item }) {
    const dispatch = useDispatch();
    function change(id) {
        dispatch(changeItem(id));
    }
    function deleted(id) {
        dispatch(deleteItem(id));
    }
    //className={classes.itemblock}
    return (<div className = {classes.itemblock}>
        <input type="checkbox" defaultChecked={item.isComplited}
            onChange={() => change(item.id)} />
        <p>{item.name}</p>
        <p>{`${item.desc.slice(0, 20)}...`}</p>
        <NavLink to={`/details/:${item.id}`} >click for more...</NavLink>
        <p>{item.date}</p>
        <button onClick={() => deleted(item.id)}>X</button>
    </div>)
}