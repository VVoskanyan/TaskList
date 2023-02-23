import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import classes from "./Task.module.css";



export function Task(){
    const item = useSelector(store => store.todos.item);
    return (<div className = {classes.container}>
        <h2>
           <NavLink className = {classes.header_title} to = "/">Main</NavLink>
        </h2>
    <div>
        <p><span className={classes.span_titles}>Name: </span>{item.name}</p>
        <p><span className={classes.span_titles}>Description: </span>{item.desc}</p>
        <p><span className={classes.span_titles}>Date: </span>{item.date}</p>
        <p><span className={classes.span_titles}>Info: </span>{item.info}</p>
    </div>
    </div>)
}