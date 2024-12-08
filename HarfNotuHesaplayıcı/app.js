
function notHesapla(){
    var vize        = Number(document.getElementById("sayi1").value);
    var final       = Number(document.getElementById("sayi2").value);
    var harfNotu;
    var harfNotElement = document.getElementById("harfNot");

     // Animasyon sınıflarını temizle
     harfNotElement.classList.remove("pulseA", "pulseB", "pulseC", "pulseD", "pulseF");

    
    if(vize == "" || final == ""){
        alert("Vize notunu girmediniz !!!!");
    }
    else if(vize<0 || vize>100 || final<0 || final>100){
        alert("Vize veya Final notunu hatalı girdiniz kontrol edini<!!!!");
    }
    else{
        var not = Number(((vize*0.4)+(final*0.6)));
        document.getElementById("sonuc").innerHTML = not;
                
        if(not>=90){
            harfNotu = "A (Mükemmel)";
            document.getElementById("harfNot").innerHTML = harfNotu;
            harfNotElement.style.color = "green";
            harfNotElement.classList.add("pulseA");  
        }
        else if(not>=85 && not<=89){
            harfNotu = "B (İyi)";
            document.getElementById("harfNot").innerHTML = harfNotu;
            harfNotElement.style.color= "blue";
            harfNotElement.classList.add("pulseB");
        }
        else if(not>=75 && not<=84){
            harfNotu = "C (Ortalama)";
            document.getElementById("harfNot").innerHTML = harfNotu;
            harfNotElement.style.color = "orange";
            harfNotElement.classList.add("pulseC");
          
        }
        else if(not>=70 && not<=74){
            harfNotu = "D (Geçer)";
            document.getElementById("harfNot").innerHTML = harfNotu;
            harfNotElement.style.color = "red";
            harfNotElement.classList.add("pulseD")
            
        }
        else if(not>=60 && not<=69){
            harfNotu = "E";
            document.getElementById("harfNot").innerHTML = harfNotu;
            harfNotElement.style.color = "gray";
            harfNotElement.classList.add("pulseE");
            
            
        }
        else if(not>=50 && not<=59){
            harfNotu = "FX (Başarısız)";
            document.getElementById("harfNot").innerHTML = harfNotu;
            harfNotElement.style.color = "darkred";
            harfNotElement.classList.add("pulseFX");
            
        }
        else{
            harfNotu = "F (Kaldı)";
            document.getElementById("harfNot").innerHTML = harfNotu;
            document.getElementById("harfNot").classList.remove("pulse");
            harfNotElement.style.color = "#424242";
            harfNotElement.classList.add("pulseF");
            
        }
    }
}


