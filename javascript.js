let conhecimento = document.getElementById('conhecimentos');
let projeto = document.getElementById('projetos');
let projeto2 = document.getElementById('projetos2');
let projeto3 = document.getElementById('projetos3');

function knowlegdepicture() {
    document.getElementsByClassName('conhecimento')[0].style.backgroundImage = "url('image/conhecimento-opacidade.png')";
    document.getElementsByClassName('conhecimento')[0].innerHTML = "<h1>Knowlegde<h1><div class='conhe'></div>";
    document.getElementsByClassName('conhe')[0].innerHTML = "<img src='image/icones.png'>";
}

function knowlegdepictureout() {
    document.getElementsByClassName('conhecimento')[0].style.backgroundImage = "url('image/conhecimento.jpg')";
    document.getElementsByClassName('conhecimento')[0].innerHTML = '';

}

function project1() {
    document.getElementsByClassName('projeto')[0].style.backgroundImage = "url('image/sitedental-opacidade.png')";
    document.getElementsByClassName('projeto')[0].innerHTML = "<h1>Dentist clinic study project</h1>";
}

function project1out(){
    document.getElementsByClassName('projeto')[0].style.backgroundImage = "url('image/sitedental.png')";
    document.getElementsByClassName('projeto')[0].innerHTML = '';
}

function project2() {
    document.getElementsByClassName('projeto2')[0].style.backgroundImage = "url('image/projeto2-opacidade.png')";
    document.getElementsByClassName('projeto2')[0].innerHTML = "<a href='https://bauhaussistemas.com.br/' target='_blank'><h1>Technology company in Brazil</h1></a>";

}

function project2out(){
    document.getElementsByClassName('projeto2')[0].style.backgroundImage = "url('image/projeto2.jpg')";
    document.getElementsByClassName('projeto2')[0].innerHTML = '';
}

function project3() {
    document.getElementsByClassName('projeto3')[0].style.backgroundImage = "url('image/projeto3-opacidade.png')";
    document.getElementsByClassName('projeto3')[0].innerHTML = "<h1>Scuba club study project</h1>";
}

function project3out(){
    document.getElementsByClassName('projeto3')[0].style.backgroundImage = "url('image/projeto3.png')";
    document.getElementsByClassName('projeto3')[0].innerHTML = '';
}


conhecimento.addEventListener('mouseover',knowlegdepicture); 
conhecimento.addEventListener('mouseout',knowlegdepictureout);
projeto.addEventListener('mouseover',project1);
projeto.addEventListener('mouseout',project1out);
projeto2.addEventListener('mouseover',project2);
projeto2.addEventListener('mouseout',project2out);
projeto3.addEventListener('mouseover',project3);
projeto3.addEventListener('mouseout',project3out);

                                                              
