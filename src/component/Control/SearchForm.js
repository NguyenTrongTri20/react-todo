import React, { useState } from 'react';

function SearchForm(props) {

    const [title, setTitle] = useState('')
    
    
    const {onFilter} = props

    const onFilterChange = e => {
        const value = e.target.value
        setTitle(value)
        onFilter({
            title:value
        })
    }
    return (
        <>
            <input 
                type="text" 
                className="form-control"  
                placeholder="Ví dụ: học bài"
                
                value={title}
                onChange={onFilterChange}
            />
        </>
    );
}

export default SearchForm;