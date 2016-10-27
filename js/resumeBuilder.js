/* 
    Build Resume page using JS objects for data storage and
    js functions with jQuery to render the various sections
*/

// Bio
var bio = {
    "name" : "James Ruggieri",
    "role" : "Web Developer and Designer",
    "contacts" : {
        "mobile" : "415-225-7896",
        "email" : "james.ruggieri@yahoo.com",
        "github" : "hellbertos",
        "githubLink" : "https://github.com/hellbertos",
        "linkedin" : "james_ruggieri",
        "linkedinLink" : "https://www.linkedin.com/in/jamesruggieri",
        "location" : "San Francisco"
    },
    "bioPic" : "images/gravitar-test.jpg",
    "welcomeMsg" : "I am a front end web developer and  web designer with a passion for creating functional, accessible, informative and aesthetically pleasing web sites. I am continually striving to learn and progress in all phases of the craft.<br><br>I hand code HTML and CSS. I've been slowly incorporating SASS into my workflow. I'm using Git more as I figure how it fits in my process. I love using Jquery but have been getting more into vanilla JS when it makes sense. Currently I'm studying Flex Box (I love the idea of no floats), React (Much more fun than Backbone to me) and ES6 (I love that I can loop w/o need of 'closure' trickery) as well as taking online instruction to build my first Wordpress plugin.<br><br>Where design is concerned, I endeavor to approach each new project from a UX perspective coming from a foundation of existing content and desired user flow. Clean, unobtrusive and functional best describes my design directive.",
    "personalInfo" : 'When I am not coding, sharpening my photoshop skills, studying programming or pondering the latest web trends, techniques and advancements, I enjoy a multitude of other interests.<br><br>I love outdoor activities of all kinds and enjoy being active. If I cannot find time to be outdoors, I will make sure to get a workout in at home. I enjoy my motorcycles and like the mechanical challenge of fixing them. I recently finished a restoration project on an older bike and would like to do another. I have been home-brewing for about a year which has been a fun, frustrating and rewarding hobby. I continue to wrestle with my Linux Home Entertainment Network, though its more of a winter project :) Other interests include photography, learning guitar and world economic systems.<br><br>Thanks for stopping by and do not hesitate to contact me at any of the links above.',
    "skills" : [
        '<img class="skillsIco htmlSkill" src="./images/ico-html5.svg">',
        '<img class="skillsIco cssSkill" src="./images/ico-css3.svg">',
        '<img class="skillsIco jsSkill" src="./images/ico-js.svg">',
        '<img class="skillsIco wpSkill" src="./images/ico-wp.svg">',
        '<img class="skillsIco bsSkill" src="./images/ico-bs3.svg">',
        '<img class="skillsIco psSkill" src="./images/ico-ps.svg">',
        '<img class="skillsIco ilSkill" src="./images/ico-il.svg">'
        
    ],
    "tools" : [
        'Sublime Text',
        'Web Storm',
        'Git',
        'Node build tools',
        'Adobe CC Suite',
        'Open Office',
        'MS Office'
    ],
    "display" : function() {
        // Append values from the BIO object to the page



                var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
                $('#header').prepend(formattedRole);

                var formattedName = HTMLheaderName.replace("%data%", bio.name);
                $("#header").prepend(formattedName);

                // Contacts
                var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
                $('#topContacts, #footerContacts').append(formattedMobile);

                var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
                $("#topContacts, #footerContacts").append(formattedEmail);

                var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.linkedin).replace("%data2%",bio.contacts.linkedinLink);
                $("#topContacts, #footerContacts").append(formattedTwitter);

                var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("%data2%", bio.contacts.githubLink);
                $("#topContacts, #footerContacts").append(formattedGithub);

                var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
                $("#topContacts, #footerContacts").append(formattedLocation);

                // Pic
                var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
                $(".intro").append(formattedPic);

                // Welcome Message
                var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
                $(".intro").append(formattedMsg);

                // Button trigger to show Personal Info
                //$('.welcome-message').append(HTMLprsnlInfoBtn);

                // Personal Info
                $('#header').append(HTMLpersonalStart);
                var formattedPersonalInfo = HTMLpersonalInfo.replace('%data%', bio.personalInfo);
                $('#personalH3').append(formattedPersonalInfo);

                // The Skills section
                if ((bio.skills.length > 0) === true ) {
                    $('#header').append(HTMLskillsStart);
                    for(var i = 0; i <= bio.skills.length - 1; i++) {
                        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                        $('#skills').append(formattedSkills);
                        }

                    }

                // The Tools section
                if ((bio.tools.length > 0) === true ) {
                    $('#header').append(HTMLtoolsStart);

                    for(var i = 0; i <= bio.tools.length - 1; i++) {
                        var formattedTools = HTMLtools.replace("%data%", bio.tools[i]);
                        $('#tools').append(formattedTools);
                        }

                    }
                }
            }

// Work Object
var work = {
    "jobs" : [
        {
            "employer" : "Freelance Web Consultant",
            "singleName" : "freelance",
            "title" : "Web Designer and Developer",
            "location" : "San Francisco, CA",
            "dates" : "2013 - Present",
            "description" : [
                "Perform start-to-finish planning, designing, coding and launching of Wordpress-based websites then training new owners.",
                "Enhance, update and maintain existing websites; self-created and those owned by other entities.",
                "Create HTML, CSS, Javascript/Jquery freelance work for a variety of vendors.",
                "Hired and worked with content creators as well as other designers, Wordpress devs and front-end devs"
            ]
        },
        {
            "employer" : "Circle Dog Media",
            "singleName" : "circle",
            "title" : "Web Designer/Developer",
            "location" : "San Francisco, CA",
            "dates" : "2010 - 2012",
            "description" : [
                "Built responsive HTML templates and wrote CSS to match Photoshop comps.",
                "Integrated Wordpress­specific PHP functionality to create custom WP themes.",
                "Wrote JS and Jquery to integrate functional behaviors to various sections of websites",
                "Wrote PHP, based around the Wordpress API, for custom themes."

            ]
        },
        {
            "employer" : "Brayton Hughes Design",
            "singleName" : "brayton",
            "title" : "Server Administrator/LAN Analyst",
            "location" : "San Francisco CA",
            "dates" : "2005 - 2008",
            "description" : [
                "Handled all daily administration of Windows Server and network of 100 computers and large format devices.",
                "Managed IT consultant engineers for server, network and large format printing issues.",
                "Documented and refined all processes; focusing on training, data archiving and moving teams within office.",
                "Increased efficiency by dramatically reducing time to identify, locate and restore archived project material",
                "Trained new and existing employees in required software, network usage protocol and network navigation."
            ]
        },
        {
            "employer" : "Pear Transmedia",
            "singleName" : "pear",
            "title" : "Web Designer/Developer",
            "location" : "Oakland, CA",
            "dates" : "2003 - 2005",
            "description" : [
               "Assisted in initial planning, information architecture and wire framing phases of projects.",
               "Created Photoshop design comps based on wire frame documents, initial directives and project goals.",
               "Coded HTML templates and wrote CSS rules based on final design comps.",
               "Integrated HTML into PHP structures and wrote some PHP and MySQL.",
               "Assisted in phases of build and launch whether production art, QA testing and/or documentation."
            ]
        },
        {
            "employer" : "Additional Related Experience",
            "singleName" : "additional",
            "title" : "",
            "location" : "San Francisco",
            "dates" : "2004 and previous",
            "description" : "6+ years experience with various SF Bay Area firms in a the capacity of a designer and front-end developer using HTML, CSS, Javascript, PHP, MySQL, CVS version control, Homesite, Photoshop, Illustrator, Visio, MS Office."
        }
    ],
    "display" : function() {
            var job;
            for (job in work.jobs) {
                $('#workExperience').append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                $('.work-entry:last').append(formattedEmployer+" "+formattedTitle);

                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                $('.work-entry:last').append(formattedDates);

                var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
                $('.work-entry:last').append(formattedLocation);

                var formattedJobList = HTMLworkDescStart.replace("%data%", work.jobs[job].singleName);
                if (Array.isArray(work.jobs[job].description) === true ) {
                    
                    $('.work-entry:last').append(formattedJobList);

                    // Loop through the items.
                    for(var j = 0; j <= work.jobs[job].description.length-1; j++ ) {

                        var formattedJobItem = HTMLworkDescList.replace('%data%', work.jobs[job].description[j]);
                        $('.'+ work.jobs[job].singleName+'-job-list').append(formattedJobItem);
                   }

                } else {var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                                $('.work-entry:last').append(formattedDescription);
                }

            }

        }

    }

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
            },
            {
                "title" : "One Day Intensive Courses",
                "school" : "Varies",
                "date" : "2012 - presesnt",
                "url" : "varies",
                "courseUrl" : ""
            }
        ],
    "display" : function() {
                    var instruction;
                    for (instruction in education.schools) {
                        $('#education').append(HTMLschoolStart);
                        // School Name and Degree
                        var formattedTitle = HTMLschoolName.replace("%data%", education.schools[instruction].name).replace("#", education.schools[instruction].url);
                        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[instruction].degree);
                        $('.education-entry:last').append(formattedTitle+' '+formattedDegree);
                        // Date
                        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[instruction].dates);
                        $('.education-entry:last').append(formattedDates);

                        // Location
                        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[instruction].location);
                        $('.education-entry:last').append(formattedLocation);

                        // Majors
                        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[instruction].majors);
                        $('.education-entry:last').append(formattedMajor);

                    }
                    //Online Courses
                    var webClass;
                    for(webClass in education.onlineCourses){
                        $('.education-entry:last').append(HTMLonlineClasses);

                        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[webClass].title).replace("#",education.onlineCourses[webClass].courseUrl);
                        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[webClass].school);
                        $('.education-entry:last').append(formattedTitle+' '+formattedSchool);

                        var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[webClass].date);
                        $('.education-entry:last').append(formattedDate);

                        var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[webClass].url).replace("#",education.onlineCourses[webClass].url);
                        $('.education-entry:last').append(formattedUrl);
                    }

                }

}

// Projects Object
var projects = {
    "project" : [
        {
            "title" : "crescentmoonskincare.com",
            "link" : "http://crescentmoonskincare.com",
            "dates" : "2016",
            "description" : "The owners boutique skin care studio in San Francisco's Pacific Heights neighborhood contact me to redesign their website to focus on their core offering of clearing acneic skin and dealing with other serious skin afflictions. During the course of discovery, it was determined that we could streamline two important parts of their customer interaction by offering online booking and online product purchases, but only to acne clients; not every client who comes for their array of services.<br><br>The site is built on the Wordpress framework and uses WP's user roles to hide the online booking service and the web shop from general users as well as custom post types, widgets, and array of plugings; along with Wordpress's built in blogging engine and robust content management functionality.<br><br>The responsive, custom theme was built using Bootstrap; mainly using the grid and accordion components.<br><br>Technologies Used: HTML, CSS, JS, Bootstrap, Jquery, Wordpress, Woo Commerce, PHP.",
            "images" : ["images/cm-home.jpg", "images/cm-srv2.jpg", "images/cm-serv.jpg", "images/cm-contact.jpg"],
            "imagesLb" : ["images/cm-home-lb.jpg", "images/cm-srv2-lb.jpg", "images/cm-serv-lb.jpg", "images/cm-contact-lb.jpg"]
        },
        {
            "title" : "caiakoopman.com",
            "link" : "http://caiakoopman.com",
            "dates" : "2014 - present",
            "description" : "This 'Pop Surrealist' artist contacted me initially to rethink her web presence. Her existing site design had aged and was unintuitive to update, thus was rarely current.<br><br>During project discovery, it was quickly apparent that a rebuild was in order and a complete restructuring of her content was needed. Additionally, it was determined that she could, and should, sell all her own products directly from her own online shop, rather than a select few while producers sold the rest from their own outlets.<br><br>After a long planning phase, a heavily customized child theme and a well-thought out Woo Commerce store brought her new site up before the Christmas season.<br><br>Many custom templates, custom post types and widgets along w/ a ton of content bring this artist's work to her fans online.<br><br>Technologies Used: HTML, CSS, JS, Jquery, Wordpress, Woo Commerce, PHP.",
            "images" : ["images/caia-home.jpg", "images/caia-portfolio.jpg", "images/caia-shop.jpg", "images/caia-contact.jpg"],
            "imagesLb" : ["images/caia-home-lb.jpg", "images/caia-portfolio-lb.jpg", "images/caia-shop-lb.jpg", "images/caia-contact-lb.jpg"]
        },
        {
            "title" : "touchwellness.com",
            "link" : "http://touchwellness.com",
            "dates" : "2015",
            "description" : "An on-site massage company in the San Francisco Bay Area decided they needed to upgrade their decade old website as they modernized their clients and services. The owners wanted a platform which was easily updateable that they could grow with; whether to add a new service, another glowing review or to eventually start a blog.<br><br>Wordpress was the obvious choice. During discovery we found that they were very interested in educating new customers and existing user base as to the methodology and expertise behind their services since so many didn't understand the benefits of thier specific wellness offerings.<br><br>A purely custom, responsive theme was generated with custom templates and modules for each page. Particularly noteable are the RaphealJS based, clickable 'ergonomics' info-graphic and the custom post type driven, home page panel tab to offer prospective clients a quick glimpse of the many benefits they can bring to a work place.<br><br>Technologies Used: HTML, CSS, JS, Jquery, RaphealJS, Wordpress, PHP.",
            "images" : ["images/tw-home.jpg", "images/tw-wellness.jpg", "images/tw-contact.jpg"],
            "imagesLb" : ["images/tw-home-lb.jpg", "images/tw-wellness-lb.jpg", "images/tw-contact-lb.jpg"]
        }
    ],
     "display" : function() {
                    var site;
                    for (site in projects.project) {
                        $('#projects').append(HTMLprojectStart);

                        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[site].title).replace("%link%", projects.project[site].link);
                        $('.project-entry:last').append(formattedTitle);

                        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[site].dates);
                        $('.project-entry:last').append(formattedDates);

                        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[site].description);
                        $('.project-entry:last').append(formattedDescription);

                        // Iterate through images Array
                        if(projects.project[site].images.length > 0) {
                            // Add the flexbox row for evenly spaced content
                            $('.project-entry:last').append(HTMLprojectImgBlk);

                            for(pic in projects.project[site].images) {
                                var formattedImage = HTMLprojectImage.replace("%data%", projects.project[site].images[pic]).replace("%dataLb%", projects.project[site].imagesLb[pic]);
                                $('.imgRow:last').append(formattedImage);
                            }

                        }

                    }

                }
}

// Side Projects Obj
var sideProjects = {
    "sideProject" : [
        {
            "title" : "Neighborhood Map",
            "link": "http://mineralmedialabz.com/fendmap/",
            "description" : "This is a small web app which, as the name implies, taps into the Google Maps API to show a section of my neighborhood and point out a few notable places using custom icons instead of map pins. The left sidebar offers a clickable list of the selected landmarks and a text field which will filter the selections upon input. Additionally, the Foursquare and Yelp API's to offer information about the chosen places within a pop up window.<br><br>Along with gaining a better understanding of integrating remote data via API feed, I learned much more about the MVC paradigm of separating data and display from the logic methods to control data throughput. The next project will hopefully be a React app! Technologies Used: HTML, CSS, Javascript, Knockout MVC, Google Maps API, Foursquare API, Yelp API, node build tools.",
            "images" : ["images/map-app.jpg", "images/map-app-active.jpg"],
            "imagesLb" : ["images/map-app-lb.jpg", "images/map-app-active-lb.jpg"]
        },
        {
            "title" : "Space Hop Arcade Game",
            "link": "http://mineralmedialabz.com/spacehop/",
            "description" : "A take-off from the classic arcade game Frogger completely browser based and built on top of a basic Javascript engine. It was a great learning experience and really helped me to gain a more fundamental understanding of Javascript Objects and their methods; both language-based and custom. Additionally, this project afforded me the opportunity to learn more clearly about JS closures; something which I'm finding in ES6 to be a less complicated animal. Technologies Used: HTML, CSS, Javascript,  node build tools.",
            "images" : ["images/space-hop-game.jpg"],
            "imagesLb" : ["images/space-hop-game-lb.jpg"]
        }
    
    ],
    "display" : function() {
        var app;
        for (app in sideProjects.sideProject) {
            $('#sideProjects').append(HTMLsideProjectStart);

            var formattedTitle = HTMLsideProjectTitle.replace("%data%", sideProjects.sideProject[app].title).replace("%link%", sideProjects.sideProject[app].link);
            $('.sideProject-entry:last').append(formattedTitle);

            var formattedDescription = HTMLsideProjectDescription.replace("%data%",sideProjects.sideProject[app].description);
            $('.sideProject-entry:last').append(formattedDescription);

             // Iterate through images Array
            if(sideProjects.sideProject[app].images.length > 0) {
                for(pic in sideProjects.sideProject[app].images) {
                    var formattedImage = HTMLsideProjectImage.replace("%data%", sideProjects.sideProject[app].images[pic]).replace("%dataLb%", sideProjects.sideProject[app].imagesLb[pic]);
                    $('.sideProject-entry:last').append(formattedImage);
                }

            }

        }


    }
}

// Call the 'display' methods on the various sections out of order
education.display();
work.display();
projects.display();
bio.display();
sideProjects.display();
/*
Set up Tipso for Skills Tool Tips
*/
// HTML Tooltip
$('.htmlSkill').tipso({
  speed             : 400,        
  background        : '#e44f26',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'HTML',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : -10,
  tooltipHover      : true,
  content           : 'I enjoy creating clean semantic html templates and integrating modern HTML5 tags; especially the &#60;picture&#62; tag for <em>image heavy</em> responsive sites.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});
// CSS Tooltip
$('.cssSkill').tipso({
  speed             : 400,        
  background        : '#1572b6',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'CSS',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : -10,
  tooltipHover      : true,
  content           : 'I love modern web designs and like the challenge of figuring out interesting design layouts. Currently, I endeavor to get better at css animations and expert at Flex Box.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});
// JS Tooltip
$('.jsSkill').tipso({
  speed             : 400,        
  background        : '#63a814',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'Javascript',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : -10,
  tooltipHover      : true,
  content           : 'Mainly I use it for DOM manipulations and plugin control; mostly jQuery, but some vanilla too. I continue to study the language to evolve into a better programmer. Currently, I focus on ES6 and React.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});
// WP Tooltip
$('.wpSkill').tipso({
  speed             : 400,        
  background        : '#2857bf',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'Wordpress',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : -10,
  tooltipHover      : true,
  content           : 'I have been building custom Wordpress themes for a few years now and enjoy the platform. It inspires me to get better at PHP as well as the WP ecosystem.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});
// BS Tooltip
$('.bsSkill').tipso({
  speed             : 400,        
  background        : '#5b4386',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'Bootstrap',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : -10,
  tooltipHover      : true,
  content           : 'Initially, I used Foundation as it felt leaner, but I have come to savor the bootstrap framework and the efficiency it brings to a web project. I use it almost exclusively now.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});
// PS Tooltip
$('.psSkill').tipso({
  speed             : 400,        
  background        : '#29a4c6',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'Photoshop',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : -10,
  tooltipHover      : true,
  content           : 'A long time Photoshop user who relishes continually learning about the tool and refining my techniques.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});
// IL Tooltip
$('.ilSkill').tipso({
  speed             : 400,        
  background        : '#d76b15',
  titleBackground   : '#333333',
  color             : '#ffffff',
  titleColor        : '#ffffff',
  titleContent      : 'Illustrator',       
  showArrow         : true,
  position          : 'bottom',
  width             : 200,
  maxWidth          : '',
  delay             : 200,
  hideDelay         : 0,
  animationIn       : 'bounceIn',
  animationOut      : 'bounceOut',
  offsetX           : 0,
  offsetY           : -10,
  tooltipHover      : true,
  content           : 'A usefull tool which I have become more proficient with as web design has embraced Flat UI and iconography as well as modern browsers offering SVG capability.',
  ajaxContentUrl    : null,
  contentElementId  : null,
  useTitle          : false,
  templateEngineFunc: null,
  onBeforeShow      : null,
  onShow            : null,
  onHide            : null
});

// Map
$('#mapDiv').append(googleMap);