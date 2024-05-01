import "./input.css"
import React from "react"
export function Input(props) {
    return <label className="Input">
        <input  {...props} />
        <span>{props.placeholder} </span>
    </label>
}