//Function to display text in HTML elements
function displayText(value, id) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    } else {
        console.error(`Element with id '${id}' not found.`);
    }
}

// Fetching data from JSON file
fetch('JSON FILES/page1.json')
    .then(response => response.json())
    .then(data => {

        localStorage.setItem('indexContent', JSON.stringify(data));

        displayText(index.title, 'main-heading');

   
        displayText(index.introParagraph, 'intro-paragraph');

        // Populating rainforest section
        displayText(index.rainforest.heading, 'rainforest-heading');
        displayText(index.rainforest.description, 'rainforest-paragraph');
        displayText(index.rainforest.list[0], 'list-item-1');
        displayText(index.rainforest.list[1], 'list-item-2');
        displayText(index.rainforest.list[2], 'list-item-3');

        // Populating corals section
        displayText(index.corals.heading, 'corals-heading');
        displayText(index.corals.description, 'corals-paragraph');
        displayText(index.corals.list[0], 'list-item-4');
        displayText(index.corals.list[1], 'list-item-5');
        displayText(index.corals.list[2], 'list-item-6');

        // Populating fauna section
        displayText(index.fauna.heading, 'fauna-heading');
        displayText(index.fauna.description, 'fauna-paragraph');
        displayText(index.fauna.list[0], 'list-item-7');
        displayText(index.fauna.list[1], 'list-item-8');
        displayText(index.fauna.list[2], 'list-item-9');

      
    })
    .catch(error => console.error('Error fetching data:', error));

    let index=JSON.parse( localStorage.getItem("indexContent"));

    if (localStorage.getItem("userRole")) {
        const  userInfo = JSON.parse(localStorage.getItem("userRole"));
        if  (userInfo == "admin"){
          const getPopup = `<a onclick="openPopup()">Edit</a>`;
          document.getElementById("editor").insertAdjacentHTML("beforeend", getPopup);
          function openPopup() {
          window.open("editor.html", "", "width=800px, height=410px");
         }
        }
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
    
