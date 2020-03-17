import React from 'react';

const ButtonChangeName = (props) => {
    const handleClick= () => {
        props.onClick();
    }
    return (
        <button onClick={(e) => handleClick(e)}>
            Change Name
        </button>
    );
};

export default ButtonChangeName;