function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    showPage('mainPage');
});
