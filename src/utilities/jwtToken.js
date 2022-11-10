export const setJwtToken = (user) => {
    const currentUser = {
        email: user.email
    }
    // Get JWT Token
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            // Store in Local-Storage
            localStorage.setItem('plumber-token', data.token);
        })
}