 
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname.split('/').filter(Boolean).pop(); // Extract the last part of the path
    console.log('Current path:', path); // Debugging line

    const urls = {
        instagram: "https://www.instagram.com/kishandata23/",
        whatsapp: "https://wa.me/9550488475",
        x: "https://twitter.com/kishandata",
        youtube: "https://www.youtube.com/@kishandata23"
    };

    if (urls[path]) {
        console.log('Redirecting to:', urls[path]); // Debugging line
        window.location.href = urls[path];
    } else {
        console.log('No matching URL found'); // Debugging line
    }
});