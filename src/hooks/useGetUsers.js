import axios from 'axios';
import {useEffect, useState} from 'react';

const url = 'https://reqres.in/api/users';

function useGetUsers() {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);

	async function onGet() {
		setIsLoading(true);
		try {
			const {data} = await axios
				.get(url)
				.then((res) => Promise.resolve(res.data))
				.catch((err) => Promise.reject(err));

			console.log(data);
			setData(data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		onGet();
	}, []);

	return {
		isFetching: isLoading,
		onGet,
		data,
	};
}

export default useGetUsers;
