$(document).ready(function() {
	/*var cookieName = 'beauty2018';
	var cookieOptions = {expires: 180, path: '/'};
	
	if ($.cookie(cookieName)) {
		$('a.rate-button').replaceWith('<p class="already-vote">Вы уже проголосовали</p>');
	}*/
	/*
	$(".rate-widget").each(function() {
			var rid = $(this).attr("id");
				rid = rid.replace("rate-node-", "");
				rid = rid.replace("-1-1", "");
			var kol = $(this).find(".rate-info").text();
			
			$(".svodka span.rate-"+rid).html("("+kol+")");
	});*/
	if (document.location.pathname == '/beauty') {
		$("a.rate-button").each(function() {
			if ($(this).text() == "Вы проголосовали") {
				$(this).replaceWith("<p style='font-weight: bold; color: #568524;'>Вы проголосовали</p>");
			}
		});
	}
	$('.download-link a').attr('target', '_blank');
	
	$(".menu2 li.parent > a").click(function() {
		$(this).parent().children("ul.sub").toggle();
		return false;
	});
	
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

/*    var url_menu = location.href;
    $(".catalog.left-menu ul li").each(function (i){
        var url = "http://belfert.by" + $(this).children().attr('href');
        if (url == url_menu){
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
        //console.log ("1: " + url + "2: " + url_menu);
    });*/
	if ($("form").is("#faq")) {
    $.validator.messages.required = "";
    $("#faq").validate({
        rules:{
            surname:{
                required: true,
                minlength: 1
            },
            name:{
                required: true,
                minlength: 1
            },
            second_name:{
                required: true,
                minlength: 1
            },
            email:{
                required: true,
                minlength: 1
            },
            mail_adr:{
                required: true,
                minlength: 1
            },
            message:{
                required: true,
                minlength: 1    
            },
            errorPlacement: function(error, element) {}
        }
    });
	}

    var $leftMenu = $("div.left-menu");
    if($leftMenu.length > 0) {
        if($leftMenu.find('li').length > 0) {
            $leftMenu.find('li a').each(function(key, value) {
                $(this).parent().removeClass('active');
                var href = $(this).attr('href');
                var expr = RegExp(href); 
                if (document.location.pathname != '/news/all' && document.location.pathname != '/be/news/all'){
                    if(expr.test(document.location.href)) {
                        $(this).parent().addClass('active');
                    } 
                } else if (document.location.pathname == href) {
                    $(this).parent().addClass('active');
                }
            });
        }
    }

    if($(".question").length) {
        $(".question").click(function() {

            $(this).siblings(".answer").slideToggle();
            $(this).toggleClass("show");
        })
    }

    $(".box h2").remove();

    if ($('.to-up').length) {
        var obj = $('.to-up');
        var offset = obj.offset();
        var topOffset = offset.top;

        $(window).scroll(function () {
            if ( $(window).scrollTop() > 250 ) {
                obj.fadeIn(500);
                var new_top = (0, $(window).scrollTop()-170);
                obj.stop(true,true).animate({
                    top:new_top});
            } else {
                obj.fadeOut(500);}

        });
        $('.to-up').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });

    }

    $(function() {
        $(".anyClass").jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            auto: 3000,
            speed: 1000
        });
    });

    $("#carousel").css("display", "block");

    $('#edit-mail').blur(function() {
        var url = location.href;
        if($(this).val() != '') {
            var pattern = /^([a-zA-Z0-9_\.-])+@[a-zA-Z0-9-]+\.([a-zA-Z]{2,4}\.)?[a-zA-Z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '1px solid #569b44'});
                $('#error-reg').text('');
            } else {
                if(url.indexOf('/en/') + 1) {
                    $(this).css({'border' : '1px solid #ff0000'});
                    $('#error-reg').text('Error! Incorrect email.');
                }else{
                    $(this).css({'border' : '1px solid #ff0000'});
                    $('#error-reg').text('Ошибка! Некорректный email.');
                }
            }
        } else {
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Empty email.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Пустой email.');
            }
        }
    });

    /*$('#edit-name').blur(function() {
        var url = location.href;
        if(/^[ \w-]{6,50}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error. Incorrect login!');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка. Некорректный логин!');
            }
        }
    });*/

    $('#edit-profile-nazv').blur(function() {
        var url = location.href;
        if(/^[ \w-]{6,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect name of the organization. Allowed letters of the English alphabet and Russian, as well as characters - and _.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректное название организации. Разрешены буквы русского и английского алфавита, цифры и символы - _.');
            }
        }
    });

    $('#edit-profile-phone').blur(function() {
        var url = location.href;
        if(/^[( )0-9-]{6,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect phone number. Allowed numbers and symbols - _ ( ).');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный номер телефона. Разрешены цифры и символы - _ ( ).');
            }
        }
    });

    $('#edit-profile-fax').blur(function() {
        var url = location.href;
        if(/^[( )0-9-]{6,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect fax number. Allowed numbers and symbols - _ ( ).');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный номер факса. Разрешены цифры и символы - _ ( ).');
            }
        }
    });

    $('#edit-profile-fname').blur(function() {
        var url = location.href;
        if(/^[a-z A-Zа-яА-я-]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect first name. Allowed letters of the Russian and English alphabet and the symbol -.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректная фамилия. Разрешены буквы русского и английского алфавита и символ -.');
            }
        }
    });

    $('#edit-profile-sname').blur(function() {
        var url = location.href;
        if(/^[a-z A-Zа-яА-я-]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect name and patronymic. Allowed letters of the Russian and English alphabet and the symbol -.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректное имя и отчество. Разрешены буквы русского и английского алфавита и символ -.');
            }
        }
    });

    $('#edit-profile-base').blur(function() {
        var url = location.href;
        if(/^[a-z A-Zа-яА-я0-9-]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect field "Acting on the basis". Allowed letters of the Russian and English alphabet and the symbol -.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректное поле "Действует на основании:". Разрешены буквы русского и английского алфавита и символ -.');
            }
        }
    });

    $('#edit-profile-order').blur(function() {
        var url = location.href;
        if(/^[a-z №A-Zа-яА-я0-9-]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect field "Order / Power of Attorney №:". Allowed letters of the Russian and English alphabet characters - №.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректное поле "Приказ/Доверенность №:". Разрешены буквы русского и английского алфавита, символы - №.');
            }
        }
    });

    $('#edit-profile-date').blur(function() {
        var url = location.href;
        if(/^[a-z \.A-Zа-яА-я0-9-]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect date. You can use letters, numbers, symbols-_. (Dot)');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректная дата. Разрешены буквы, цифры символы -_.(точка)');
            }
        }
    });

    $('#edit-profile-city').blur(function() {
        var url = location.href;
        if(/^[a-z A-Zа-яА-я-]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect city. You can use letters, and the symbol -.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный город. Разрешены буквы, и символ -.');
            }
        }
    });

    $('#edit-profile-adress').blur(function() {
        var url = location.href;
        if(/^[a-z \.A-Zа-яА-я0-9-]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect address. You can use letters, numbers and symbols -. (Dot)');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный адрес. Разрешены буквы, цифры и символы -.(точка)');
            }
        }
    });

    $('#edit-profile-index').blur(function() {
        var url = location.href;
        if(/^[0-9]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect index. Allowed only numbers.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный индекс. Разрешены только цифры.');
            }
        }
    });

    $('#edit-profile-u-city').blur(function() {
        var url = location.href;
        if(/^[a-z A-Zа-яА-я-]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect city. You can use letters, and the symbol -.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный город. Разрешены буквы, и символ -.');
            }
        }
    });

    $('#edit-profile-u-adress').blur(function() {
        var url = location.href;
        if(/^[a-z \.A-Zа-яА-я0-9-]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect address. You can use letters, numbers and symbols -. (Dot)');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный адрес. Разрешены буквы, цифры и символы -.(точка)');
            }
        }
    });

    $('#edit-profile-u-index').blur(function() {
        var url = location.href;
        if(/^[0-9]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect index. Allowed only numbers.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный индекс. Разрешены только цифры.');
            }
        }
    });

    $('#edit-profile-b-city').blur(function() {
        var url = location.href;
        if(/^[a-z A-Zа-яА-я-]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect city. You can use letters, and the symbol -.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный город. Разрешены буквы, и символ -.');
            }
        }
    });

    $('#edit-profile-b-adress').blur(function() {
        var url = location.href;
        if(/^[a-z \.A-Zа-яА-я0-9-]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect address. You can use letters, numbers and symbols -. (Dot)');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный адрес. Разрешены буквы, цифры и символы -.(точка)');
            }
        }
    });

    $('#edit-profile-b-index').blur(function() {
        var url = location.href;
        if(/^[0-9]{2,100}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect index. Allowed only numbers.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный индекс. Разрешены только цифры.');
            }
        }
    });

    $('#edit-profile-rs').blur(function() {
        var url = location.href;
        if(/^[0-9]{13,13}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect account. Enter the 13-digit numbers.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный расчетный счет. Введите 13 цифр.');
            }
        }
    });

    $('#edit-profile-unp').blur(function() {
        var url = location.href;
        if(/^[0-9]{2,50}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect UNP. Allowed only numbers.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный УНП. Разрешены только цифры.');
            }
        }
    });

    $('#edit-profile-okpo').blur(function() {
        var url = location.href;
        if(/^[0-9]{2,50}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect OKPO. Allowed only numbers.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный ОКПО. Разрешены только цифры.');
            }
        }
    });

    $('#edit-profile-bik').blur(function() {
        var url = location.href;
        if(/^[0-9]{2,50}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect BIK. Allowed only numbers.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный БИК. Разрешены только цифры.');
            }
        }
    });

    $('#edit-profile-kode-bank').blur(function() {
        var url = location.href;
        if(/^[0-9]{3,50}$/i.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#error-reg').text('');
        }else{
            if(url.indexOf('/en/') + 1) {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Error! Incorrect code bank. Allowed only numbers.');
            }else{
                $(this).css({'border' : '1px solid #ff0000'});
                $('#error-reg').text('Ошибка! Некорректный код банка. Разрешены только цифры.');
            }
        }
    });

    Modernizr.load([
        // Presentational polyfills
        {
            // Logical list of things we would normally need
            test : Modernizr.borderradius,
            // Modernizr.load loads css and javascript by default
            nope : ['http://belfert.by/sites/all/themes/jl/js/PIE_IE678.js'],
            callback: function initPIE678() {
                var selectors = '#nav li.first, .top-header, .main-wrapper, #nav, .top-banner .slogan, #footer, .incart, .blue-button, .green-button, .popup-wrapper ';
                jQuery(selectors).each(function() {
                    PIE.attach(this);
                });

                if ($(".busket").length) {
                    $(".busket tbody td:last-child").addClass("last");
                }

            }
        },
        {
            // Logical list of things we would normally need
            test : Modernizr.cssgradients,
            // Modernizr.load loads css and javascript by default
            nope : ['http://belfert.by/sites/all/themes/jl/js/PIE_IE9.js'],
            callback: function() {
                if( $.support.opacity ) {
                    function initPIE9() {
                        var selectors = '.top-header, #nav, input[type="text"], .incart, .blue-button, .green-button ';
                        jQuery(selectors).each(function() {
                            PIE.attach(this);
                        });
                    } initPIE9();
                }
            }
        },
        {
            // Logical list of things we would normally need
            test : Modernizr.csscolumns,
            // Modernizr.load loads css and javascript by default
            nope: ["http://belfert.by/sites/all/themes/jl/js/autocolumnlist.js"],
            complete: function() {
                if ($(".wrapper-form").length) {
                    $(".wrapper-form:first-child").autocolumnlist({
                        columns:2
                    })
                }
            }
        },
        {
            test : Modernizr.input.placeholder,
            // Modernizr.load loads css and javascript by default
            nope : ['http://belfert.by/sites/all/themes/jl/js/jquery.placeholder.js'],
            callback: function () {
                jQuery('input[placeholder], textarea[placeholder]').placeholder();
            }
        }
    ]);
	
	if (document.location.pathname == '/beauty') {
		$("a.rate-button").click(function() {
			var rating = $(this).parent(".rate-widget").parent(".content").find("p.vote-result").text();
			rating = rating.replace("Голосов: ", "");
			rating++;
			rating = "Голосов: " + rating;
			$(this).parent(".rate-widget").parent(".content").find("p.vote-result").text(rating);
		});
		Drupal.behaviors.golos = function(context){
			$("a.rate-button").each(function() {
				if ($(this).text() == "Вы проголосовали") {
					$(this).replaceWith("<p style='font-weight: bold; color: #568524;'>Вы проголосовали</p>");
				}
			});
		}
		
		
	/*
		$('a.rate-button').replaceWith('<p class="already-vote">Вы уже проголосовали</p>');
		$.cookie(cookieName, 'yes', cookieOptions);
		
		$(".rate-widget").each(function() {
			var rid = $(this).attr("id");
				rid = rid.replace("rate-node-", "");
				rid = rid.replace("-1-1", "");
			var kol = $(this).find(".rate-info").text();
			
			$(".svodka span.rate-"+rid).html("("+kol+")");
		});*/

	}
});
    /**************************************************/

function trim(s)
{
    return rtrim(ltrim(s));
}

function ltrim(s)
{
    return s.replace(/^\s+/, '');
}

function rtrim(s)
{
    return s.replace(/\s+$/, '');
}