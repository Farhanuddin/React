import React from 'react';

const Char = (props) => {

	let text= null;

	return (
			  <div>
			  	<p onClick={props.del}>{props.ch}</p>
			  	
			  </div>
		   );
}

export default Char;

