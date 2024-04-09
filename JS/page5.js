// Function to display text in HTML elements
function displayText(value, id) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    } else {
        console.error(`Element with id '${id}' not found.`);
    }
}

// Function to set href attribute for buttons
function setButtonHref(href, id) {
    const button = document.getElementById(id);
    if (button) {
        button.href = href;
    } else {
        console.error(`Button with id '${id}' not found.`);
    }
}

// Fetching data from JSON file
fetch('JSON FILES/page5.json')
    .then(response => response.json())
    .then(data => {

        localStorage.setItem('animalsContent', JSON.stringify(data));
        // Populating animal background section
        displayText(animals.animalBackground.heading, 'animal-heading');

        // Populating animal intro section
        displayText(animals.animalIntro.heading, 'intro-heading');
        displayText(animals.animalIntro.paragraph, 'intro-paragraph');


        // Populating card conclusion section
        displayText(animals.cardConclusion.paragraph, 'conclusion-paragraph');
       
    })
    .catch(error => console.error('Error fetching data:', error));


    let animals =JSON.parse( localStorage.getItem("animalsContent"));

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
    

