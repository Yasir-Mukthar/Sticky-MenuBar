


window.addEventListener('scroll',function(){

    var lis= document.getElementById("listis");
    if(window.pageYOffset >=130){
        
        lis.classList.add('sticky');
    } else{
        lis.classList.remove('sticky');
    }
   

});
