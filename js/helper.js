// Helper file -- to keep things separate
/*
These strings to populate the page
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="sub-h1">%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="seaFoam-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="seaFoam-text">mobile</span><span class="white-text"><a href="tel:%data%">%data%</a></span></li>';
var HTMLemail = '<li class="flex-item"><span class="seaFoam-text">email</span><span class="white-text"><a href="mailto:%data%">%data%</a></span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="seaFoam-text">LinkedIn</span><span class="white-text"><a href="%data2%" target="_blank">%data%</a></span></li>';
var HTMLgithub = '<li class="flex-item"><span class="seaFoam-text">github</span><span class="white-text"><a href="%data2%" target="_blank">%data%</a></span></li>';
var HTMLbehance = '<li class="flex-item"><span class="seaFoam-text">Behance</span><span class="white-text"><a href="%data2%" target="_blank">%data%</a></span></li>';
var HTMLlocation = '<li class="flex-item"><span class="seaFoam-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<div class="introImg"><img src="%data%" class="biopic"></div>';
var HTMLwelcomeMsg = '<div class="introTxt"><span class="welcome-message">%data%</span></div>';

var HTMLpersonalStart = '<h3 id="personalH3">Click for Additional Info</h3>';
var HTMLpersonalInfo = '<div class="personalInfo">%data%</div>';
//var HTMLprsnlInfoBtn = '<button class="showInfo">View Personal Info</button>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance: <span class="sub-text">hover for more info</span></h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item">%data%</li>';

var HTMLtoolsStart = '<h3 id="toolsH3">Tools I Use:</h3><ul id="tools" class="flex-box"></ul> ';
var HTMLtools = '<li class="flex-item">%data%</li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescStart = '<ul class="%data%-job-list job-lists"></ul>'
var HTMLworkDescList = '<li class="job-item">%data%</li>'
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="%link%">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImgBlk = '<div class="imgRow"></div>';
var HTMLprojectImage = '<div class="imgContainer"><a href="#" data-featherlight="%dataLb%"><img src="%data%"></a><div class="projectCTA"><span>Click to View Larger Image</span></div></div>';

var HTMLsideProjectStart = '<div class="sideProject-entry"></div>';
var HTMLsideProjectTitle = '<a href="%link%">%data%</a>';
var HTMLsideProjectDates = '<div class="date-text">%data%</div>';
var HTMLsideProjectDescription = '<p><br>%data%</p>';
var HTMLsideProjectImage = '<div class="imgCntrFlex"><a href="#" data-featherlight="%dataLb%"><img src="%data%"></a><div class="projectCTA"><span>Click to View Larger Image</span></div></div>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = '&nbsp;-- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%&nbsp;</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<div class="emphasis dark-grey-txt"><br>Major: %data%</div>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#"> %data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%&nbsp;</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*
Use Jquery to layout anchor tags used with the lightbox plugin
  and show/hide "click" message
*/

$(document).ready(function() {
  var imgContainer = $('.imgContainer, .imgCntrFlex');

  // display and hide hidden div with click message
  imgContainer.hover(
    function() {
      $(this).find('.projectCTA').slideDown(200);
    }, function() {
      $(this).find('.projectCTA').slideUp(200);
    });

});

// Set up click handler for Personal Info
$(document).ready(function() {
  var prsnlHdr = $('#personalH3');
  var prsnlInfo = $('.personalInfo');

  prsnlHdr.on('click', function() {
    prsnlInfo.toggleClass('open');
  });
});

/*
Set Up the Google Map
*/
var map;    // declares a global map variable


/*
 initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name+" is a city I schooled and/or worked and lived in."
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!

      infoWindow.open(map,marker);


    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});