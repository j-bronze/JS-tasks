

function Map(cities){
	this.cities = cities;
	this.cities.cityName = cities.cityName;
	this.cities.latitude = cities.latitude;
	this.cities.longitude = cities.longitude;

	this.showExtreme = function (userInput) {

    	const MAX_LATITUDE = 90;
			const MIN_LATITUDE = 0; // equator
			const MAX_LONGITUDE = 0; // primary meridian
			const MIN_LONGITUDE = -180;

			userInput = userInput.toLowerCase();
			var result;
			var answer = "!";
				
			if(userInput==='north'){//latitude must be max
					result = MIN_LATITUDE;
					for (var i = 0; i < cities.length; i++) {
						for (var latitude in cities[i]) {
			  			if (result < cities[i].latitude) {
			  					result = cities[i].latitude;
			   					answer = cities[i].cityName;
			 				}
						}
					}
			} else if(userInput==='south'){ //latitude must be min
					result = MAX_LATITUDE;
					for (var i = 0; i < cities.length; i++) {
						for (var cityName in cities[i]) {
			  			if (result > cities[i].latitude) {
			  					result = cities[i].latitude;
			   					answer = cities[i].cityName;
			 				}
						}
					}
			} else if(userInput==='east'){ //longitude must be min
					result = MAX_LONGITUDE;
					for (var i = 0; i < cities.length; i++) {
						for (var cityName in cities[i]) {
			  			if (result > cities[i].longitude) {
			  					result = cities[i].longitude;
			   					answer = cities[i].cityName;
			 				}
						}
					}
			} else if(userInput==='west'){//longitude must be max
					result = MIN_LONGITUDE;
					for (var i = 0; i < cities.length; i++) {
						for (var cityName in cities[i]) {
			  			if (result < cities[i].longitude) {
			  					result = cities[i].longitude;
			   					answer = cities[i].cityName;
			 				}
						}
					}
			} else {
					alert('Oops! Something went wrong.');
			}
			alert(answer);
			return answer;
  	};

	this.findCityByCoordinates =  function (lat, lng) {
			var flag = true;
 			for (var i = 0; i < cities.length; i++) {
					if ((cities[i].latitude == parseFloat(lat)) && (cities[i].longitude == parseFloat(lng))) {
							alert(cities[i].cityName);
							flag = false;
					} 
			}
			if(flag) {
							alert('Oops! Something went wrong.');
					}
		};

	this.showCitiesAbbreviations =  function (){
  		var strAbbr;
  		var unique;
			var arr = new Array;

			for (var i = 0; i < cities.length; i++) {
					arr[i] = cities[i].cityName.substr(-2);
			}

			function findUniqueStates(value, index, array) { 
    			return array.indexOf(value) === index;
			}
			
			unique = arr.filter(findUniqueStates);
			strAbbr = unique.join(" ");
			alert(strAbbr);

			return strAbbr;
  };

};

