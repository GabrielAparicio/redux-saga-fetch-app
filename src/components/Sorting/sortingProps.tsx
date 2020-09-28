export const selectProps = {
    label: 'Order By',
    selectItems: [
        {label: 'Created at', value: 'created_at'},
        {label: 'Updated at', value: 'updated_at'},
        {label: 'Name', value: 'name'},
        {label: 'Email', value: 'email'}
    ]
};

export const radioProps = {
    type: 'radio',
    name: 'type',
    radioItems: [
        {label: 'Descending', value: 'desc'},
        {label: 'Ascending', value: 'asc'}
    ]
};