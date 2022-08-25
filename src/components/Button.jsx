import React from 'react';
import classNames from 'classnames';

function Button(props) {
	return (<button className={classNames('button')}>
		{props.children}
	</button>
	)
}


export default Button;