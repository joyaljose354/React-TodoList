import React from "react";
import './style.css';
import {Button} from 'antd';

function Card(props){
    const {cardId,title,content}=props;
    return(
        <div className='cardContainer'>
            <div className='contentContainer'>
                <div className='cardTitle'>{title}</div>
                <div className='cardContent'>{content}</div>
            </div>
            <Button icon='delete' onClick={()=>props.onDeleteTask(cardId)}/>
        </div>
    );
}

export default Card;