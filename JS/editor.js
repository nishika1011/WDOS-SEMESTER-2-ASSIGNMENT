const get_data_button = document.getElementById("select");
if (get_data_button)
  get_data_button.addEventListener("click", function (e) {

    const selectPage = document.querySelector(".selection").value;
    let textarea = document.querySelector(".textarea");
    

    if (selectPage == "Home") {
      textarea.value = localStorage.getItem("indexContent");
    }
    if (selectPage == "About") {
      textarea.value = localStorage.getItem("aboutContent");
    }

    if (selectPage == "Department of Wildlife Conservation") {
      textarea.value = localStorage.getItem("conservationContent");
    }

    if (selectPage == "Sri Lankan Leopard") {
      textarea.value = localStorage.getItem("leopardContent");
    }

    if (selectPage == "Animals In Sri Lanka") {
      textarea.value = localStorage.getItem("animalsContent");
    }

    if (selectPage == "Yala National Park") {
      textarea.value = localStorage.getItem("yalaContent");
    } else {
      console.log("something went wrong");
    }

    if (selectPage == "Wilpattu National Park") {
      textarea.value = localStorage.getItem("wilpattuContent");
    }

    
  });

const editPageButton = document.getElementById("save");

if (editPageButton) {
  editPageButton.addEventListener("click", function (e) {
    e.preventDefault();

    const selectPage = document.querySelector(".selection").value;
    const textareaValue = document.querySelector(".textarea").value;

    if (selectPage && textareaValue) {
      if (selectPage == "Home") {
        localStorage.setItem("indexContent", textareaValue);
      }

      if (selectPage == "About") {
        localStorage.setItem("aboutContent", textareaValue);
      }

      if (selectPage == "Department of Wildlife Conservation") {
        localStorage.setItem("conservationContent", textareaValue);
      }

      if (selectPage == "Sri Lankan Leopard") {
        localStorage.setItem("leopardContent", textareaValue);
      }

      if (selectPage == "Animals In Sri Lanka") {
        localStorage.setItem("animalsContent", textareaValue);
      }

      if (selectPage == "Yala National Park") {
        localStorage.setItem("yalaContent", textareaValue);
      }

      if (selectPage == "Wilpattu National Park") {
        localStorage.setItem("wilpattuContent", textareaValue);
      }

      
      alert("Data saved to local storage!");
    } else {
      console.log(
        "Error: Something went wrong. Make sure both page and textarea have values."
      );
    }
  });
}