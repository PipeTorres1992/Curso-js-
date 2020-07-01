$(document).ready(function () {
    if (window.location.href.indexOf('index') > -1) {


        //silder
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });
    }
    if (window.location.href.indexOf('index') > -1) {
        //post
        var posts = [{
                title: 'Prueba de titulo 1',
                date: 'publicado el dia ' + moment().date() + ' de ' + moment().format("MMM") + ' de ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequatur ipsum harum officiis repellendus placeat exercitationem quidem, accusamus, alias quas nobis odit ullam nisi est. Unde laboriosam quisquam non amet.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'publicado el dia ' + moment().date() + ' de ' + moment().format("MMM") + ' de ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequatur ipsum harum officiis repellendus placeat exercitationem quidem, accusamus, alias quas nobis odit ullam nisi est. Unde laboriosam quisquam non amet.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'publicado el dia ' + moment().date() + ' de ' + moment().format("MMM") + ' de ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequatur ipsum harum officiis repellendus placeat exercitationem quidem, accusamus, alias quas nobis odit ullam nisi est. Unde laboriosam quisquam non amet.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'publicado el dia ' + moment().date() + ' de ' + moment().format("MMM") + ' de ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequatur ipsum harum officiis repellendus placeat exercitationem quidem, accusamus, alias quas nobis odit ullam nisi est. Unde laboriosam quisquam non amet.'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'publicado el dia ' + moment().date() + ' de ' + moment().format("MMM") + ' de ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequatur ipsum harum officiis repellendus placeat exercitationem quidem, accusamus, alias quas nobis odit ullam nisi est. Unde laboriosam quisquam non amet.'
            }
        ];



        posts.forEach((item, index) => {
            var post = `<article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
                ${item.content}
            </p>
            <a href="#" class="button-more">Leer mas</a>
            </article>`;
            $("#posts").append(post);
        });
    }
    //selector de tema
    var theme = $("#theme");
    $("#to-green").click(function () {
        theme.attr("href", "css/green.css")
    });
    var theme = $("#theme");
    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css")
    });
    var theme = $("#theme");
    $("#to-red").click(function () {
        theme.attr("href", "css/red.css")
    });

    //scroll arriba de la weab

    $('.subir').click(function (e) {
        e.preventDefault();
        $('html', 'body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    // login falso

    $("#login form").submit(function () {
        var form_name = $("#form_name").val();
        var form_email = $("#form_email").val();
        var form_password = $("#form_password").val();

        localStorage.setItem("form_name", form_name);
        localStorage.setItem("form_email", form_email);
    });

    var form_name = localStorage.getItem("form_name");
    var form_email = localStorage.getItem("form_email");

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong> Bienvenido, " + form_name + "</strong>" + "<br><strong> Email: " + form_email + "</strong>");
        about_parrafo.append("<br><a href='#' id='logout'>cerrar sesion</a>");

        $("#login").hide();

        $("#logout").click(function () {

            localStorage.clear();

            location.reload();
        });
    }

    if (window.location.href.indexOf('about') > -1) {

        $("#acordeon").accordion();
    }

    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    }
    if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}
});