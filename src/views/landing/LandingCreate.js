import React from 'react';
import {Button} from 'reactstrap';

function LandingCreate({onToggle}) {
	return (
		<div className='d-flex justify-content-end'>
			<Button onClick={onToggle}>Create User</Button>
		</div>
	);
}

export default LandingCreate;
