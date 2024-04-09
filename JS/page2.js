function display_text(value, id) {
    const displayElement = document.getElementById(id);
    if (displayElement) {
        displayElement.innerHTML = value;
    } else {
        console.error('Could not find display element.');
    }
}

fetch('JSON FILES/page2.json')
    .then(response => response.json())
    .then(data => {

        localStorage.setItem('aboutContent', JSON.stringify(data));

        // About Section
        display_text(about.about.title, "about-heading");
        display_text(about.about.paragraph, "about-paragraph");

        // Sinharaja Section
        display_text(about.sinharaja.title, "sinharaja-heading");
        display_text(about.sinharaja.description, "sinharaja-description");

        // Horton Section
        display_text(about.horton.title, "horton-heading");
        display_text(about.horton.description, "horton-description");

        // Knuckles Section
        display_text(about.knuckles.title, "knuckles-heading");
        display_text(about.knuckles.description, "knuckles-description");
       
        

    })
    .catch(error => console.error('Error fetching data:', error));
       
    let about =JSON.parse( localStorage.getItem("aboutContent"));

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
