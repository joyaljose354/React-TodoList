import React from "react";
import Card  from '../TaskCard';
import { Modal,Button,Input  } from 'antd';
import './style.css';

export default class Board extends React.Component{

    constructor(props){
        super(props);
        this.state={
            cards:[{cardId:'123',title:'myCard',description:'This is a sample card'}],
            showTextField:false,
        }
    }
    addNewCard=()=>{
        this.setState({showTextField:true})
    }
    deleteTask=(cardId)=>{
        const taskIndex = this.state.cards.findIndex(item=>item.cardId === cardId);
        let newList = [...this.state.cards];
        newList.splice(taskIndex,1);
        this.setState({cards:newList});
    }
    setTaskName = (e)=>{
        console.log(e.target.value);
        this.setState({taskName:e.target.value});
    }
    cancelTaskAdd=()=>{
        this.setState({showTextField:false});
    }
    onAddTask=()=>{
        let newList = [...this.state.cards];
        let newCardData={
            cardId:`~${this.state.taskName}${newList.length + 1}`,
            title:this.state.taskName,
            description:''
        }
        newList.push(newCardData);
        this.setState({cards:newList});
    }
    render(){
        return(
            <div className='boardContainer'>
                {this.state.cards.map(items=>(
                    <Card cardId={items.cardId} title={items.title} content={items.description} onDeleteTask={this.deleteTask}/>
                 ))}
                {!this.state.showTextField ? (
                <Button 
                    className='addButton' 
                    icon='plus' 
                    onClick={this.addNewCard}>
                        Add a task
                </Button>
                ):(
                    <>
                        <Input placeholder="Basic usage" onChange={this.setTaskName} />
                        <div className='newTask'>
                            <Button className='okButton' onClick={this.onAddTask}>Ok</Button>
                            <Button className='cancelButton' icon='close' onClick={this.cancelTaskAdd}/>
                        </div>
                    </>
                )}
            </div>
        );
    }
}   