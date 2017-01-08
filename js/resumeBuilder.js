var skills = ['<img src="images/Hadoop.png" title="Hadoop" height="60px" width="120px">',
			  '<img src="images/spark.png" title="Spark" height="60px" width="100px">',
			  '<img src="images/flink.png" title="Flink" height="60px" width="100px">',
			  '<img src="images/python.svg" title="Python" height="70px" width="180px">', 
			  '<img src="images/scala.png" title="Scala" height="60px" width="100px">', 
			  '<img src="images/java.png" title="Java" height="60px" width="100px">',
			  '<img src="images/sklearn.png" title="SciKit-Learn" height="90px" width="100px">',
			  '<img src="images/mongodb.png" title="MondoDB" height="90px" width="90px">',
			  '<img src="images/mysql.png" title="MySQL" height="80px" width="100px">',
			  '<img src="images/redis.png" title="Redis" height="80px" width="100px">',
			  '<img src="images/oracle.png" title="OracleDB" height="100px" width="100px">'];
var message = "I hold a degree in Telecommunications Engineering from the Federal Institute of Education, Science and Technology of Ceará (IFCE) and I am currently a master's degree student in Computer Science at the University of Paris Saclay (UPSaclay) following the track Data & Knowledge focused in data science skills such as Machine Learning, Data Mining, Data Warehousing, Big Data Processing, Web Data Models, Semantic Web, Distributed Databases, and Information Integration and Extraction.";


var bio = {
	"name" : "Anderson Chaves",
	"pic" : "images/eu-amazon.jpg",
	"role" : "Data Scientist",
	"contacts" : {
		"mobile" : "+33 6 51 32 21 22",
		"email" : "andersonpachaves@gmail.com",
		"github" : "apachaves",
		"linkedin": "apachaves",
		"twitter": "@apachaves"
	},
	"skills" : skills,
	"welcomeMessage" : message
};

var work = {
	jobs: [
		{
			"employer": "Group of Computer Networks, Software Engineering and Systems",
			"title": "Junior Developer",
			"location": "Rua Campus do Pici - Campus do Pici - Bloco 942-A - CEP: 60440-554 - Fortaleza - CE - Brasil",
			"date": "Agosto 2012 - Fevereiro 2013 ",
			"url": "http://www.great.ufc.br/",
			"description": "Worked in the LG Tools team which was responsible for developing new software tools for LG \
			                company as well as provide maintenance for the softwares and make improvements and upgrades \
			                when required to do so."
		},

		{
			"employer": "Institute of Early Childhood",
			"title": "Network Administrator",
			"location": "Rua Professor Carlos Lobo, 15 - Cidade dos Funcionários, Fortaleza - CE, 60821-740",
			"date": "2012",
			"url": "www.iprede.org.br/",
			"description": "Provided maintance to the network and computers connected alongside the institute, as well as \
							updated its topology network map."
		}
	]
};

var education = {
	schools : [
		{
			"name": "Université Paris-Saclay",
			"location": "Plateau de Saclay, Orsay, Île-de-France, France",
			"degree": "Master's Degree",
			"major": "Computer Science (Data & Knowledge)",
			"date": "2016",
			"url": "https://www.universite-paris-saclay.fr"
		},		
		{
			"name": "Télécom ParisTech",
			"location": "46 Rue Barrault, 75013, Paris, France",
			"degree": "Master's Degree",
			"major": "Computer Science (Data & Knowledge)",
			"date": "2016",
			"url": "www.telecom-paristech.fr/"
		},
		{
			"name": "University of Glasgow",
			"location": "Glasgow, G12 8QQ, Scotland, United Kingdom",
			"degree": "BEng",
			"major": "Electronics and Software Engineering",
			"date": "2014",
			"url": "http://www.gla.ac.uk/"
		},
		{
			"name": "Federal Institute for Education, Science and Technology of Ceará",
			"location": "Avenida Treze de Maio, 2081 - Benfica, Fortaleza - CE, 60040-531",
			"degree": "Bachelors",
			"major": "Telecommunications Engineering",
			"date": "2011-2016",
			"url": "http://www.ifce.edu.br/"
		}
	],
	onlineCourses : [
		/*{
			"title": "Introduction to Machine Learning",
			"school": "Udacity",
			"date": "November 2015",
			"url": "https://www.udacity.com"
		}*/
	]
};

var projects = {
	articles: [
		/*{
			"title": "Criptografia com bloco de correção de erros aplicados à evolução de autômatos",
			"author": "Anderson P. A. Chaves, Allex S. Albuquerque, Bruno Sokal, Francisco J. A. Aquino",
			"publisher": "Info Brasil",
			"date": "2013",
			"url": "http://www.infobrasil.inf.br/userfiles/OK-Criptografia-122414.pdf",
			"pic": "images/sklearn.png"
		}*/
	],
	softwares: [
		{
			"name": "CryptoCaos",
			"license": "Livre/Acadêmico",
			"date": "2013",
			"url": "https://github.com/andersonchaves/cryptocaos"
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName + formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLinkedin = HTMLcontactGeneric.replace("%data%", bio.contacts.linkedin).replace("%contact%", "linkedin");
$("#topContacts").append(formattedLinkedin);

var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
$("#header").append(formattedPic);

var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(var i = 0; i < bio.skills.length; i++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

var displayWork = function() {
	if(work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		for(job in work.jobs){
			var formattedJobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
			var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedJobTitle);
			$(".work-entry:last").append(formattedJobEmployer);
			$(".work-entry:last").append(formattedJobDates);
			$(".work-entry:last").append(formattedJobLocation);
			$(".work-entry:last").append(formattedJobDescription);
		}
	}
}

var displayArticles = function() {
	if(projects.articles.length > 0) {
		for(article in projects.articles) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle =  HTMLprojectTitle.replace("%data%", projects.articles[article].title).replace("#", projects.articles[article].url);
			var formattedAuthors =  HTMLprojectAuthors.replace("%data%", projects.articles[article].author);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.articles[article].date);
			var formattedPublisher = HTMLprojectAuthors.replace("%data%", projects.articles[article].publisher)
			//var formattedPic = HTMLprojectImage.replace("%data%", projects.articles[article].pic);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedAuthors);
			$(".project-entry:last").append(formattedPublisher);
			$(".project-entry:last").append(formattedDates);
			//$(".project-entry:last").append(formattedPic);
		}
	}
}

if(projects.softwares.length > 0){
	
}

var displaySchools = function () {
	if(education.schools.length > 0){
		$("#education").append(HTMLschoolStart);
		for(edu in education.schools){
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].date);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
			$(".education-entry:last").append(formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolDates);
		}	
	}
}

var displayOnlineCourses = function () {
	if(education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for(course in education.onlineCourses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			$(".onlinecourse-entry:last").append(formattedOnlineTitle);
			$(".onlinecourse-entry:last").append(formattedOnlineSchool);
			$(".onlinecourse-entry:last").append(formattedOnlineDates);
		}
	}
}

displayWork();
displayArticles();
displaySchools();
displayOnlineCourses();
