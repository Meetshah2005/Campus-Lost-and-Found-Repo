/* Example JSON
const userData = {
	universityEmail: "new@pitt.edu",
	password: "pass",
	name: "Joe",
	contactDetails: "0987654321"
} */

export async function createUser(userData) {
	const endpoint = 'http://localhost:3001/users';

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		});

		if (!response.ok) {
			throw new Error(`Failed to create user on server. Status: ${response.status}`);
		}

		const newEntry = await response.json();
		console.log('User saved:', newEntry);

		return newEntry;
	} catch (error) {
		console.error('Error during POST request:', error);
		return null;
	}
}

export async function getUser(email) {
	const endpoint = `http://localhost:3001/users?universityEmail=${email}`;

	try {
		const response = await fetch(endpoint, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}

		const userData = await response.json();
		return userData[0];
	} catch (error) {
		console.error('Error during GET request:', error);
		return null;
	}
}
