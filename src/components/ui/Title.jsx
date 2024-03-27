import React from 'react'

const Title = (props) => {
  return (
    <div style={{
        fontSize : 32,
        lineHeight : "38.4px",
        fontWeight : 800,
        color : "#000000",
        textAlign : "center"
    }} className='Title'>
        {props.text}
    </div>
  )
}

export default Title