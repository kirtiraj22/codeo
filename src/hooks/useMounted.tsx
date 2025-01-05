"use client";

import { useEffect, useState } from "react";

const useMounted = () => {
	const [monuted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return monuted;
};

export default useMounted;
