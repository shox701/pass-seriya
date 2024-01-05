var elSeriya = document.querySelector('.seriya')
var elRaqam = document.querySelector('.raqam')
var elSeriyaLab = document.querySelector('.seriya1')
var elRaqamLab = document.querySelector('.seriya2')

function fnPassport(event){
    event.preventDefault() 
    var seriya = elSeriya.value 
    var raqam = elRaqam.value
    if(seriya.length == 2 && seriya[0].toLowerCase() !== seriya[0 ] && seriya[1].toLowerCase() !== seriya[1]){
        elSeriya.style.background = 'green'
        elSeriyaLab.textContent = 'Passport seriyasi to`g`ri!'
    }else{
        elSeriya.style.background = 'red'
        elSeriyaLab.textContent = 'Passport seriyasini to`g`ri kiriting!'
    }
    
    if (raqam.length == 7 && raqam * 1 >= 0) {
        elRaqam.style.background = 'green'
        elRaqamLab.textContent = 'Passport raqami to`g`ri!'
    }else{
        elRaqam.style.background = 'red'
        elRaqamLab.textContent = 'Passport raqamini to`g`ri kiriting!'   
    }

}