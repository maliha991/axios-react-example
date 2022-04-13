import axios from "axios";
import React, { useEffect } from "react";

const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
	const fetchData = async () => {
		try {
			const response = await axios.get(randomUserUrl);
			console.log("Global: ", response);
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <h2 className="text-center">global instance</h2>;
};

export default GlobalInstance;
