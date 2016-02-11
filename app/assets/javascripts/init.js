if(window.PokemonApp === undefined){
	window.PokemonApp = {};
}



$(function(){

	$('.js-show-pokemon').click(function(){
		var uri = $(this).data('pokemon-uri');
		var pokemon = new PokemonApp.Pokemon(uri);
		pokemon.fetchPokemon();
		$('.modal').modal('show');
	});

	$('.close').click(function(){
		$('.picture, .height, .name, .weight').empty();
	});

	$('ul').on('click', 'li', function (){})

});