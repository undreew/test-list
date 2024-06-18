import axios from 'axios';
import {useState} from 'react';

function useAddUsers(callback) {
	const [isAdding, setIsAdding] = useState(false);
	const [isAddOpen, setIsAddOpen] = useState(false);

	function handleAddModal() {
		setIsAddOpen(!isAddOpen);
	}

	async function onAdd() {
		setIsAdding(true);
		try {
			await axios
				.post('')
				.then((res) => Promise.resolve(res.data))
				.catch((err) => Promise.reject(err));
		} catch (error) {
			console.log(error);
		} finally {
			setIsAdding(false);
			if (callback) callback();
		}
	}

	return {
		onAdd,
		isAdding,
		isAddOpen,
		handleAddModal,
	};
}

export default useAddUsers;
