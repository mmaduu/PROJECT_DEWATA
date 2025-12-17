// PAGE TRANSITION SCRIPT - FADE ONLY

document.addEventListener('DOMContentLoaded', function() {
    // Handle all internal links
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        // Only apply to internal links (same domain)
        const href = link.getAttribute('href');
        
        // Skip external links, anchors, and special links
        if (!href || 
            href.startsWith('#') || 
            href.startsWith('http') || 
            href.startsWith('mailto:') || 
            href.startsWith('tel:') ||
            link.target === '_blank') {
            return;
        }

        link.addEventListener('click', function(e) {
            e.preventDefault();
            const destination = this.href;

            // Add fade out class
            document.body.classList.add('fade-out');

            // Navigate after fade out animation
            setTimeout(() => {
                window.location.href = destination;
            }, 400);
        });
    });
});
