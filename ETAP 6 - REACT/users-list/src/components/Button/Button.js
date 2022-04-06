import React from 'react';
import "./Button.css"

export const Button = props=>(
<button className="btn" style={{padding:`${props.size}px`}}>{props.title}</button>
)
