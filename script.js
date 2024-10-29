function openEnvelope() {
    // Hide the landing page
    document.querySelector(".landing").style.display = "none";
    
    // Show the transition page
    document.getElementById("transitionContent").classList.remove("hidden");
    
    // Set a timeout to show the romance page after a few seconds
    setTimeout(() => {
        document.getElementById("transitionContent").style.display = "none"; // Hide transition page
        document.getElementById("romanceContent").classList.remove("hidden"); // Show romance page
    }, 3000); // Change this duration (in milliseconds) as needed
}
