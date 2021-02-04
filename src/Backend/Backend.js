let profile = {
    firstName: 'Joe',
    lastName: 'Smith',
    phone: '555-5555',
    email: 'fake@fake.com',
    stations: [ 'station 1', 'station 2'],
    transactions: [ 'transaction 382', 'transacation 281']
}

export default function Backend () {
    const getField = async (field) => {

        await new Promise((resolve, reject) => {
            setTimeout(() => resolve("simulated delay complete"), 1500)
        });

        return profile[field];
    }

    const setField = async (field, update) => {

        await new Promise((resolve, reject) => {
            setTimeout(() => resolve("simulated delay complete"), 1500)
        });

        profile[field] = update;
    }

    return {
        getField: getField,
        setField: setField
    }
}