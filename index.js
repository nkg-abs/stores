const makeRequest = require('./requestHandler');

const stores = {
	create: ({ url, payload, tableName }) => makeRequest({
        method: 'post',
        url: `${ url }${ tableName }`,
        data: payload,
    }),

	update: ({ url, payload, tableName, id }) => makeRequest({
        method: 'put',
        url: `${ url }${ tableName }/${ id }`,
        data: payload,
    }),

	delete: ({ url, data, tableName, id }) => makeRequest({
        method: 'delete',
        url: `${ url }${ tableName }/${ id }`,
        data: data,
    }),

	read: ({ url, tableName, id, parentKey }) => makeRequest({
        method: 'get',
        url: `${ url }${ tableName }?${ parentKey }=${ id }`,
    }),
};

module.exports = stores;