document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Hai Meita Cantik.", "Selamat ulang tahun yaa :)", "Semoga panjang umur dan sehat selalu", "Terima kasih untuk segalanya dari apa yang sudah kamu usahakan sejauh ini", "Do'a terbaik untuk kamu sayang", "Baik-baik disana yaa", "Love you <3"];
    
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 200);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 1300);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });