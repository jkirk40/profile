let profile = {
    firstName: 'Joe',
    lastName: 'Smith',
    phone: '555-5555',
    email: 'fake@fake.com'
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