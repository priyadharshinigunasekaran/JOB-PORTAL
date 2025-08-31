document.getElementById("registerForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = document.getElementById("role").value;

    if (password !== confirmPassword) {
        document.getElementById("responseMsg").innerText = "Passwords do not match!";
        return;
    }

    const user = {
        fullname: fullname,
        email: email,
        password: password,
        role: role
    };

    try {
        const response = await fetch("http://localhost:8080/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const result = await response.text();
        document.getElementById("responseMsg").innerText = result;
    } catch (error) {
        document.getElementById("responseMsg").innerText = "Error: Could not connect to server.";
    }
});
