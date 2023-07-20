import React from 'react'



function Article() {

    const para ={
        backgroundColor:"#282222",
        color:"white",
        margin:"35px",
        padding:"35px",
        letterSpacing:"1px",
        lineHeight:"28px",
        fontStyle:"italic",
        fontWeight:"bold"
    };
    const heading ={
      marginTop:"70px"
    }


  return (
    <div>
        <article id='Article'>
          <h1 style={heading}>About us</h1>
            <p style={para}><strong style={{fontSize:"30px"}}>The Sporty</strong> is an American professional soccer club based in Uniondale, New York, that plays in the National Independent Soccer Association (NISA). The club has previously competed in the North American Soccer League (NASL). With the NASL, the team won the Soccer Bowl Trophy in 2013, 2015, and 2016. They have been on hiatus since January 2021, citing the COVID-19 pandemic, though the league itself continued to play.[3][4]
            The present formation of the team and organization, established since August 2010, is a rebirth[5][6][7] of the original New York Cosmos (1970–1985) that played in the previous North American Soccer League, which was at the time the first division of North American socce
            </p>
        </article>
    </div>
  )
}

export default Article