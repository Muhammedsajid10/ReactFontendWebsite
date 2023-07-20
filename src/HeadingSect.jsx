import React from 'react'

function HeadingSect() {

    const head = {
        textAlign: "center",
        margin: "10px",
        padding: "10px",
        fontStyle:"italic",
        fontSize:"30px"
    }


  return (
    <div>
        <h3 id='heading' style={head}>Our New Products <small>Loading...</small> </h3>
    </div>
  )
}

export default HeadingSect