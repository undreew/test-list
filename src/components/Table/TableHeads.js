import React from 'react';

function TableHeads({heads}) {
	return (
		<thead>
			<tr>
				{(heads || []).map((head, index) => {
					return <th key={index}>{head}</th>;
				})}
			</tr>
		</thead>
	);
}

export default TableHeads;
