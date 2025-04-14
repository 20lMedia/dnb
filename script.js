document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        const img = item.querySelector('img');
        if (img.complete) {
            item.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                item.classList.add('loaded');
            });
        }
    });
});