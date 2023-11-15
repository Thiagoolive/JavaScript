function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'manhã.jpg';
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.scr = 'tarde.jpg';
    } else {
        //Boa noite!
        img.src = 'noite.jpg';
    }


}
