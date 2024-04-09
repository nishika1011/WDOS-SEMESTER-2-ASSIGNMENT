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
fetch('JSON FILES/page7.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {

        localStorage.setItem('wilpattuContent', JSON.stringify(data));

            // Populate wilpattu-background
            displayText(wilpattu['wilpattu-background']['wilpattu-text']['wilpattu-title'], 'wilpattu-title');

            // Populate section-1
            displayText(wilpattu['section-1']['section-1-title'], 'section-1-title');
            displayText(wilpattu['section-1']['section-1-paragraph'], 'section-1-paragraph');

            // Populate section-2
            displayText(wilpattu['section-2']['section-2-title'], 'section-2-title');
            displayText(wilpattu['section-2']['section-2-paragraph'], 'section-2-paragraph');

            // Populate section-3
            displayText(wilpattu['section-3']['section-3-title'], 'section-3-title');
            displayText(wilpattu['section-3']['section-3-paragraph'], 'section-3-paragraph');

            // Populate section4-heading
            displayText(wilpattu['section4-heading']['section4-heading-title'], 'section4-heading-title');
            displayText(wilpattu['section4-heading']['section4-heading-paragraph'], 'section4-heading-paragraph');
         
        })
        .catch(error => console.error('Error fetching data:', error));


        let wilpattu =JSON.parse( localStorage.getItem("wilpattuContent"));

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
    


    
