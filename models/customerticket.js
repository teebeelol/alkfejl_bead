module.exports = {
    identity: 'customerticket',
    connection: 'default',
    attributes: {
            message: {
                type: 'string',
                required: true,
            },
            date: {
                type: 'datetime',
                required: true,
            },
            customer: {
                type: 'string',
                required: true,
            },
    }
}