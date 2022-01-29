var prix = 0;
var secondes = 0;
var paris = null;
var isPlay = true;
var prixMax = 20;

$('document').ready(function(){
	
	$('.prixMax').html(prixMax);
	
	$('#commencer').click(function() {
		
		isPlay = true;
		secondes = 30;
		$('.chrono').html(secondes);
		$('.secondes').html('Secondes');
		prix = Math.floor(Math.random() * prixMax);
		$('#paris').css({'visibility': 'visible', 'opacity': '1'});
		setTimeout(function() {$('#nombre').focus()}, 100);
		$('#nombre').val('');
		
		var chrono = setInterval(function(){
		if (secondes == 0) {
			isPlay = false;
			clearInterval(chrono);
			$('.reponse').html('Perdu !');
			$('#paris').css({'visibility': 'hidden', 'opacity': '0'});
		}
		else if (isPlay) {
			secondes--;
			$('.chrono').html(secondes);
			if (secondes == 1) {
				$('.secondes').html('Seconde');
			}
		}
		else {
			clearInterval(chrono);
			$('#paris').css({'visibility': 'hidden', 'opacity': '0'});
		}
		}, 1000);
	});
});

