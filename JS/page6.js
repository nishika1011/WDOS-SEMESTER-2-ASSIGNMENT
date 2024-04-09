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
fetch('JSON FILES/page6.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {

        localStorage.setItem('yalaContent', JSON.stringify(data));

        // Populating yala-background
        displayText(yala['yala-background']['yala-text']['yala-title'], 'yala-title');

        // Populating section1
        displayText(yala['section1']['section1-title'], 'section1-title');
        displayText(yala['section1']['section1-paragraph'], 'section1-paragraph');

        // Populating section2
        displayText(yala['section2']['section2-title'], 'section2-title');
        displayText(yala['section2']['section2-paragraph'], 'section2-paragraph');

        // Populating section3-heading
        displayText(yala['section3-heading']['section3-heading-title'], 'section3-heading-title');
        displayText(yala['section3-heading']['section3-heading-paragraph'], 'section3-heading-paragraph');

      
    })
    .catch(error => console.error('Error fetching data:', error));

    let yala =JSON.parse( localStorage.getItem("yalaContent"));

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
    



