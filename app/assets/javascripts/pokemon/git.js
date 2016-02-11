Pokemon.prototype.fetchDescription = function(){
	var that = this;
	var show = function(response){
		that.description = response.resource_uri;
		that.render();
	}
	$.get('http://pokeapi.co' + this.description);
}