$(document).ready(function () {

    //Slider

    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            responsive: true
        });
    }

    //Posts

    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Titulo 1',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odio nihil iste itaque! Impedit est quaerat quae, deserunt voluptatem vitae officia modi, quidem alias saepe ipsum porro neque fugit recusandae.'
            },
            {
                title: 'Titulo 2',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odio nihil iste itaque! Impedit est quaerat quae, deserunt voluptatem vitae officia modi, quidem alias saepe ipsum porro neque fugit recusandae.'
            },
            {
                title: 'Titulo 3',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odio nihil iste itaque! Impedit est quaerat quae, deserunt voluptatem vitae officia modi, quidem alias saepe ipsum porro neque fugit recusandae.'
            },
            {
                title: 'Titulo 4',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odio nihil iste itaque! Impedit est quaerat quae, deserunt voluptatem vitae officia modi, quidem alias saepe ipsum porro neque fugit recusandae.'
            },
            {
                title: 'Titulo 5',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odio nihil iste itaque! Impedit est quaerat quae, deserunt voluptatem vitae officia modi, quidem alias saepe ipsum porro neque fugit recusandae.'
            },
        ]

        posts.forEach((item, index) => {
            var post = `
            <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
                ${item.content}
            </p>
            <a href="#" class="button-more">Leer más</a>
    
        </article>
            `;

            $('#posts').append(post);

        })
    }



    //Selector de tema

    var tema = $('#theme');

    $('#to-green').click(function () {
        tema.attr("href", "css/green.css");

    })

    $('#to-red').click(function () {
        tema.attr("href", "css/red.css");

    })

    $('#to-blue').click(function () {
        tema.attr("href", "css/blue.css");

    })

    //Scroll arriba

    $('.subir').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    })

    //Falso login

    $('#login form').submit(function () {
        var form_name = $('#form-name').val();

        localStorage.setItem("form-name", form_name);
    })

    var form_name = localStorage.getItem("form-name");

    if (form_name != null && form_name != undefined) {
        var about_parrafo = $('#about p');
        $('#about p').html('<br><strong> Bienvenido, ' + form_name + '</strong>');
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $('#login').hide();

        $('#logout').click(function () {
            localStorage.clear();
            location.reload();
        })
    }

    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();

    }

    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {
            var reloj = moment().format("LTS");

            $('#reloj').html(reloj);
        }, 1000);



    }

    //Validación

    if (window.location.href.indexOf('contact') > -1) {

        $('form input[name="birthdate"').datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });

    }

});