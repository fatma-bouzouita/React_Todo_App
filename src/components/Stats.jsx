import React from 'react'

export const Stats = ({ toDoList }) => {
    let cnt = toDoList.length;
    return (
        <div className='stats'>
            <p className='notif'> 
{ cnt===0 ? 'You got everything ' : `You have ${cnt} tasks on your list`}
            </p>
            </div>
    );
} ;
export default Stats;
