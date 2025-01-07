document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const panel = item.querySelector('.accordion-panel');
        
        header.addEventListener('click', () => {
            // If this item is already active, close it
            const isActive = item.classList.contains('is-active');

            // Close all panels first
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('is-active');
                }
            });

            // Toggle the current item
            if (!isActive) {
                item.classList.add('is-active');
            } else {
                item.classList.remove('is-active');
            }
        });
    });
});
