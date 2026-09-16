function copyPassword() {
    const password = document.getElementById("password").value;

    navigator.clipboard.writeText(password);

    alert("Password copied!");
}


