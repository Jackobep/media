let HOME = document.querySelector("#HOME");
let ABOUT = document.querySelector("#ABOUT");
let PRINTS = document.querySelector("#PRINTS");
let CONTACT = document.querySelector('#CONTACT');

/*HOME.addEventListener('mouseover', function())
{
x.style.color = "#000986";

}

HOME.aeventTarget('mouseout', function())
{
x.style.color = "#000000";


}
let animation = (x) => {
x.style.color = "#000986";

}*/








document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.x');
    
    link.addEventListener('mouseover', function() {
        document.querySelector('.mouseove');
        link.style.transform = 'scale(1.1)';
        link.style.color = "rgb(69, 90, 48)";
    });
    link.addEventListener('mouseout', function() {
        link.style.transform = 'scale(1)';
        document.querySelector('.x');
        link.style.color = "rgb(255, 255, 255)";
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.info1');
    
    link.addEventListener('mouseover', function() {
        document.querySelector('.info1');
        link.style.transform = 'scale(1.1)';
        link.style.color = "rgb(69, 90, 48)";
    });
    link.addEventListener('mouseout', function() {
        link.style.transform = 'scale(1)';
        document.querySelector('.info1');
        link.style.color = "rgb(255, 255, 255)";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.info2');
    
    link.addEventListener('mouseover', function() {
        document.querySelector('.info2');
        link.style.transform = 'scale(1.1)';
        link.style.color = "rgb(69, 90, 48)";
    });
    link.addEventListener('mouseout', function() {
        link.style.transform = 'scale(1)';
        document.querySelector('.info2');
        link.style.color = "rgb(255, 255, 255)";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.info3');
    
    link.addEventListener('mouseover', function() {
        document.querySelector('.info3');
        link.style.transform = 'scale(1.1)';
        link.style.color = "rgb(69, 90, 48)";
    });
    link.addEventListener('mouseout', function() {
        link.style.transform = 'scale(1)';
        document.querySelector('.info3');
        link.style.color = "rgb(255, 255, 255)";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.info4');
    
    link.addEventListener('mouseover', function() {
        document.querySelector('.info4');
        link.style.transform = 'scale(1.1)';
        link.style.color = "rgb(69, 90, 48)";
    });
    link.addEventListener('mouseout', function() {
        link.style.transform = 'scale(1)';
        document.querySelector('.info4');
        link.style.color = "rgb(255, 255, 255)";
    });
});

const collapsible = document.querySelectorAll(".collapsible");
collapsible.forEach((item) => {
    setTimeout(() => { 
    item.addEventListener("click", function(){
        this.classList.toggle("collapsible--expanded");
    });
}, 300 );
});