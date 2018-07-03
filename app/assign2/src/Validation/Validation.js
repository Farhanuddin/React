import React from 'react';

const Validation = (props) => {
	console.log("Validation component" + props.textLength);
		let text= null;
		
		if(props.textLength == null){
			text = null;
		}else if(props.textLength < 5){
			text = 'Text too Short';
		}else if(props.textLength > 10){
			text = 'Text too Long';
		}else{
			text = 'Text is Great';
		}

	return (
		  <div>
		  	{text}
		  </div>
		);
}

export default Validation;

