document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };

    try {
        const response = await fetch("https://portfolio-backend-r8c5.onrender.com/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            alert(" Message Sent Successfully!");
            this.reset();
        } else {
            alert(" Failed to send message.");
        }

    } catch (error) {
        console.error(error);
        alert("Server Error. Try again later.");
    }
});