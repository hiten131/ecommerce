
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        alert('Thank you for subscribing!');
        this.reset();
    }
});

// Category card click handler
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function () {
        // Add a subtle feedback effect
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Highlight active nav item
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    document.querySelectorAll('.account-nav a').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Handle form submission
    const profileForm = document.querySelector('.profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Profile updated successfully!');
        });
    }
});



// ...existing code...

// Address page functionality
document.addEventListener('DOMContentLoaded', function () {
    const addAddressBtn = document.querySelector('.add-address-btn');
    if (addAddressBtn) {
        addAddressBtn.addEventListener('click', () => {
            // Add your address form logic here
            alert('Add new address functionality will be implemented here');
        });
    }

    // Delete address functionality
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this address?')) {
                // Add delete logic here
                button.closest('.address-card').remove();
            }
        });
    });

    // Settings page functionality
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add password update logic here
            alert('Password updated successfully!');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Get all password toggle buttons
    const toggleButtons = document.querySelectorAll('.toggle-password');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Find the associated password input
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');

            // Toggle password visibility
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // Password validation
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (newPassword !== confirmPassword) {
                alert('New passwords do not match!');
                return;
            }

            // Add your password update logic here
            alert('Password updated successfully!');
            this.reset();
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const newPassword = document.getElementById('new-password');
    const confirmPassword = document.getElementById('confirm-password');
    const form = document.querySelector('.settings-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (newPassword.value !== confirmPassword.value) {
            alert('Passwords do not match!');
            return;
        }

        if (!validatePassword(newPassword.value)) {
            alert('Password must be at least 8 characters long and include both letters and numbers');
            return;
        }

        // Simulate password update
        alert('Password updated successfully!');
        form.reset();
    });

    function validatePassword(password) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    }
});

// Add this to your existing script file
document.addEventListener('DOMContentLoaded', function() {
    const deleteAccountBtn = document.querySelector('.delete-account-btn');
    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', function() {
            const confirmed = confirm('Are you sure you want to delete your account? This action cannot be undone.');
            if (confirmed) {
                alert('Account deletion request submitted. You will receive a confirmation email.');
                // Add your account deletion logic here
            }
        });
    }
});