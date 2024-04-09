// Function to display text in HTML elements
function displayText(value, id) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    } else {
        console.error(`Element with id '${id}' not found.`);
    }
}

// Fetching data from JSON file
fetch('JSON FILES/page4.json')
    .then(response => response.json())
    .then(data => {
 
        localStorage.setItem('leopardContent', JSON.stringify(data));

        // Populating leopard background
        displayText(leopard['leopard-background']['territories-title'], 'territories-title');

        // Populating venue heading
        displayText(leopard['venue-heading']['leopard-havens-title'], 'leopard-havens-title');

        // Populating venue 1
        displayText(leopard['venues-section']['venue1']['venue1-title'], 'venue1-title');
        displayText(leopard['venues-section']['venue1']['venue1-description'], 'venue1-description');

        // Populating venue 2
        displayText(leopard['venues-section']['venue2']['venue2-title'], 'venue2-title');
        displayText(leopard['venues-section']['venue2']['venue2-description'], 'venue2-description');

        // Populating venue 3
        displayText(leopard['venues-section']['venue3']['venue3-title'], 'venue3-title');
        displayText(leopard['venues-section']['venue3']['venue3-description'], 'venue3-description');

        // Populating threat section
        displayText(leopard['threat-section']['threat-title'], 'threat-title');
        displayText(leopard['threat-section']['threat-description'], 'threat-description');

        // Populating  links
        displayText(leopard['leopard-links']['links-info-para'], 'links-info-para');

       
    })
    .catch(error => console.error('Error fetching data:', error));


    let leopard=JSON.parse( localStorage.getItem("leopardContent"));

    if (localStorage.getItem("userRole")) {
        const getPopup = `<span class="popup" onclick="openPopup()">Edit</span>`;
        document.getElementById("editor").insertAdjacentHTML("beforeend", getPopup);
    }
    function openPopup() {
      window.open("editor.html", "", "width=800px, height=410px");
    }
    if(localStorage.getItem("userRole")){
    const  loginUser = `<li><a onclick="removeuser()">Logout</a></li>`;
    document.getElementById("login").insertAdjacentHTML("beforeend", loginUser);
    }
    else{
    const  loginUser = `<li><a href="login.html">Login</a></li>`;
    document.getElementById("login").insertAdjacentHTML("beforeend", loginUser);
    
    }
    function removeuser() {
    localStorage.removeItem('userRole');
    location.reload();
    }
    

