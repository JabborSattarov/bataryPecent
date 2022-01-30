
navigator.getBattery().then(battery => {
    var bataryBg = document.querySelector(".bayeryBG");
    var percent = document.querySelector(".percent");
    var text = document.querySelector(".text");

    function upDateLevelInfo() {
        bataryBg.style.width = battery.level * 100 + "%";
        percent.innerHTML = battery.level * 100 + "%";

        if(battery.level * 100 < 20){
            bataryBg.style.background = 'red'
        }
        
        if (battery.level * 100 <= 10) {
            text.innerHTML = "iltimos Qurilmani zaryadlang";
        };
        if(battery.charging === true){
            text.innerHTML = "Quvatlanmoqda";
            bataryBg.style.background = 'green'
        }

        
        console.log(battery.level);
    }
        upDateLevelInfo()
})