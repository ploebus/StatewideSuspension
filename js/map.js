 var map;
      
	  function initialize1(){
	   myDiv = document.getElementById('map_canvas');
	   myDiv.innerHTML = "<p>Hello</p>";
         
	  }
	  function initialize() {
        //hello
		var myOptions = {
          zoom: 8,
          center: new google.maps.LatLng(-34.397, 150.644),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map_canvas'),
            myOptions);
      }

      google.maps.event.addDomListener(window, 'load', initialize);