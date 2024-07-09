 
// Get the current URL path
const path = window.location.pathname;

// Function to handle redirection based on path
const redirectToSocialMedia = (socialMedia) => {
    switch (socialMedia) {
        case '/instagram':
            window.location.href = 'https://www.instagram.com/kishandata23/'; // Replace with your actual Instagram URL
            break;
        case '/whatsapp':
            window.location.href = 'https://wa.me/9550488475'; // Replace with your actual WhatsApp URL or phone number
            break;
        case '/youtube':
            window.location.href = 'https://www.youtube.com/@kishandata23'; // Replace with your actual WhatsApp URL or phone number
            break;
        case '/x':
            window.location.href = 'https://x.com/kishandata'; // Replace with your actual WhatsApp URL or phone number
            break;
        // Add cases for other social media platforms as needed
        default:
            break;
    }
};

// Check the path and redirect accordingly
switch (path) {
    case '/instagram':
        redirectToSocialMedia('/instagram');
        break;
    case '/whatsapp':
        redirectToSocialMedia('/whatsapp');
        break;
    case '/youtube':
            redirectToSocialMedia('/youtube');
            break;
    case '/x':
                redirectToSocialMedia('/x');
                break;
    // Add cases for other paths if needed
    default:
        break;
}
