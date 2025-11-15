/*Example JSON
const userData = {
    universityEmail: "new@pitt.edu",
    password: "pass",
    name: "Joe",
    contactDetails: "0987654321"
}
*/

export function createUser(userData){
    const endpoint = 'http://localhost:3001/users';

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => {
        //checks for successful db entry
        if(!response.ok){
            throw new Error('Failed to create user on server.');
        }
        return response.json();
    })
    .then(newEntry => {
        console.log('User saved:', newEntry);
    })
    .catch(error => {
        console.error('Error during POST request:', error);
    });
}