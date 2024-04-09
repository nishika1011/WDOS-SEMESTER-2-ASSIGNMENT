document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('emailInput').value;
    let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions.push({ email: email });
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
    alert('You have been subscribed!');
    document.getElementById('emailInput').value = '';
});