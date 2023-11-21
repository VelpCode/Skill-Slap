function checkAuthAndRedirect() {
    const user = auth.currentUser;
    if(user) {
        window.location.href = "index.html";
    }
}