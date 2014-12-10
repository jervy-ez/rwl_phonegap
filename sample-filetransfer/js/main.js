//TEST CODE:
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