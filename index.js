const makeRequest = require('./requestHandler');

const getStore = ({ url, entityName }) => {
	const baseURL = `${ url }${ entityName }`;
	const stores = {
        create: ({ payload }) => makeRequest({
            method: 'post',
            url: baseURL,
            data: payload,
        }),

        update: ({ payload, id }) => makeRequest({
            method: 'put',
            url: `${ baseURL }/${ id }`,
            data: payload,
        }),

        delete: ({ payload, id }) => makeRequest({
            method: 'delete',
            url: `${ baseURL }/${ id }`,
            data: payload,
        }),

        read: ({ id }) => makeRequest({
            method: 'get',
            url: `${ baseURL }/${ id }`,
        }),
	};

	return (context) => {
		const { action } = context;

		return stores[action](context);
	};
};

module.exports = getStore;
