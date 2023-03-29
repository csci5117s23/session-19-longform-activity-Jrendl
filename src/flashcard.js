import React from "react";
import { useState } from "react";

export default function Flashcard(props){
    const [front, flipFront] = useState(true);
    
    if (front){
        return <span>
            <div>
                Front of Card
            </div>
            <div className="info">
                {props.frontInfo}
            </div>
        </span>
    }else{
        return <span>
            <div>
                Back of Card
            </div>
            <div className="info">
                {props.backInfo}
            </div>
        </span>
    }
}