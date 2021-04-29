(() => {
  //get ID
  const header = document.getElementById("header");
  const title = document.getElementById("title");
  const excerpt = document.getElementById("excerpt");
  const profile = document.getElementById("profile-img");
  const name = document.getElementById("name");
  const dates = document.getElementById("date");
  // get animation  bg and  text
  const animated_bg = document.querySelectorAll(".animated-bg");
  const animated_bg_text = document.querySelectorAll(".animated-bg-text");


//function get data All
  function getDataAll() {
    header.innerHTML =
      '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="" />';

    title.innerHTML = "HELLO MY THIRAPHAT CHORAKHE";
    excerpt.innerHTML =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi deleniti et ex quidem quos maiores dolores quis cum neque in. Laboriosam fugit molestiae, necessitatibus nesciunt ipsam vel nisi libero error dicta mollitia modi incidunt dolorem repellendus repellat voluptatibus vitae quae.";
      profile.innerHTML = '<img src="https://randomuser.me/api/portraits/men/90.jpg" alt="">'

      name.innerHTML = 'Thiraphat B.';
      dates.innerHTML = 'January, 8 2002';

      animated_bg.forEach((bg)=>{
        bg.classList.remove('animated-bg');
      })
      animated_bg_text.forEach((text)=>{
        text.classList.remove('animated-bg-text');
      })
  }

  
  function run() {
      
    setTimeout( getDataAll, 3000);

  }

  run();
})();
