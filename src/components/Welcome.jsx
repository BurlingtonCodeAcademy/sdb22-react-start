import React, { useState } from "react"
import "./welcome.css"

const Welcome = (props) => {
    console.log(props)
    return (
        <>
            <h1 className={props.className}>Hello, {props.name}</h1>
        </>
    )
}

export default Welcome