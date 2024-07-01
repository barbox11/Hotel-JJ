document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(signupForm);
        const data = {
            nombre: formData.get('nombre'),
            email: formData.get('email'),
            contraseña: formData.get('contraseña')
        };

        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Error:', error);
        }
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const data = {
            email: formData.get('email'),
            contraseña: formData.get('contraseña')
        };

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});