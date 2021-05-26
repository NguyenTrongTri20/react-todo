import React, { useState } from 'react';

function SearchDropdown(props) {


    const [option, setOption] = useState("-1")
    const {onFilter} = props

    const onOptionChange = e =>{
        let value = e.target.value
        setOption(value)
        onFilter({
            completed: parseInt(value)
        })
    }

    return (
        <>
           <select 
                className="form-select" 
                aria-label="Default select example"
                value={option}
                onChange={onOptionChange}    
            >
           <option value="-1" >Tất cả</option>
            <option value="1" >Hoàn thành</option>
            <option value="0" >Chưa hoàn thành</option>
            </select> 
        </>
    );
}
   
export default SearchDropdown;