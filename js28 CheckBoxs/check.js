// js logic checked reverse
() => {
  //get Element && id
  const nice = document.getElementById("nice");
  const books = document.getElementById("books");
  const wrap = document.getElementById("wrap");
  const toggles = document.querySelectorAll(".toggle");

  function tickTodo(tickOne) {
    //checked swop button onchange
    if (nice.checked && books.checked && wrap.checked) {
      if (nice === tickOne) {
        wrap.checked = false;
      }
      if (books === tickOne) {
        nice.checked = false;
      }
      if (wrap === tickOne) {
        books.checked = false;
      }
    }
  }

  function run() {
    toggles.forEach((toggle) => {
      toggle.addEventListener("change", (e) => {
        //เมื่อมีการแปลี่ยนเเปลงของปุ่มกด โดยดึงจาก e property ที่มีการกด
        tickTodo(e.target);
      });
    });
  }
  run();
};
