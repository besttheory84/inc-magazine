// This grabs the user's browser type
function get_browser(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return 'IE '+(tem[1]||'');
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return 'Opera '+tem[1];}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return M[0];
    }

// This grabs the user's browser version
function get_browser_version(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];                                                                                                                         
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1]||'');
        }
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return 'Opera '+tem[1];}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return M[1];
    }
	
var browser=get_browser();
var browser_version=get_browser_version();

// This is the timer function when 
var counter = 0;
var timer = null;		
function tictac(){
	counter++;
	$("#clock").html(counter);
}		
function reset() {
	clearInterval(timer);
	counter=0;
}
function startInterval() {
	timer= setInterval("tictac()", 1000);
}
function stopInterval() {
	clearInterval(timer);
}

// jQuery opens 
$(document).ready(function() {
	
		if($.cookie('email') !== undefined) {
		$('.email').val($.cookie('email'));
	}
	if($.cookie('first_name') !== undefined) {
		$('.first-name').val($.cookie('first_name'));
	}
	if($.cookie('last_name') !== undefined) {
		$('.last-name').val($.cookie('last_name'));
	}
	if($.cookie('company') !== undefined) {
		$('.company').val($.cookie('company'));
	}
	if($.cookie('phone') !== undefined) {
		$('.phone').val($.cookie('phone'));
	}
	var i = 1;
	$(".form label").each(function(index) {
		$(this).next("input[type=text]").andSelf().wrapAll('<div class="form-group group'+i+'" />');
		i++;
	});
		
	// This grabs the user's device type
	var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
	var isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
	var isBlackBerry = /blackberry/i.test(navigator.userAgent.toLowerCase());
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
	if (isiPad) {
		var device = "iPad";
	}
	else if (isiPhone) {
		var device = "iPhone";
	}
	else if (isBlackBerry) {
		var device = "Blackberry";
	}
	else if (isAndroid) {
		var device = "Android Device";
	}
	else if (isWindowsPhone) {
		var device = "Windows Phone";
	}
	else {
		var device = "Desktop";
	}
	
	$('#whichDevice, .whichDevice').val(browser+' '+browser_version+'/'+device);	
	$("#year").text((new Date).getFullYear());
	$('.form input[type=submit]').val('Contact me');
	$('input[type=text]').removeAttr('placeholder');
	
	$('.trigger').click(function() {
		var data = $(this).attr('data');
		var name = $(this).attr('alt');
		$('.loader').append('<iframe src="http://www.youtube.com/embed/' + data + '?autoplay=1&rel=0" alt="' + name + '" height="400" frameborder="0" allowfullscreen=""></iframe>');
		$('#VideoPlayed').val(name);
		$('.overlay').fadeIn(250);
	});
	
	$('.close').click(function() {
		$('.overlay').fadeOut(250, function() {
			$('.loader').html("");
		});
	});
	
	$("#DirectMailForm").submit(function() {
		var emailVal = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		var phoneVal = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
		var email = $('#DirectMailForm .email').val();
		var first_name = $('#DirectMailForm .first-name').val();
		var last_name = $('#DirectMailForm .last-name').val();
		var phone = $('#DirectMailForm .phone').val();
		var company = $('#DirectMailForm .company').val();
		$('input[type=text], select, input[type=tel], input[type=email]').each(function() {
			if($(this).hasClass('email') || $(this).hasClass('ref-email')) {
				if (!(emailVal.test($(this).val()))) {
					$(this).removeClass('correct').addClass('error');
				} else {
					$(this).removeClass('error').addClass('correct');	
				}					
			}
			else if($(this).hasClass('phone') || $(this).hasClass('ref-phone')) {
				if (!(phoneVal.test($(this).val()))) {
					$(this).removeClass('correct').addClass('error');
				} else {
					$(this).removeClass('error').addClass('correct');	
				}		
			}
			else if($(this).val() == "") {
				$(this).removeClass('correct').addClass('error')
			}
			else { 
				$(this).removeClass('error').addClass('correct')
			}
			
		});
		var errors = $('input.error').length;
		if(errors !== 0) {
			alert('Please fill out all required fields');
			return false;	
		}
		else {
			$.cookie('email', email, { path: '/', expires: 999999 });
			$.cookie('first_name', first_name, { path: '/', expires: 999999 });	
			$.cookie('last_name', last_name, { path: '/', expires: 999999 });	
			$.cookie('company', company, { path: '/', expires: 999999 });
			$.cookie('phone', phone, { path: '/', expires: 999999 });
		}
	});
    $('input[type=text], input[type=email], input[type=tel], select').blur(function () {
		var emailVal = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		var phoneVal = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
		var value = $(this).val();
		if($(this).hasClass('phone')) {
			if (!(phoneVal.test(value))) {
				$(this).removeClass('correct').addClass('error');
			} else {
				$(this).removeClass('error').addClass('correct');	
			}
		}
		else if($(this).hasClass('email')) {
			if (!(emailVal.test(value))) {
				$(this).removeClass('correct').addClass('error');
			} else {
				$(this).removeClass('error').addClass('correct');	
			}
		}
		else if(value == "") {
			$(this).removeClass('correct').addClass('error');	
		} 
		else {
			$(this).removeClass('error').addClass('correct');
		}
    });
	$("#videoForm").submit(function() {
		var time = $('#clock').html();
		$('#VideoTime').val(time+' - Inc');
	});

});