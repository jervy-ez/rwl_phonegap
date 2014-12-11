$(document).ready(function() {
	
	$.each(json, function(idx, value) {
		$('ul.data-list').append('<li class="ui-li-has-alt ui-li-has-thumb" ><a href="#purchase" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn list-item">' +
    	'<img src="'+value.photo+'" />' +
    	'<h2>'+value.title+'</h2>' +
    	'<p>'+value.tagName+'</p></a></li>');
	});
    
});

//TEST CODE:
/*
var getFiles =	function(){
		
		//CREATE A DIRECTORY RECURSEVLY
		var dir = new DirManager(); // Initialize a Folder manager
        dir.create_r('app_resource_rwl/data');
		
        // download a file from a remote location and store it localy
        var file = new FileManager();       
        file.download_file('https://resultswithlucy.spinmeaweb.co.uk/json-phonegap/data/session.js','app_resource_rwl/data/','session.js');
}

navigator.splashscreen.hide();
document.addEventListener('deviceready', getFiles, false);
*/