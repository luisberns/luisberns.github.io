var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="white-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><a href="#" class="contact-email" class="contact-url"><img src="#" class="contact-img"></img><span class="white-text">%data%</span></li>';
var HTMLlinkedin = '<li class="flex-item"><a href="#" class="contact-linkedin" class="contact-url"><img src="#" class="contact-img"></img><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><a href="#" class="contact-github" class="contact-url"><img src="#" class="contact-img"></img><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><a href="#" class="contact-url"><img src="#" class="contact-img"></img><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><a href="#" class="contact-location"><img src="#" class="contact-img"></img><span class="white-text">%data%</span></li>';

var HTMLbiopic = '<div class="biopic-container"><img src="%data%" class="biopic"></div>';
var HTMLwelcomeMsg = '<br><div class="welcome-message">%data%</div><br>';

var HTMLskillsStart = '<div id="skills-entry"><ul id="skills" class="flex-column"></ul></div>';
var HTMLskillsTitle = '<br><h3 id="skills-h3">Skills at a Glance:</h3>';
var HTMLskills = '<li class="flex-item skill-item"><div class="white-text skill-title">%data%</div>';
var HTMLskillsValue = '<div class="skill-value"><div class="skill-range"></div></div></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<div class="work-item"><br><h3 class="title-work">%data%';
var HTMLworkTitle = ' - %data%</h3>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p class="work-paragraph">%data%</p>';
var HTMLworkOrderedTitle = '<ul class="ordered-list"></ul></div>';
var HTMLworkBulletPoints = '<li>%data%</li>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<h3 class="title-project">%data%</h3>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p class="project-paragraph">%data%</p>';
var HTMLprojectImage = '<div class="project-img-container"><img src="%data%" class="project-img"></div>';
var HTMLprojectURL = '<a href="#" class="project-link">%data%</a>';
var HTMLprojectOrdered = '<ul class="ordered-list"></ul>';
var HTMLprojectBullets = '<li>%data%</li>';

var HTMLschoolStart = '<div class="education-entry">';
var HTMLschoolName = '<div><h3 class="title-education">%data%';
var HTMLschoolDegree = '  - %data%</h3>';
var HTMLschoolDates = '<div class="date-text">%data%</div></div><br>';
var HTMLschoolLocation = '<div class="location-education">%data%</div>';
var HTMLschoolMajor = '<div><em>Major: %data%</em></div>';

var HTMLonlineClasses = '<div class="online-entry"><h3 id="online-header">Online Classes</h3>';
var HTMLonlineTitle = '<div><h4 class="title-online">%data%';
var HTMLonlineSchool = ' - %data%</h4>';
var HTMLonlineDates = '<div class="date-text">%data%</div></div><br>';
var HTMLonlineURL = '<br><a href="#">%data%</a></div>';

var internationalizeButton = '<button>Internationalize</button>';
var FABbutton = '<img src="#" id="fab-image">';
var googleMap = '<div id="map"></div>';


/*Insert Google Maps API*/
var map;
var locations;

function initMap() {
  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {
    var locations = [];

    locations.push(bio.contacts[0].location[0]);

    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  function createMapMarker(placeData) {
    var lat = placeData.geometry.location.lat();
    var lon = placeData.geometry.location.lng();
    var name = placeData.formatted_address;
    var bounds = window.mapBounds;

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(marker.get('map'), marker);
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {
    var service = new google.maps.places.PlacesService(map);

      locations.forEach(function(place){
      var request = {
        query: place
      };

      service.textSearch(request, callback);
    });
  }

  window.mapBounds = new google.maps.LatLngBounds();

  locations = locationFinder();

  pinPoster(locations);
}

window.addEventListener('load', initMap);
window.addEventListener('resize', function(e) {
  map.fitBounds(mapBounds);
});
