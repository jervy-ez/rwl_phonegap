$.mobile.transitionFallbacks.slideout = "none"

$(document).ready(function() {
        
	$( document ).on( "vclick", "a.workouts", function() {        
		window.location = 'workouts.html';
	});
    
    $( document ).on( "vclick", "a.eatwell", function() {        
		window.location = 'eatwell.html';
	});
    
    
        
    
    
    
    
    
});

/*
// call once start to change page
$(document).on( "pagechange", function( event ) { });
*/

/*
// on particular page load function call
$(document).on('pageinit', '#workouts' ,function(){    });


// on particular page load function call
$(document).on('pageinit', '#home' ,function(){ });
*/



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

document.addEventListener('deviceready', getFiles, false);
*/



// 100% working but the url in RWL has bug wokring @ phonegap
/*
var user_name = "jervy_impact";
var password = "g1H8JMlqn6hqToEO3mlV";

$.ajax({
    type: 'GET',    
    url: "http://phonegap.spinmeaweb.co.uk/json-user.php",
    //url: "https://resultswithlucy.spinmeaweb.co.uk/json-user.php",
    dataType: 'json',
    cache: false,
    crossDomain:true,
     data: {
        "user_name": user_name,
        "password": password
    },
    success: function(data){
				
				$.each(data, function(index, value) {
                    alert(value.title);
			    
			    });
			},
			error: function(error){
				alert('error ajax');
			}
}); // Ajax Call
*/
// 100% working but the url in RWL has bug wokring @ phonegap

