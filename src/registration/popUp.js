import React from 'react';

 const PopUp = props => (
     <div className="popUp">
       <h1>Good choice!</h1><br/><h1>That's your song, {props.user}</h1>
       <iframe width="560"
               height="315"
               src={props.source}
               frameBorder="0"
               allow="autoplay"
               allowFullScreen></iframe>
     </div>
  )


export default PopUp;
