window.onload = () => {
  // creat data Quiz!!!
  const quizData = [
    {
      question: "ทีมทีได้เเชมป์ PBWC2019 ของไทยคือทีม ?",
      A: "Signature Gaming",
      B: "Gz-Gaming",
      C: "Neolution E-sport",
      D: "AttackAllAround",
      Answer: "AttackAllAround",
    },
    {
      question: "ทีม Varolant ที่ได้ไปเบอร์ลินปี 2021 ?",
      A: "Sharper Esport",
      B: "AttackAllAround",
      C: "Fullsense",
      D: "Made in Thailand",
      Answer: "Fullsense",
    },
    {
      question: "ทีม GTA-ESPORT ที่ได้เเชมป์ปี 2021",
      A: "Over",
      B: "DooWhite",
      C: "SomeDay",
      D: "Redsantos",
      Answer: "DooWhite",
    },
    {
      question: "ทีมที่ได้เเชมป์ Dota TI10 ปี 2021",
      A: "Team Spirit",
      B: "OG",
      C: "PSG.LGD",
      D: "EVIL GENIUSES",
      Answer: "Team Spirit",
    },
  ];

  const ask = document.getElementById("askker"); //ask container Element
  const ansEle = document.querySelectorAll(".ans"); //answer dropdown
  const askEle = document.getElementById("ask"); //ask header quiestion

  // text element
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");

  const btn = document.getElementById("submit"); //submit BTN

  let currentAsk = 0; //คำถามเริ่ม
  
  loadAsk(); //โหลดคำถาม
  
  function loadAsk() {
      const currentData = quizData[currentAsk]; //ดึงคำถามจาก quizData โดย ให้ currentAsk เป็น array ที่เพิ่มขึ้น
      
    //show quiestion
    askEle.innerText = currentData.question; //เเสดงหัวข้อคำถาม

    //show answer
    //โชว์ ตัวเลือกโดยดึงจาก array ที่อยู่ใน quizData
    a_text.innerText = currentData.A;
    b_text.innerText = currentData.B;
    c_text.innerText = currentData.C;
    d_text.innerText = currentData.D;
}

  function decreaseSelect() {
      //loop check
    ansEle.forEach((ans) => (ans.checked = false));
}

//get correc with score
function getCorrect() {
    let correct; //set คำตอบ
    
    ansEle.forEach((ans) => {
        if (ans.checked) {
            //เมื่อ คำตอบมีการติกเเล้ว
            correct = ans.id; //ให้มีการนับคำตอบที่ทำไป
        }
    });
    
    return correct; // ส่งคำตอบที่ถูกไปยังฟังก์ชัน
}

let rating = 0; //คะเเนนเริ่มต้น
  //Add Event Click
  btn.addEventListener("click", () => {
    const correct = getCorrect(); //เมื่อคลิกเรียกใช้ function getCorrect

    if (correct) {
      //เมื่อมีการกดSends
      if (correct === quizData[currentAsk].Answer) {
        //ถ้าค่าที่ติกเเละค่าที่อยู่ใน dataนั้นตรงกัน
        rating++; //ให้เพิ่มคะเเนนครั่งละ 1
      }

      currentAsk++; //เปลี่ยคำถามไปยังข้อต่อไป

      if (currentAsk < quizData.length) {
        //ถ้ายังทำไม่เสร็จ
        loadAsk(); //ให้เรียกใช้ function loadAsk เพื่อโหลดคำถามใหม่
      } else {
        // เมื่อทำเสร็จ ให้เเสดงค่าตามcode ด้านล่าง
        ask.innerHTML = ` 
        <h2>Your Welcome in the Ask Again : ${rating} : ${quizData.length} Ask</>
            
            <button onclick="location.reload()">Again</button>
            `;
        // เมื่อคลิก Again เเล้วจะโหลดคำถามขึ้นมาใหม่
      }
    }
  });
};
