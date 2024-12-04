function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Get the nav element
const nav = document.querySelector('nav');
let lastScrollY = window.scrollY;
let ticking = false;

// Function to hide the navbar
function hideNavbar() {
    nav.style.top = "-100px"; // Move the navbar off the screen
}

// Function to show the navbar
function showNavbar() {
    nav.style.top = "0"; // Reset the navbar to its original position
}

// Scroll event listener
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                // If scrolling down and more than 50px down, hide navbar
                hideNavbar();
            } else if (window.scrollY < lastScrollY || window.scrollY <= 50) {
                // If scrolling up or at the top, show navbar
                showNavbar();
            }
            lastScrollY = window.scrollY;
            ticking = false;
        });
        ticking = true;
    }
});

// Click event listener to hide navbar when clicking outside the nav
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
        hideNavbar();
    }
});

// Prevent click inside navbar from hiding it
nav.addEventListener('click', (e) => {
    e.stopPropagation();
});


// Timeout variable to track when to hide the navbar
let timeout;

// Function to hide the navbar after 2 seconds of inactivity
function startHideTimer() {
    timeout = setTimeout(() => {
        nav.classList.add('hidden'); // Hide navbar after 2 seconds
    }, 2000);
}

// Clear the timer if the user hovers over the navbar
function resetHideTimer() {
    clearTimeout(timeout);
    nav.classList.remove('hidden'); // Show navbar immediately on hover
}

function toggleDropdown() {
    const dropdown = document.getElementById('biography-dropdown');
    
    // Toggle 'show-dropdown' class
    if (dropdown.classList.contains('show-dropdown')) {
        dropdown.classList.remove('show-dropdown');
    } else {
        dropdown.classList.add('show-dropdown');
    }
}

// Close the dropdown when clicking outside
window.onclick = function (event) {
    const dropdown = document.getElementById('biography-dropdown');
    const biographyLink = document.getElementById('biography-link');

    if (!event.target.matches('#biography-link') && dropdown.classList.contains('show-dropdown')) {
        dropdown.classList.remove('show-dropdown');
    }
};

// Add event listeners to handle hover behavior
nav.addEventListener('mouseenter', resetHideTimer); // Show navbar on hover
nav.addEventListener('mouseleave', startHideTimer); // Start the timer to hide navbar after 2s

// Get references to the elements
const biographyBtn = document.getElementById("biography-btn");
const overlay = document.getElementById("biography-overlay");
const closeBtn = document.getElementById("close-overlay-btn");

// Show the overlay when the "Biography" button is clicked
biographyBtn.addEventListener("click", function() {
    overlay.style.display = "flex"; // Show the overlay
});

// Hide the overlay when the "Close" button is clicked
closeBtn.addEventListener("click", function() {
    overlay.style.display = "none"; // Hide the overlay
});

// Select the dropdown content and parent container
const dropdownContent = document.querySelector('.second-dropdown-content');
const dropdownParent = document.querySelector('.second-dropdown');

// Add event listener for mouseenter (hover in)
dropdownParent.addEventListener('mouseenter', () => {
    // Immediately show the dropdown content
    dropdownContent.style.opacity = '1';
    dropdownContent.style.visibility = 'visible';
});

// Add event listener for mouseleave (hover out)
dropdownParent.addEventListener('mouseleave', () => {
    // Delay the hiding of the dropdown for 2 seconds
    setTimeout(() => {
        dropdownContent.style.opacity = '0';
        dropdownContent.style.visibility = 'hidden';
    }, 2000); // 2000ms = 2 seconds
});



