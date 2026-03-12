var menu = document.getElementById("menu-burger-lateral")
var botao_fechar = document.getElementById("btn-fechar")
var botao_abrir = document.getElementById("menu-burger")
var escurecedor = document.getElementById("escurecedor")

botao_fechar.addEventListener('click', function() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        escurecedor.style.display = 'block';
    } else {
        menu.style.display = 'none';
        escurecedor.style.display = 'none';
    }
});

botao_abrir.addEventListener('click', function(){
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        escurecedor.style.display = 'block';
    } else {
        menu.style.display = 'none';
        escurecedor.style.display = 'none';
    }
});