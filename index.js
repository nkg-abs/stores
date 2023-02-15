const makeRequest = require('./requestHandler');

const getStore = ({ data: {url, entityName }}) => {
	const baseURL = `${url}/${entityName}`;
	const stores = {
		create: ({ data: { payload } }) =>
			makeRequest({
				method: 'post',
				url: baseURL,
				data: payload,
			}),

		update: ({ data: { payload, payload: { id } } }) =>
			makeRequest({
				method: 'put',
				url: `${baseURL}/${id}`,
				data: payload,
			}),

		delete: ({ data: { payload, payload: { id } } }) =>
			makeRequest({
				method: 'delete',
				url: `${baseURL}/${id}`,
				data: payload,
			}),

		read: (context) => {
			const { data: { payload }} = context;

			return makeRequest({
				method: 'get',
				url: payload?.id ? `${baseURL}/${id}` : baseURL,
			});
		},
	};

	return (context) => {
		const { data: { action } } = context;

		return stores[action](context);
	};
};

module.exports = getStore;
