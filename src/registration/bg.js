import React from 'react';

const Background = props =>(

     <div onClick={props.bgChange} className="imgBox">
      <img back={props.bg.background} src={props.bg.img}
        id={props.bg.id}
       />
       <h2 back={props.bg.background}>{props.bg.name}</h2>
       </div>

  );

export default Background;
