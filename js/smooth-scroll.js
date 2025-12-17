// Smooth scroll to section when page loads with hash
document.addEventListener('DOMContentLoaded', function() {
    // Check if there's a hash in the URL
    if (window.location.hash) {
        // Remove the # from the hash
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Small delay to ensure page is fully loaded
            setTimeout(() => {
                // Calculate offset (navbar height + some padding)
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
                const offset = navbarHeight + 20; // Add 20px extra padding
                
                // Get element position
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                
                // Scroll to position with offset
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 300); // Increased delay to ensure page is fully loaded
        }
    }
});

// Handle smooth scrolling for hash links on the same page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            e.preventDefault();
            
            // Calculate offset (navbar height + some padding)
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
            const offset = navbarHeight + 20; // Add 20px extra padding
            
            // Get element position
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
            
            // Scroll to position with offset
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Update URL hash without jumping
            history.pushState(null, null, '#' + targetId);
        }
    });
});
