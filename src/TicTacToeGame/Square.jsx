import React from 'react'

const Square = (props) => {
    
  return (
    <div 
    onClick ={props.onClick} 
    className='square' 
    style={{border:'2px solid blue',color:'red',height:'100px',width:'100px',display:'flex',justifyContent:'center',alignItems:'center'}}>
         <h1>{props.value}</h1> 
    </div>
  )
}

export default Square;