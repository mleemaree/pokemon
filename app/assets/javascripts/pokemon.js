// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

(function () {
	var Pokemon = PokemonApp.Pokemon = function(uri){
		this.uri = uri;
		this._attrs = {};
		this.img = "";
		this.description = "";
	}

	Pokemon.prototype.fetchPokemon = function(){
			var that = this;
			var show = function(response){
				that._attrs = response;
				that.getImage();
			}
			var pokemon_info = $.get(this.uri);
			pokemon_info.done(show);
	}

	Pokemon.prototype.getImage = function(){
		var that = this;
		var getImage = function(response){
			that.img = response.image;
			that.render();
		}
		var sprite = $.get(this._attrs.sprites[0].resource_uri);
		sprite.done(getImage);
	}

	Pokemon.prototype.getDescription = function(){
		var that = this;
		this._attrs.desriptions.find(function(description){

		});
	}

	Pokemon.prototype.fetchDescription = function(){
		var that = this;
		var show = function(response){
			that.description = response.resource_uri;
			that.render();
		}
		$.get('http://pokeapi.co' + this.description);
	}

	Pokemon.prototype.render = function(){
		console.log(this._attrs);
		$('.name').html(this._attrs.name);
		$('.id').html('#' + this._attrs.national_id);
		$('.height').html(this._attrs.height);
		$('.weight').html(this._attrs.weight);
		var picture = $('<img>', { src: "http://pokeapi.co" + this.img });
		$('.picture').html(picture);
	}
})();