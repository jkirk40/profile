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

    return {
        getField: getField
    }
}