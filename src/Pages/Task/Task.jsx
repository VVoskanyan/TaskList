import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import classes from "./Task.module.css";



export function Task(){
    const todos = useSelector(store => store.todos);
    let {id} = useParams();
    const item = todos.filter(item => (":" + item.id) == id)[0]
    return (<div className = {classes.container}>
        <h2>
           <NavLink to = "/">Main</NavLink>
        </h2>
    <div>
        <p>Name: {item.name}</p>
        <p>Description: {item.desc}</p>
        <p>Date: {item.date}</p>
        <p>Info: {item.info}</p>
    </div>
    </div>)
}