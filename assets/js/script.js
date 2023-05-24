const mode = document.getElementById('mode_icon');


mode.addEventListener('click', () => {

    const form = document.getElementById('login_form');
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
});


/* Experimento 

Colocar validações futuras

https://www.youtube.com/watch?v=qKWApkuhNu8&ab_channel=LarissaKich
https://www.youtube.com/watch?v=LOjQYWRJmbk&t=1s&ab_channel=LarissaKich

*/



























