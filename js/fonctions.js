var prix = 0;
var secondes = 0;
var paris = null;
var isPlay = true;
var prixMax = 20;

$('document').ready(function(){
	
	$('.prixMax').html(prixMax);
	
	$('#paris').submit(function(event) {
		if (isPlay) {
		paris = $('#nombre').val();
		
		if (paris == prix) {
			isPlay = false;
			$('.reponse').html('Gagné !');
		}
		else if (paris < prix) {
			$('.reponse').html('Plus grand !');
		}
		else {
			$('.reponse').html('Plus petit !');
		}
		
		$('#nombre').val('');
		}
		event.preventDefault();
	});
});

