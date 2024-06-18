import React from 'react';
import {Button, UncontrolledDropdown} from 'reactstrap';
import {DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

import Table from '../../components/Table/Table';

function LandingTable({isLoading, data, onView, onEdit, onDelete}) {
	return (
		<Table heads={['First Name', 'Last Name', 'Email', 'Action']}>
			{(data || []).map((item, index) => {
				const {first_name, last_name, email} = item || {};

				return (
					<tr key={index}>
						<td>{first_name}</td>
						<td>{last_name}</td>
						<td>{email}</td>

						<td>
							<UncontrolledDropdown className='d-inline-block w-100' group>
								<Button size='sm'>View</Button>

								<DropdownToggle size='sm' disabled={isLoading} outline>
									...
								</DropdownToggle>

								<DropdownMenu container='body'>
									<DropdownItem tag={Button}>Edit</DropdownItem>
									<DropdownItem tag={Button}>Delete</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</td>
					</tr>
				);
			})}
		</Table>
	);
}

export default LandingTable;
