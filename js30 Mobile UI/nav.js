
                         //get class All
  const imageContent = document.querySelectorAll(".image");//รูปภาพ
  const liItems = document.querySelectorAll("nav ul li");//navbar items

   
                     //เปลี่ยนรูป
  function hideContent() {
    imageContent.forEach((content) => content.classList.remove("image"));
  }
                    //เปลี่ยนสี nav
  function hideAllContent() {
    imageContent.forEach((item) => item.classList.remove("active"));
  }


  //SHOW ON THE PAGE
  function run() {
                       //loop foreach
  liItems.forEach((item, idx) => {
                         // click  navbar
    item.addEventListener("click", () => {
      hideContent();
      hideAllContent();

      item.classList.add("active");//show color with navbar
      imageContent[idx].classList.add("image");//show image
    });
  });
  }
  run();

