
// Prevents buttons from being clicked multiple times within 0.6 seconds
var btns = document.getElementsByTagName('button');
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener('click', function(){
        disableButtons(true);
        setTimeout(function(){disableButtons(false);}, 600);
    });    
}
function disableButtons(state){
    for(var i=0;i<btns.length;i++){
        btns[i].disabled = !!state;
    }
}

// Automatically Updating Age Counter (UNUSED AT THE MOMENT)
//var birthDate = new Date(2000, 10, 3, 0, 0, 0, 0);
//var currentDate = new Date();
//var age = currentDate.getFullYear() - birthDate.getFullYear();
//var month = currentDate.getMonth() - birthDate.getMonth();
//var day = currentDate.getDay() - birthDate.getDay();
//
//if(month < 0 || month == 0 && day < 0) {
//    age--;
//}
//
//document.getElementById("age").innerHTML = age;