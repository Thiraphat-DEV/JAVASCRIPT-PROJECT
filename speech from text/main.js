//running to coded HAHAHA

window.onload = () => {

  const msg = new SpeechSynthesisUtterance();

  const imgs = document.getElementsByTagName("img")
  
  function Onvoice() {
    const voice = speechSynthesis.getVoices();
    const ThVoice = voice.find((voice) => voice.lang === "th-TH");
    msg.voice = ThVoice;
  }
  function Onclick(e) {
      // const element = array[index];
      for (let i = 0; i < 7; i++) {
        msg.text = imgs[i].getAttribute("alt")
        speechSynthesis.speak(msg);
        console.log(e.target);
      }
      
    }
    speechSynthesis.addEventListener("voiceschanged", Onvoice);
    
    const imgELem = Array.from(document.querySelectorAll("img"));
    //   console.log(imgELem);
    imgELem.forEach((imgElems) => imgElems.addEventListener("click", Onclick));
    
  }

