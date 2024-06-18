import React from 'react';
import {Container} from 'reactstrap';

import useGetUsers from '../../hooks/useGetUsers';
import useAddUsers from '../../hooks/useAddUsers';

import LandingTable from './LandingTable';
import LandingCreate from './LandingCreate';

import CreateModal from '../../components/Modal/CreateModal';

function Index() {
	const {isFetching, data, onGet} = useGetUsers();
	const {isAdding, onAdd, isAddOpen, handleAddModal} = useAddUsers(onGet);

	return (
		<Container className='mt-5'>
			<LandingCreate onToggle={handleAddModal} />

			<LandingTable isLoading={isFetching} data={data} />

			<CreateModal
				onSubmit={onAdd}
				isOpen={isAddOpen}
				isSubmitting={isAdding}
				onToggle={handleAddModal}
			/>
		</Container>
	);
}

export default Index;
