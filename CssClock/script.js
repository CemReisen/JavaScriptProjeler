

const secondHand                  = this.document.querySelector('.second-hand'); //Sınıfı second-hand olan html kodunu seçmemizi sağlar
const minHand                     = this.document.querySelector('.min-hand');    //Sınıfı min-hand olan html kodunu seçmemizi sağlar
const hourHand                    = this.document.querySelector('.hour-hand');   //Sınıfı hour-hand olan html kodunu seçmemizi sağlar   


function setDate(){
    const now                     = new Date();  

    const seconds                 = now.getSeconds();                   //Gerçek zamandan saniyeyi alır
    const secondsDegrees          = ((seconds / 60) * 360) + 90;        //Saniyeyinin saatteki açısını hesaplar
    secondHand.style.transform    = `rotate(${secondsDegrees}deg)`;     //secondHand değişkenini css kodu ile açısını ayarlar
    
                              
    const minutes                 = now.getMinutes();                   //Gerçek zamandan dakikayı alır
    const minutesDegrees          = ((minutes / 60) * 360) + 90;        //Dakikanın saatteki açısını hesaplar
    minHand.style.transform       = `rotate(${minutesDegrees})deg`;     //minHand değişkenini css kodu ile açısını ayarlar
    
    const hours                   = now.getHours();                     //Gerçek zamandan saati alır
    const hoursDegrees            = ((hours / 12) * 360) + 90;          //Saatin saatteki açısını hesaplar
    hourHand.style.transform      = `rotate(${hoursDegrees}deg)`;       //hourHand değişkenini css kodu ile açısını ayarlar
    
}

setInterval(setDate,1000); //Her 1000 milisaniyede bir setDate fonksiyonunu çalıştırır