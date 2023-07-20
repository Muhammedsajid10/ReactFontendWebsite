import React from 'react';

function MainBody() {
  return (
    <div style={{position: "relative",}}>
      <main className='mainBody'>
        <img
          src="https://images.unsplash.com/photo-1524012435847-659cf8c3d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA5fHxmb290YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          style={{ width: "100%",height: "450px" }}
        />
        <h4 style={{position: "absolute",
                    top:"135px",
                    left:"700px",
                    fontStyle:"italic",
                    lineHeight:"30px",
                    fontSize:"19px",
                    color:"white"}}>
            "Sports refer to a wide range of physical activities or games that involve skill, competition, and physical exertion. They are often organized and governed by specific rules and regulations. Sports can be played individually or in teams and are enjoyed for recreational purposes, as well as for professional  reasons"
        </h4>
      </main>
    </div>
  );
}

export default MainBody;
