var bio = {
    "name": "James McGill",
    "role": "Attorney at law",
    "contacts": {
        "mobile": "(505) 503-4455",
        "email": "Saul@BCS.com",
        "github": "Asgerss",
        "twitter": "BetterCallSaul",
        "location": "Albuquerque, New Mexico"
    },
    "welcomeMessage": "- Hey, I just talked you down from a death sentence to a six months' probation. I'm the best lawyer ever.",
    "skills": ["Schemes", "Chicago Sunroof", "Scams", "Blackmailing", "Money Laundering"],
    "biopic": "images/Saul.jpg"
};

var work = {
    "jobs": [
    {
        "employer": " Hamlin, Hamlin & McGill",
        "title": "Mail sorter",
        "location": "Cicero, Illinois",
        "dates": "Early years after getting out of jail",
        "description": "After saying farewell to Marco, Jimmy moves to Albuquerque on his brother's requests to be with him and make a living through legitimate ways, initially working in the mail room at Hamlin, Hamlin & McGill. Frustrated that his younger brother earned a law degree so easily while he had to work hard his entire life to be where he is, Chuck secretly prevents Jimmy from becoming a partner at Hamlin, Hamlin & McGill."
    },
    {
        "employer": "Saul Goodman & Associates",
        "title": "Public Defender",
        "location": "Albuquerque, New Mexico",
        "dates": "From 00's and onward",
        "description": "The Offices of Saul Goodman & Associates is where Saul Goodman, Attorney at Law, conducts most of his business. It is located in a strip mall in Albuquerque, New Mexico. On the outside there is a large sign with his slogan \"Better Call Saul!\" and an inflatable Statue of Liberty on the strip-mall's roof. On the inside is a waiting room, with Saul's secretary Francesca and later a large security guard named Huell Babineaux. Apparently he works with no other lawyers. Saul's strip-mall office contains many gaudy assurances of his law practice: his diploma from the University of American Samoa, an actual Scale of Justice on his desk, wallpaper of the U.S. Constitution, and faux neoclassical, plastic columns meant to mimic U.S. government buildings. After being threatened by Mike Ehrmantraut regarding the whereabouts of Jesse Pinkman, Saul became increasingly paranoid about his safety. He hired Huell as a security guard/bodyguard and tore through his office searching for listening devices. For a time he chose to use payphones outside of his office in case his phones were tapped."
    }]
};

var projects = {
    "projects": [
    {
        "title": "Slippin Jimmy",
        "dates": "Late 90's",
        "description": "Since he was a teenager, Jimmy used to play scams to get quick money, which granted him the nickname \"Slippin' Jimmy\" for those who were close to him. In one of his most famous scams, Slippin' Jimmy would find the most slippery patches of ice every winter, stage a fall, and earn himself a fair amount of money. In one of his other scams, Slippin' Jimmy works with his closest friend Marco Pasternak to trick others into trading cash for fake Rolex watches. Jimmy was married at one point, but his wife cheated on him and they got divorced. One day, Slippin' Jimmy decided to perform a \"Chicago Sunroof\" (defecating through the sunroof of a car) on the car of his ex-wife's lover, but he didn't realize that the man's children were on the backseat of the car and Jimmy was caught by the police. Slippin' Jimmy is arrested, facing charges of property damage and assault and consequences including potentially being labeled a sex offender. ",
        "images": ["images/slippin.jpg"]
    },
    {
        "title": "The Kettleman's",
        "dates": "One day",
        "description": "Jimmy receives a promising phone call from two prospective clients, former Bernalillo County treasurer Craig Kettleman and his wife, Betsy, who are accused of embezzling $1.6 million, but they go with HHM. Desperate for their business, Jimmy enlists the help of twin con artists Lars and Cal, intending for them to \"accidentally\" get hit by Betsy's car, after which, Jimmy will \"happen\" to be driving past and save her from the scam, winning her trust. However, due to the twins not being very smart, they instead target a car driven by an elderly Hispanic woman, who happens to be the grandmother of drug kingpin Tuco Salamanca. Tuco takes Jimmy and the twins hostage and is intent on killing them, but Tuco's right-hand man Ignacio \"Nacho\" Varga convinces him to let Jimmy live, and Jimmy talks Tuco into breaking one leg on each twin instead of killing them. Nacho later meets with Jimmy and tells him he needed him alive for help in robbing the Kettlemans of the money for himself. Jimmy refuses, but Nacho senses Jimmy will eventually succumb to his criminal urges. Jimmy anonymously warns the Kettlemans, who go missing soon after with their house ransacked. Nacho is arrested due to evidence pointing to him, but he proclaims innocence and names Jimmy his lawyer, threatening him with death if he is not released. Jimmy concludes the Kettlemans staged the whole thing and actually ran away. Thanks to advice from Mike Ehrmantraut, Jimmy finds them camping in the wilderness behind their home with the stolen money. The Kettlemans bribe Jimmy to assure his silence. Nacho is released, but he accuses Jimmy of informing the Kettlemans and threatens repercussions.",
        "images": ["images/kettleman2.jpg", "images/kettleman.jpg"]
    }]
};

var education = {
    "schools": [
    {
        "name": "Cicero",
        "location": "Cicero, Illinois",
        "degree": "Elementary School",
        "majors": ["Bullying"],
        "dates": "Youth",
        "url": "http://www.nscsd.org/"
    },
    {
        "name": "North Syracuse",
        "location": "Cicero, Illinois",
        "degree": "Junior high",
        "majors": ["Scams", "Hustling"],
        "dates": "Puberty",
        "url": "http://www.nscsd.org/high_school.cfm"
    }],
    "onlineClasses": [
    {
        "title": "Law degree",
        "school": "University of American Samoa",
        "date": "Early years after getting out of jail",
        "url": "http://www.amsamoa.edu/"
    }]
};

bio.display = function () {
    $("#topContacts, #footerContacts").prepend(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#topContacts, #footerContacts").prepend(HTMLgithub.replace("%data%", bio.contacts.github).replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").prepend(HTMLtwitter.replace("%data%", bio.contacts.twitter).replace("%data%", bio.contacts.twitter));
    $("#topContacts, #footerContacts").prepend(HTMLemail.replace("%data%", bio.contacts.email).replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile).replace("%data%", bio.contacts.mobile));

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $('#skills').append(formattedSkills);
        }
    }
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedLocation + formattedDates + formattedDescription);
    }
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        var formattedImages = "";
        for (var j = 0; j < projects.projects[i].images.length; j++) {
            formattedImages += HTMLprojectImage.replace("%data%", projects.projects[i].images[j]).replace("%imageDescription%", projects.projects[i].title) + "<br>";
        }
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates + formattedDescription + formattedImages + "</div>");
    }
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var stringMajors = "";

        for (var j = 0; j < education.schools[i].majors.length; j++){
            if (j === education.schools[i].majors.length - 1) {
                stringMajors += education.schools[i].majors[j];
            }
            else {
                stringMajors += education.schools[i].majors[j] + ", ";
            }
        }

        var formattedMajors = HTMLschoolMajor.replace("%data%", stringMajors);
        var formattedURL = HTMLschoolURL.replace("%data%", "Website").replace("#", education.schools[i].url);
        $(".education-entry:last").append(formattedDates + formattedLocation + formattedMajors + formattedURL);
    }
    for (var i = 0; i < education.onlineClasses.length; i++) {
        $("#onlineClasses").append(HTMLonlineStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[i].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[i].school);
        $(".onlineClasses-entry:last").append(formattedTitle + formattedSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[i].date);
        var formattedURL = HTMLonlineURL.replace("%data%", "Website").replace("#", education.onlineClasses[i].url);
        $(".onlineClasses-entry:last").append(formattedDates + formattedURL);
    }
};

$("#mapDiv").append(googleMap);

// Display elements
work.display();
projects.display();
education.display();
bio.display();

// Make contact info expand when hovered
$('.contact-info').hover(
  function () {
    $(this).find('.contact-text').fadeToggle("slow");
  }
);

// Add content show/hide on click
$('.project-entry').click(
  function () {
    $(this).find('.project-content').slideToggle(1200);
    $(this).find('.fa').toggle();
  }
);

$('.work-entry').click(
  function () {
    $(this).find('.work-content').slideToggle("slow");
    $(this).find('.fa').toggle();
  }
);

$('.education-entry').click(
  function () {
    $(this).find('.school-content').slideToggle("slow");
    $(this).find('.fa').toggle();
  }
);

$('.onlineClasses-entry').click(
  function () {
    $(this).find('.online-content').slideToggle("slow");
    $(this).find('.fa').toggle();
  }
);