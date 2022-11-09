let timer = document.querySelector("#timer")
let time = document.querySelector("#time")
let birthdate = document.querySelector("#enterBirthdate")
let startMeny = document.querySelector("#startMeny")

window.scrollTo({top: 0,left: 0,behavior: 'smooth'});
 birthdate.value = localStorage.getItem('birthdate')

if (birthdate.value) {
    run()
}
else {
    birthdate.addEventListener('keyup', (e) => e.key == "Enter" && run())
} 

function run() {
   
    let dbirthdate = new Date(birthdate.value + "T00:00:00.000");
    if (+dbirthdate) {
        localStorage.setItem('birthdate', birthdate.value);
        startMeny.remove()
        setInterval(() => {
            let str=""
            let l=1;
            for (const i of ((Date.now() - dbirthdate) / 31557600000).toFixed(10)) {
                str+=`<span class ="num n${l++}">${i}</span>`
            }
          
            time.innerHTML = str

        })
    }
}