/* Udacity Javascript/Jquery Section
	James Ruggieri
*/

// Bio
var bio = {
    "name" : "James Ruggieri",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "415-225-7896",
        "email" : "james.ruggieri@yahoo.com",
        "github" : "hellbertos",
        "twitter" : "james_ruggieri",
        "location" : "San Francisco"
    },
    "bioPic" : "images/gravitar.jpg",
    "welcomeMsg" : "I am a web designer and front end web developer with a passion for creating accessible, informative and aesthetically pleasing web sites. I am continually striving to learn and progress in all phases of the craft. When I'm not coding or pondering the latest web trends, techniques and advancements, I enjoy: a multitude of activities and outdoor endeavors, motorcycle restoration projects, home-brewing and learning to play guitar. Thanks for stopping by and don't hesitate to contact me via the email link above.",
    "skills" : [
        "HTML",
        "CSS",
        "JS",
        "Photoshop",
        "Illustrator",
        "Wordpress"
    ],
    "display" : function() {
        // Append values from the BIO object to the page

            var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
            $('#header').prepend(formattedRole);

            var formattedName = HTMLheaderName.replace("%data%", bio.name);
            $("#header").prepend(formattedName);

            // Contacts
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            $('#topContacts, #footerContacts').append(formattedMobile);

            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            $("#topContacts, #footerContacts").append(formattedEmail);

            var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
            $("#topContacts, #footerContacts").append(formattedTwitter);

            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            $("#topContacts, #footerContacts").append(formattedGithub);

            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            $("#topContacts, #footerContacts").append(formattedLocation);

            // Pic
            var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
            $("#header").append(formattedPic);

            // Welcome Message
            var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
            $("#header").append(formattedMsg);

            // The Skills section
            if (bio.skills.length > 0 === true ) {
                $('#header').append(HTMLskillsStart);
                for(var i = 0; i <= bio.skills.length - 1; i++) {
                    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                    $('#skills').append(formattedSkills);
                }

            }
        }
    };

// Work Object
var work = {
    "jobs" : [
        {
            "employer" : "Mineral Media Labz",
            "title" : "Web Designer and Developer",
            "location" : "San Francisco, CA",
            "dates" : "2013 - Present",
            "description" : "Cupcake ipsum dolor sit amet fruitcake bonbon apple pie I love. Dessert cake I love lemon drops cookie gummi bears jelly-o chocolate I love. I love tiramisu bonbon gummies gingerbread dragée marshmallow. Powder muffin gummi bears oat cake. Danish sugar plum caramels caramels topping jelly. Marzipan tiramisu macaroon gummies marzipan I love pudding"
        },
        {
            "employer" : "Circle Dog Media",
            "title" : "Web Designer/Developer",
            "location" : "San Francisco, CA",
            "dates" : "2010 - 2012",
            "description" : "Cupcake ipsum dolor sit amet muffin. I love I love ice cream. Marzipan ice cream oat cake halvah icing tart biscuit halvah pudding. Dessert cake jelly beans sweet roll candy canes cake chupa chups chupa chups icing. Chocolate bar I love jelly beans ice cream. Icing tiramisu muffin lollipop ice cream. Jujubes halvah marshmallow chocolate cookie bonbon liquorice cake."
        },
        {
            "employer" : "Brayton Hughes Design",
            "title" : "Server Administrator/LAN Analyst",
            "location" : "San Francisco CA",
            "dates" : "2005 - 2008",
            "description" : "Flagfish Black scabbardfish sarcastic fringehead barred danio. Cutthroat trout cutlassfish anchovy Gila trout, Manta Ray cavefish cusk-eel? Basslet glowlight danio cookie-cutter shark skipjack tuna Blind shark river stingray pompano Peter's elephantnose fish yellowfin pike, sandburrower gar. Atlantic herring vendace neon tetra ballan wrasse elasmobranch armored searobin creek chub Lost River sucker, barb swallower? Paperbone fangtooth tilefish kahawai tompot blenny opaleye spiderfish snakehead!"
        },
        {
            "employer" : "Pear Transmedia",
            "title" : "Web Designer/Developer",
            "location" : "Oakland, CA",
            "dates" : "2003 - 2005",
            "description" : "Pacific salmon river loach queen parrotfish codling, opaleye menhaden bandfish golden trout, Black triggerfish angelfish shovelnose sturgeon shovelnose sturgeon. Rock bass antenna codlet atka mackerel--New Zealand sand diver, pink salmon olive flounder milkfish discus. Gulper livebearer koi atka mackerel daggertooth pike conger, bristlenose catfish pencilfish rockfish, eeltail catfish."
        }
    ],
    "display" : function() {
            var len = work.jobs.length;
            for (var i = 0; i < len; i++){
                for (i in work.jobs) {
                    $('#workExperience').append(HTMLworkStart);
                    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
                    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
                    $('.work-entry:last').append(formattedEmployer+" "+formattedTitle);

                    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
                    $('.work-entry:last').append(formattedDates);

                    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
                    $('.work-entry:last').append(formattedLocation);

                    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
                    $('.work-entry:last').append(formattedDescription);

                }
            }

        }

    };

// Education Object
var education = {
    "schools" :
        [
            {
                "name": "UCSB",
                "location": "Santa Barbara, CA",
                "degree" : "Bachelor of Science",
                "majors" : ["Environmental Studies"],
                "dates" : 1993,
                "url": "http://www.ucsb.edu/"
            },
            {
                "name" : "UC Berkeley Extention",
                "location" : "UCB Ext. San Francisco Campus",
                "degree" : "Singular Night Classes",
                "majors" : ["Extended Learning in CompSci"],
                "dates" : 1999,
                "url": "http://extension.berkeley.edu/"
            },
            {
                "name" : "Cabrillo College",
                "location" : "Santa Cruz, CA",
                "degree" : "General Education",
                "majors" : ["General Education"],
                "dates" : 1989,
                "url" : "http://www.cabrillo.edu/"
            }
        ],
    "onlineCourses" :
        [
            {
                "title" : "Front End Developer Nano Degree",
                "school" : "Udacity",
                "date" : 2015,
                "url" : "http://udacity.com",
                "courseUrl" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
            }
        ],
    "display" : function() {
                    var len = education.schools.length;
                    for(var i = 0; i < len; i++){
                        for (i in education.schools) {
                            $('#education').append(HTMLschoolStart);
                            // School Name and Degree
                            var formattedTitle = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
                            var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
                            $('.education-entry:last').append(formattedTitle+' '+formattedDegree);
                            // Date
                            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                            $('.education-entry:last').append(formattedDates);

                            // Location
                            var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
                            $('.education-entry:last').append(formattedLocation);

                            // Majors
                            var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
                            $('.education-entry:last').append(formattedMajor);

                        }
                    }
                    //Online Courses
                    var lenWeb = education.onlineCourses.length;
                    for(var j = 0; j < lenWeb; j++){
                        for(j in education.onlineCourses){
                            $('.education-entry:last').append(HTMLonlineClasses);

                            var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[j].title).replace("#",education.onlineCourses[j].courseUrl);
                            var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[j].school);
                            $('.education-entry:last').append(formattedTitle+' '+formattedSchool);

                            var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[j].date);
                            $('.education-entry:last').append(formattedDate);

                            var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url).replace("#",education.onlineCourses[j].url);
                            $('.education-entry:last').append(formattedUrl);
                        }
                    }
                }

    };

// Projects Object
var projects = {
    "project" : [
        {
            "title" : "caiakoopman.com",
            "dates" : "2013 - present",
            "description" : "And when thou art so gone before&mdash;if that ever befall&mdash;then ere I can follow, thou must still appear to me, to pilot me still?&mdash;Was it not so? Well, then, did I believe all ye say, oh my pilot! I have here two pledges that I shall yet slay Moby Dick and survive it. Take another pledge, old man, said the Parsee, as his eyes lighted up like fire-flies in the gloom&mdash;Hemp only can kill thee. The gallows, ye mean.&mdash;I am immortal then, on land and on sea, cried Ahab, with a laugh of derision;&mdash;Immortal on land and on sea!",
            "images" : ["images/caia-home.jpg", "images/caia-portfolio.jpg", "images/caia-contact.jpg"],
            "imagesLb" : ["images/caia-home-lb.jpg", "images/caia-portfolio-lb.jpg", "images/caia-contact-lb.jpg"]
        },
        {
            "title" : "crescentmoonskincare.com",
            "dates" : "2013",
            "description" : "Oh no way! Not many, if any, this beached as hongi is as naff as a tapu seabed. Mean while, in West Auckland, Lomu and Maui were up to no good with a bunch of cool wifebeater singlets. The chocka full force of his packing a sad was on par with Jim Hickey's sweet pohutukawa. Put the jug on will you bro, all these pretty suss cheese on toasts can wait till later. The first prize for chundering goes to... John Key and his beaut lamington, what a sad guy. Bro, boxes of fluffies are really wicked good with random Hei-tikis, aye. You have no idea how sweet as our epic bottles of tomato sauce were aye.",
            "images" : ["images/cm-home.jpg", "images/cm-srvs.jpg", "images/cm-contact.jpg"],
            "imagesLb" : ["images/cm-home-lb.jpg", "images/cm-srvs-lb.jpg", "images/cm-contact-lb.jpg"]
        },
        {
            "title" : "touchwellness.com",
            "dates" : "2015",
            "description" : "Put the jug on will you bro, all these dodgy rugby balls can wait till later. The first prize for reffing the game goes to... James Cook and his tip-top L&P, what a stink buzz. Bro, gumboots are really sweet as good with primo pavlovas, aye. I'm not here to frack spiders, good afterble constanoon. You have no idea how nuclear-free our choice twink sticks were aye.",
            "images" : ["images/tw-home.jpg", "images/tw-ctnt.jpg", "images/tw-contact.jpg"],
            "imagesLb" : ["images/tw-home-lb.jpg", "images/tw-ctnt-lb.jpg", "images/tw-contact-lb.jpg"]
        }
    ],
     "display" : function() {
                    var len = projects.project.length;
                    for(var i = 0; i < len; i++) {
                        for (i in projects.project) {
                            $('#projects').append(HTMLprojectStart);

                            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
                            $('.project-entry:last').append(formattedTitle);

                            var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
                            $('.project-entry:last').append(formattedDates);

                            var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[i].description);
                            $('.project-entry:last').append(formattedDescription);

                            // Iterate through images Array
                            if(projects.project[i].images.length > 0) {
                                for(pic in projects.project[i].images) {
                                    var formattedImage = HTMLprojectImage.replace("%data%", projects.project[i].images[pic]).replace("%dataLb%", projects.project[i].imagesLb[pic]);
                                    $('.project-entry:last').append(formattedImage);
                                }

                            }

                        }
                    }

                }
    };

// Call the 'display' methods on the various sections out of order
education.display();
work.display();
projects.display();
bio.display();

// Internationalize
$('#main').append(internationalizeButton);

// Map
$('#mapDiv').append(googleMap);