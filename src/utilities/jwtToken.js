export const setJwtToken = (user) => {
    const currentUser = {
        email: user.email
    }
    // Get JWT Token
    fetch('https://my-assignment-11-server-nahiannahin.vercel.app/jwt', {
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