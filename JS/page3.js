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
  fetch('JSON FILES/page3.json')
      .then(response => response.json())
      .then(data => {

        localStorage.setItem('conservationContent', JSON.stringify(data));
          // Populating Conservation Background section
          displayText(conservation.cBackground.heading, 'c-heading');
  
          // Populating Conservation section
          displayText(conservation.conservation.heading, 'conservation-heading');
          displayText(conservation.conservation.paragraph, 'conservation-paragraph');
  
          // Populating Mission section
          displayText(conservation.mission.heading, 'mission-heading');
          displayText(conservation.mission.paragraph, 'mission-paragraph');
  
          // Populating Responsibilities section
          displayText(conservation.responsibilities.heading, 'responsibilities-heading');
          displayText(conservation.responsibilities.paragraph, 'responsibilities-paragraph');
  
          
  
          // Populating Achievements section
          displayText(data.achievements.heading, 'achievements-heading');
          displayText(data.achievements.paragraph, 'achievements-paragraph');

          


          // Function to display images
function displayGallery(images, containerId) {
  const container = document.getElementById(containerId);
  if (container) {
      images.forEach(image => {
          const pictureDiv = document.createElement('div');
          pictureDiv.className = 'picture';

          const img = document.createElement('img');
          img.src = image.src;
          img.alt = image.alt;
          img.className = 'picture';

          const headingOverlay = document.createElement('div');
          headingOverlay.className = 'heading-overlay';
          headingOverlay.innerHTML = `<i>${image.description}</i>`;

          pictureDiv.appendChild(img);
          pictureDiv.appendChild(headingOverlay);
          container.appendChild(pictureDiv);
      });
  } else {
      console.error(`Container with id '${containerId}' not found.`);
  }
}

// Populating Gallery section
displayText(conservation.flexGallery.heading, 'flex-heading');
displayText(conservation.flexGallery.paragraph, 'flex-paragraph');
displayGallery(conservation.flexGallery.images, 'picture-container');




})

        
.catch(error => console.error('Error fetching data:', error));

let conservation=JSON.parse( localStorage.getItem("conservationContent"));

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
    

