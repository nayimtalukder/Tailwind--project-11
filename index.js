

const x = document.getElementById("dropdown-menu");

const toggleBtn = ()=>{


    if(x.style.display == 'none' || x.style.display == ''){

        x.style.display = 'block'
    }
    else{

        x.style.display = 'none'
    }
};