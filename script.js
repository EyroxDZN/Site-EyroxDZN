// Empêcher le clic droit sur les images
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG' && !e.target.classList.contains('allow-right-click')) {
        e.preventDefault();
        return false;
    }
});

// Empêcher le glisser-déposer des images
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG' && !e.target.classList.contains('allow-drag')) {
        e.preventDefault();
        return false;
    }
});
