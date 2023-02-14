const makeRequest = require('./requestHandler');

const stores = {
	create: ({ url, payload, entityName }) => makeRequest({
        method: 'post',
        url: `${ url }${ entityName }`,
        data: payload,
    }),

	update: ({ url, payload, entityName, id }) => makeRequest({
        method: 'put',
        url: `${ url }${ entityName }/${ id }`,
        data: payload,
    }),

	delete: ({ url, payload, entityName, id }) => makeRequest({
        method: 'delete',
        url: `${ url }${ entityName }/${ id }`,
        data: payload,
    }),

	read: ({ url, entityName, id, parentKey }) => makeRequest({
        method: 'get',
        url: `${ url }${ tableName }?${ parentKey }=${ id }`,
    }),
};

module.exports = stores;