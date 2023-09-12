import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function InputValue() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const[valueInput, setValueInput] = useState("")
    
    const handleDisp = (value) => {
        dispatch({
            type: "VALUE",
            payload: value
        })
    }

    const handleInputValue = (e) => {
        setValueInput(e.target.value)
    }

    const addBtn = () => {
        if(valueInput.trim() !== ""){
            handleDisp(valueInput)
            setValueInput("")
        }
    }


    return(
        <div className="container-list">
            <input className="value" type="text" value={valueInput} placeholder="write" onChange={handleInputValue}></input>
            <button className="add-btn" onClick={addBtn}>ADD</button>
            <ul>
                {users.map((user, index) => {
                    return <li key={index}>{user}</li>
                })}
            </ul>
        </div>
    )
}

export default InputValue