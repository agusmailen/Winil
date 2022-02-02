const isEmpty = (data) => {
	let empty = true;
	data.forEach(element => {
		if (element.value.length) {
			empty = false;
		}
	});
	return empty;
};

export default isEmpty;