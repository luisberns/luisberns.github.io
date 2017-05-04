/*Objects*/
var bio = {
	"name" : "Luis Guilherme Berns Silva",
	"role" : "UX Designer",
	"welcomeMessage" : "I'm passionate for User Experience and how technology can help people to achieve their goals and dreams.",
	"biopic" : "images/me.jpg",
	"contacts" : [
		{
			"mobile" : "+55 044 9 9972-5926",
			"email" : ["louisuntitled@gmail.com", "mailto:louisuntitled@gmail.com", "images/email.svg"],
			"github" : ["/louisberns", "https://github.com/louisberns", "images/github.svg"],
			"linkedin" : ["/in/louisberns", "http://www.linkedin.com/in/louisberns", "images/linkedin.svg"],
			"location" : ["São Paulo-PR - Brazil", "#map-div", "images/location.svg"]
		}
	],
	"skills" : [ "HTML/CSS", "Javascript/jQuery", "Project Management", "SCRUM", "Inkscape" ],
	"display" : function () {
		var formattedPic = HTMLbiopic.replace("%data%", bio.biopic);
		$("#header").append(formattedPic);

		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);

		var formattedName = HTMLheaderName.replace("%data%", bio.name.toUpperCase());
		$("#header").prepend(formattedName);

		bio.contacts.forEach(function(contact) {
			var insert = function (e, c) {
				$(e).attr("href", c);
			}
			/*var formattedMobile = HTMLmobile.replace("%data%", contact.mobile);*/
			var formattedEmail = HTMLemail.replace("%data%", contact.email[0]);
			var formattedlinkedin = HTMLlinkedin.replace("%data%", contact.linkedin[0]);
			var formattedGitHub = HTMLgithub.replace("%data%", contact.github[0]);
			var formattedLocation = HTMLlocation.replace("%data%", contact.location[0]);
			var displayContacts = formattedEmail + formattedlinkedin + formattedGitHub + formattedLocation;
			var email = contact.email[1];
			var linkedin = contact.linkedin[1];
			var github = contact.github[1];
			var location = contact.location[1];

			$("#top-contacts").append(displayContacts);
			$("#footer-contacts").append(displayContacts);

			insert(".contact-email", email);
			insert(".contact-linkedin", linkedin);
			insert(".contact-github", github);
			insert(".contact-location", location);

			$(".contact-url").attr("target", "_blank");

			var emailImage = contact.email[2];
			var linkedinImage = contact.linkedin[2];
			var githubImage = contact.github[2];
			var locationImage = contact.location[2];
			var displayImages = [emailImage, linkedinImage, githubImage, locationImage];

			$(".contact-email").children().attr("src", displayImages[0]);
			$(".contact-linkedin").children().attr("src", displayImages[1]);
			$(".contact-github").children().attr("src", displayImages[2]);
			$(".contact-location").children().attr("src", displayImages[3]);
		});
	}
};

var skills = {
	"skill": [
		{
			"title" : "HTML",
			"value" : 100
		},
		{
			"title" : "CSS",
			"value" : 100
		},
		{
			"title" : "JavaScript",
			"value" : 40
		},
		{
			"title" : "jQuery",
			"value" : 60
		},
		{
			"title" : "Git",
			"value" : 80
		},
		{
			"title" : "GruntJS",
			"value" : 40
		},
		{
			"title" : "Inkscape",
			"value" : 40
		},
		{
			"title" : "UX/UI",
			"value" : 80
		}
	],
	"display" : function () {
		$("#header").append(HTMLskillsStart);
		$("#skills-entry").prepend	(HTMLskillsTitle);
		var setValue = [];
		var skillValue = [];
		for (var n = 0; skills.skill.length > n; n++) {
			var formattedSkills = HTMLskills.replace("%data%", skills.skill[n].title);

			var valueID = "skill-value" + n.toString();
			skillValue.push(skills.skill[n].value);

			var displaySkills = formattedSkills + HTMLskillsValue;
			$("#skills:last").append(displaySkills);
			$(".skill-value:last").children().attr("id", valueID);

			setValue.push("#" + valueID.toString());
		}

		function animatedRanges (classValue, skillValue, interval) {
			var elem = $(classValue);
			var width = 0;
			var id = setInterval(frame, interval);
			function frame() {
				if (width >= skillValue) {
					clearInterval(id);
				} else {
					width++;
					elem.css("width", width + "%");
					if (width === 100) {
						$(classValue).css("border-radius", "10px");
					}
				}
			}
		}
		function callRanges () {
			for (var n = 0; setValue.length > n; n++) {
				var skillMove = (n + 1)*2;
				animatedRanges(setValue[n], skillValue[n], skillMove);
			}
		}
		callRanges();
	}
};

var education = {
	"schools" : [
		{
			"name" : "Udacity",
			"location" : "San Francisco-CA, USA",
			"degree" : "Nanodegree",
			"majors" : ["Front-end Developer"],
			"dates" : "JAN/2017 - JUL/2017",
			"url" : "some-url"
		},
		{
			"name" : "Unicesumar",
			"location" : "Maringá-PR, Brazil",
			"degree" : "Bachelor Degree",
			"majors" : ["Administration"],
			"dates" : "DEZ/2013 - JUL/2017",
			"url" : "some-url"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Git Hub",
			"school" : "Udacity",
			"dates" : "JAN/2017",
			"url" : "some-url"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "DEZ/2016",
			"url" : "some-url"
		},
		{
			"title" : "HTML & CSS",
			"school" : "Codecademy",
			"dates" : "MAY/2013 - SEP/2013",
			"url" : "some-url"
		},
		{
			"title" : "Programming Logic",
			"school" : "Soft Blue",
			"dates" : "MAR/2013 - AUG/2013",
			"url" : "some-url"
		}
	],
	"display" : function() {
		$("#education").append(HTMLschoolStart);

		education.schools.forEach(function(school) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
			var displaySchool = formattedSchoolName + formattedSchoolDegree + formattedSchoolMajor + formattedSchoolLocation + formattedSchoolDates;

			$(".education-entry:last").append(displaySchool);
		});

		$("#education").append(HTMLonlineClasses);

		education.onlineCourses.forEach(function(course) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
			var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
			/*var formattedURL = HTMLonlineURL.replace("%data%", course.url);*/
			var displayCourses = formattedTitle + formattedSchool + formattedDates;

			$(".online-entry:last").append(displayCourses);
		});

	}
};

var work = {
	"jobs" : [
		{
			"employer" : "Smart Sprint",
			"title" : "Web Developer",
			"location" : "Maringá-PR",
			"dates" : "JAN/2017 - PRESENT",
			"description" : "E-business development focusing on digital marketing results and better User Experience, improving results with client’s interaction and data analysis.",
			"bulletPoints" : [
				"Web development using agile method and learning with the final client in beta process.",
				"Applied Material Design from Google in web development projects.",
				"Analyse results and user data to improve SEO and User Experience (UX)."
			]
		},
		{
			"employer" : "Unimed Maringá",
			"title" : "Project Assistant",
			"location" : "Maringá-PR",
			"dates" : "MAR/2016 - PRESENT",
			"description" : "Project Manager of Innovation and Technology projects, working with multidisciplinary teams in healthcare sector.",
			"bulletPoints" : [
				"Project manager of 1st hackathon produced by this cooperative health insurance in Brazil.",
				"Manage series of projects focused on information technology in the healthcare system.",
				"Include learning process between the development of project management methodology used by PMO."
			]
		},
		{
			"employer" : "Unimed Maringá",
			"title" : "Project Internship",
			"location" : "Maringá-PR",
			"dates" : "MAR/2015 - MAR/2016",
			"description" : "Assist the PMO team in projects management, assuming the administrative work in the office, handling documents and controlling acquisitions.",
			"bulletPoints" : [
				"Improved project management methodology and created material for others professionals learn easily how to do it.",
				"Assist on project management and keeping follow-ups managing projects documents and acquisitions.",
				"Search and study knew tools and technologies to create or increment projects in health sector."
			]
		}
	],
	"display" : function () {
		$("#work-experience").append(HTMLworkStart);

		work.jobs.forEach(function(job){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
			var forTitleEmplo = formattedEmployer + formattedTitle + formattedWorkLocation + formattedWorkDates + formattedWorkDescription + HTMLworkOrderedTitle;

			$(".work-entry:last").append(forTitleEmplo);
			for (x = 0; job.bulletPoints.length > x; x++) {
					var formattedBulletPoints = HTMLworkBulletPoints.replace("%data%", job.bulletPoints[x]);
					$(".ordered-list:last").append(formattedBulletPoints);
			}
		});
	}
};

var projects = {
	"project" : [
		{
			"title" : "Alphagreen",
			"dates" : "JAN/2017",
			"description" : "Fully responsible institucional site for a real estate business, including available real estate deals gallery \n Developed site with stages of validation with the end user and collecting feedbacks for improve User Experience \n Clean code, no frameworks for stylish web design and minimal content making easier user access in any device or connection",
			"bulletPoints" : [
				"Fully responsible institucional site for a real estate business, including available real estate deals gallery.",
				"Developed site with stages of validation with the end user and collecting feedbacks for improve User Experience.",
				"Clean code, no frameworks for stylish web design and minimal content making easier user access in any device or connection."
			],
			"url" : "http://www.negociosalphagreen.com.br/",
			"images" : ["images/projects/alphagreen-one.png", "images/projects/alphagreen-two.png"]
		},
		{
			"title" : "Oh Yeah",
			"dates" : "MAR/2017",
			"description" : "Fully responsible e-commerce with design patterns from Google for a target market \n Developed site with stages of validation with the end user and collecting feedbacks for improve User Experience \n Constant market and results analysis for applying improvements in market strategies",
			"bulletPoints" : [
				"Fully responsible e-commerce with design patterns from Google for a target market.",
				"Developed site with stages of validation with the end user and collecting feedbacks for improve User Experience.",
				"Constant market and results analysis for applying improvements in market strategies."
			],
			"url" : "http://www.ohyeahshop.com.br/",
			"images" : ["images/projects/ohyeah-one.png", "images/projects/ohyeah-two.png"]
		}
	],
	"display" : function() {
		for (var n = 0; projects.project.length > n; n++) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[n].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[n].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[n].description);
			var formattedProjectLink = HTMLprojectURL.replace("%data%", "ENTER SITE");
			var formattedProjectURL = projects.project[n].url;
			var formattedProjectImages = [];
			var formattedProjectBullets = [];

			var projectDisplay = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + 	HTMLprojectOrdered;
			$(".project-entry:last").append(projectDisplay);

			for (var x = 0; projects.project[n].bulletPoints.length > x; x++) {
				formattedProjectBullets = HTMLprojectBullets.replace("%data%", projects.project[n].bulletPoints[x]);
				$(".ordered-list:last").append(formattedProjectBullets);
			}

			for (var c = 0; projects.project[n].images.length > c; c++) {
				formattedProjectImages = HTMLprojectImage.replace("%data%", projects.project[n].images[c]);
				$(".project-entry:last").append(formattedProjectImages);
			}
			$(".project-entry:last").append(formattedProjectLink);
			$(".project-link:last").attr({
				href: formattedProjectURL,
				target: "_blank"
			});
		}
	}
};

var floatActionButton = {
	"source": "images/fab-button.svg",
	"display": function () {
		$("#fab-button").append(FABbutton);
		var fabImage = $("#fab-image").attr("src", floatActionButton.source);
		return fabImage;
	},
	"backTop": function () {
		if ($('#fab-button').length) {
	    var scrollTrigger = 100, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $('#fab-button').addClass('show');
	            } else {
	                $('#fab-button').removeClass('show');
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('#fab-button').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
		}
	}
};

/*Insert content*/
bio.display();
skills.display();
work.display();
projects.display();
education.display();
floatActionButton.display();
floatActionButton.backTop();
$("#map-div").append(googleMap);

/*Insert Style*/
$("#main").children().attr("class", "center-content");
$(".center-content:nth-child(2)").attr("id", "holder");
$(".ordered-list").children().attr("class", "list-style");
$(".center-content:nth-child(odd)").addClass("gray");
