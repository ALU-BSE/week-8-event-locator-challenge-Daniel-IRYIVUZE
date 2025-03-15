// EventLocator Main Script

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    
    // Set today's date as default for date filter
    var dateFilter = document.getElementById('dateFilter');
    if (dateFilter) {
        dateFilter.valueAsDate = new Date();
    }
    
    // Search form validation
    var searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            var searchInput = searchForm.querySelector('input[name="search"]');
            if (searchInput && searchInput.value.trim() === '') {
                event.preventDefault();
                searchInput.classList.add('is-invalid');
                
                // Create or update error message
                var errorMsg = searchForm.querySelector('.invalid-feedback');
                if (!errorMsg) {
                    errorMsg = document.createElement('div');
                    errorMsg.className = 'invalid-feedback';
                    searchInput.parentNode.appendChild(errorMsg);
                }
                errorMsg.textContent = 'Please enter a search term or location';
            }
        });
    }
    
    // Animation on scroll
    var animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkInView() {
        animatedElements.forEach(function(element) {
            var position = element.getBoundingClientRect();
            
            // Check if element is in viewport
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    }
    
    // Initial check and add scroll listener
    checkInView();
    window.addEventListener('scroll', checkInView);
    
    // Category filter change handler
    var categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            // You would typically submit the form or use AJAX here
            if (this.value) {
                console.log('Category selected:', this.value);
                // For demo purposes only - you'd implement actual filtering here
            }
        });
    }
});