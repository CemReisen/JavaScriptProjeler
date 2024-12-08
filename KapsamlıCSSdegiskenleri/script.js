
const inputs = document.querySelectorAll(`.controls input`);        //Girdi bilgilerini inputs değişkenine aktarmaya yarar

function handleUpdate(){
   
    const suffix = this.dataset.sizing || '';       //Suffix değişkenine  Html kodlarında tanımladığımız 'px' verisini aktardık
    
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);  //Css değişkenlerine inputs değişkeninden aldığımız verileri
                                                                                        //suffix değişkeninden gelen 'px' verisini ekleyerek aktardık
}

inputs.forEach(input => input.addEventListener('change',handleUpdate));         //Her değişiklikte handleUpdate fonksiyonunu çalıştırır
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));      //Her değişiklikte handleUpdate fonksiyonunu çalıştırır      
