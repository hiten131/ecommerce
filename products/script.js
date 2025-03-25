document.addEventListener('DOMContentLoaded', function () {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const productCards = document.querySelectorAll('.product-card');

    // Product data structure for filtering
    const products = Array.from(productCards).map(card => ({
        element: card,
        category: getCategoryFromProduct(card),
        price: getPriceFromProduct(card)
    }));

    // Add event listeners to filters
    categoryFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);

    function getCategoryFromProduct(card) {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes('laptop') || title.includes('tv') || title.includes('headphones') ||
            title.includes('camera') || title.includes('keyboard') || title.includes('speaker')) {
            return 'electronics';
        } else if (title.includes('watch') || title.includes('tracker')) {
            return 'fashion';
        } else if (title.includes('coffee') || title.includes('purifier')) {
            return 'home';
        }
        return 'other';
    }

    function getPriceFromProduct(card) {
        const priceText = card.querySelector('.price').textContent;
        return parseFloat(priceText.replace('$', ''));
    }

    function applyFilters() {
        const selectedCategory = categoryFilter.value;
        const selectedPriceRange = priceFilter.value;

        products.forEach(product => {
            let shouldShow = true;

            // Apply category filter
            if (selectedCategory && product.category !== selectedCategory) {
                shouldShow = false;
            }

            // Apply price filter
            if (selectedPriceRange) {
                const [min, max] = selectedPriceRange.split('-').map(val =>
                    val === '' ? Infinity : parseInt(val));
                if (product.price < min || product.price > max) {
                    shouldShow = false;
                }
            }

            // Show/hide product with animation
            if (shouldShow) {
                product.element.style.display = 'block';
                product.element.style.opacity = '1';
                product.element.style.transform = 'scale(1)';
            } else {
                product.element.style.opacity = '0';
                product.element.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    product.element.style.display = 'none';
                }, 300);
            }
        });
    }

    // Add reset filters button
    const filtersDiv = document.querySelector('.filters');
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Filters';
    resetButton.className = 'reset-filters';
    resetButton.addEventListener('click', () => {
        categoryFilter.value = '';
        priceFilter.value = '';
        applyFilters();
    });
    filtersDiv.appendChild(resetButton);
});