import React from 'react';
import {Table as ReactTable} from 'reactstrap';
import TableHeads from './TableHeads';
import TableBody from './TableBody';

function Table({heads, children}) {
	return (
		<ReactTable>
			<TableHeads heads={heads} />
			<TableBody>{children}</TableBody>
		</ReactTable>
	);
}

export default Table;
