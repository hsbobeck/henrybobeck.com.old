
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