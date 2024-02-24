function LOGIN(){
    let pass = document.getElementById("pass");
    let abc = document.getElementById("abc");
    let Val = pass.value;
    if(Val == "Siro2013Cga"){
        abc.innerText = "Şifre Doğru!";
        window.open("https://siraccga.github.io/MAIN/OK.html");
    }
    else {
        abc.innerText = "Şifre Hatalı!";
    }
}