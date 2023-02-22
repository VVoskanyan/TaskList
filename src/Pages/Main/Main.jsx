import React,{ useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems,addItem } from '../../redux/todoSlice';
import TodoItem from './TodoItem/TodoItem';
import styles from './Main.module.css';
export function Main(){
    const [nameValue,setNameValue] = useState('');
    const [dateValue,setDateValue] = useState('');
    const [descValue,setDescValue] = useState('');
    const [moreInfo,setMoreInfo] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(store => store.todos);
    function addItems(){
        const val = {
            name:nameValue,
            date:dateValue,
            desc:descValue,
            info:moreInfo,
            id:Math.random()+ Date.now(),
            isComplited:false
        }
        dispatch(addItem(val));
        setNameValue('');
        setDateValue('');
        setDescValue('');
        setMoreInfo('');
    }
    function clear(){
        dispatch(clearItems());
    }
    return(<div className = {styles.wrapper}>
        <div className = {styles.container}>
            <h2>Todo List</h2>
            <div className ={styles.formblock}>

                <input type ="text" value = {nameValue} placeholder="name" onChange = {(e)=>setNameValue(e.target.value)}/>
                <input type ="text" value = {descValue} placeholder="description" onChange = {(e)=>setDescValue(e.target.value)}/>
                <input type="date" maxLength="10"  value = {dateValue} placeholder="dd/mm/yyyy" onChange={e => setDateValue(e.target.value)}/>
                <textarea placeholder="do you want to type anything more" value ={moreInfo} onChange = {(e)=> setMoreInfo(e.target.value)}/> 
                <button className = {styles.form_button} onClick={addItems}>add</button>
            </div>

            <div>
                <div className = {styles.titles}>
                    <p>Name</p>
                    <p>Description</p>
                    <p>Date</p>
                </div>
                {
                    todos.map(val =>{
                        return <TodoItem item = {val}
                            key = {Math.random() + Date.now()}
                        />
                    })
                }
            </div>
            <div className ={styles.footerblock}>
                {todos.filter(val=>val.isComplited === true).length}/{todos.length} completed
                <button className = {styles.click} onClick = {clear}>clear</button>
            </div>
        </div>
    </div>)
}

