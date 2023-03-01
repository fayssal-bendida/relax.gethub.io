let stars1= document.getElementById('stars1');
let moon= document.getElementById('moon');
let mountains3= document.getElementById('mountains3');
let mountains4= document.getElementById('mountains4');
let river5= document.getElementById('river');
let boat= document.getElementById('boat');
let Fayssal = document.querySelector('.Fayssal');
window.onscroll=function(){
    let value=scrollY;
    stars1.style.left = value + 'px';    
    moon.style.top= value * 4 + 'px' ;
    mountains3.style.top= value * 2 +'px' ;
    mountains4.style.top= value * 11.5 + 'px' ;
    river5.style.top= value + 'px';
    boat.style.left= value * 3 + 'px';
    Fayssal.style.fontSize= value + 'px';
    if(scrollY>= 100 ) {
        Fayssal.style.fontSize= 100 + 'px';
        Fayssal.style.position= 'fixed' ;
        if(scrollY>= 500) {
            Fayssal.style.display= 'none' ;

        }else {
            Fayssal.style.display= 'block' ;
        }
        if(scrollY>= 150) {
        document.querySelector('.main').style.background= 'linear-gradient(hsl(313, 94%, 13%) ,#04c5d9)' ;
    }else{
        document.querySelector('.main').style.background= ' linear-gradient(hsl(313, 94%, 13%) ,#a82160)' ;


    }



        

    }
    
    

}





