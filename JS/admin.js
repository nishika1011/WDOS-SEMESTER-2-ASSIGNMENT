// Function to update the newsletter list in the table
function updateNewsletterList(subscriptions) {
    let newsletterList = document.getElementById('newsletter-list');
    newsletterList.innerHTML = '';
    subscriptions.forEach(function(subscription) {
        let row = document.createElement('tr');
        let emailCell = document.createElement('td');
        emailCell.textContent = subscription.email;
        row.appendChild(emailCell);
        newsletterList.appendChild(row);
    });
}

// Load existing subscriptions
window.onload = function() {
    let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    updateNewsletterList(subscriptions);
};