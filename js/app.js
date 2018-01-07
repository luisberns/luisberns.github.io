/*
 * Data to interate with MODEL VIEW VIEWMODEL (MVVM)
 */

// MODEL
info = {
	personal: {
		name: 'Luis Guilherme Berns Silva',
		address: 'Maringa-PR - Brazil',
		contacts: {
			phone: '+55 44 9 9972-5926',
			e-mail: 'louisuntitled@gmail.com',
			linkedin: ['https://www.linkedin.com/in/louisberns/', '/in/louisberns'],
			github: ['https://github.com/louisberns', '/louisberns'],
			twitter: ['https://twitter.com/louisuntitled', '@louisuntitled']
		},
		languages: ['English', 'Portuguese-BR']
	},
	pro: {
		projectMan: [ // Project Management related skill set
			methods: [
				{name: 'SCRUM', level: 10},
				{name: 'Desing Thinking', level: 10},
				{name: 'PMBOK', level: 8},
				{name: 'PRINCE2', level: 8}
			],
			software: [
				{name: 'Microsoft Project', level: 7},
				{name: 'Bizagi', level: 10}
			],
			tools: [
				{name: 'WBS', level: 10},
				{name: 'Canvas', level: 10},
				{name: 'CSD Matrix', level: 10}
			],
			process: [
				{name: 'BPM & BPMN', level: 8}
			],
			business: [
				{name: 'Lean business', level: 7},
				{name: 'Product development', level: 7}
			],
			projects: [
				{
					name: 'Biometric Healthcare Authorization',
					institution: 'Unimed',
					date: 'April 2017',
					topics: [
						'Installed biometric reader, in almost 900 clinics, hospitals, and laboratories, granting security and eligibility of patients in health care plan',
						'Duration 10-12 months of project and investment of more than R$500 thousands reais for 1.500 biometrics readers bought',
						'Realized marketing campaign for biometric registers, almost 170,000 clients registers, intensive communication for clients and visits to companies'
					]
				},
				{
					name: 'Project Management Methodology',
					institution: 'Unimed',
					date: 'December 2016',
					topics: [
						'Developed PMO methodology for providing better adaptability in different cases scenarios based on PMBOK guide and Agile management',
						'Applied lean development and increment the methodology for project management and business case',
						'Analyzed user experience from both project manager and stakeholders and applied more than 20 improvements in the first month'
					]
				},
				{
					name: 'Pentest for Security Breach on Webapp',
					institution: 'Unimed',
					date: 'September 2016',
					topics: [
						'Managed documents and created suited presentations to present at Directors meetings',
						'Assisted with all project management arranged and mediate technical meetings',
						'Evaluated technical pentest results documents'
					]
				},
				{
					name: 'Hackathon',
					institution: 'Unimed',
					date: 'August 2016',
					topics: [
						'Realized Hackathon for Unimed’s healthcare cooperative, for discovering new talents and technologies for developing healthcare mobile applications',
						'Develop hot site which resulted in more than 500 visits in 1 month, 130 people enrolled resulting in 26 prototypes developed',
						'Developed all documents to contextualize hackathon participants as well as the method for decided the winner',
						'Awarded three prototypes with five thousand reais (R$ 5,000.00) each',
						'Realized total of 32 hours of the event with lots of pizzas and coffee, 24 hours of those for the programming marathon',
						'Acquired spontaneous advertising in TV, Radio, Printed news, and the internet calculated results more than 16 thousand BRL'
					]
				},
				{
					name: 'AGIU - PHILIPS TASY Implementation',
					institution: 'Unimed',
					date: 'January 2016',
					topics: [
						'Implemented new ERP system, unified 23 systems to 3 (Philips TASY - ERP, Senior - HR and Qlikview - BI)',
						'Delivered project with 3.5 years of duration and invested more than R$ 4.2 mi reais. Payback of 2.35 years and more than R$ 1.7 mi of ROI',
						'Managed one of 5 phases, duration of six months, worked as project manager in the market department with a team of 12-15 people'
					]
				}
			]
		],
		web: [ // Web related skill set
			langs: [ // Programming Languages, Style & Markup
				{name: 'HTML', level: 10},
				{name: 'CSS', level: 10},
				{name: 'Javascript', level: 7},
				{name: 'Markdown', level: 10},
				{name: 'Liquid (shopify)', level: 7}
			],
			fws: [ // Frameworks
				{name: 'Bootstrap', level: 10},
				{name: 'Jekyll', level: 7},
				{name: 'Knockout', level: 7}
			],
			apis: [ // Application Programming Interface
				{name: 'Google Maps JS', level: 8},
				{name: 'Youtube', level: 5},
				{name: 'Fetch', level: 8}
			],
			libs: [ // Libraries
				{name: 'jQuery', level: 10},
				{name: 'Lunr.js', level: 7}
			],
			test: [ // Testing Frameworks
				{name: 'Jasmine', level: 5}
			],
			tools: [ // Tools for web development
				vcs: ['Git', 'GitHub', 'GitLab'],
				os: ['Linux', 'Windows', 'Mac OX'],
				editor: ['Atom', 'Sublime Text'],
				runners: ['Grunt', 'Gulp']
			],
			projects: [
				{
					name: 'Memory Game',
					institution: 'Udacity',
					date: 'December 2017',
					topics: [
						'Develop an application using MVVM pattern with Knockout.js, using Google Maps JS API and Foursquare Places API',
						'Display a list of coffees on the map, animated markers and displayed data from Foursquare Places API on infowindow',
						'Data requests happens asynchronously using Promises and handling errors'
					],
					url: 'https://github.com/louisberns/neighborhood-map'
				},
				{
					name: 'Elo Design System',
					institution: 'Benner',
					date: 'September 2017',
					topics: [
						'Develop a Portal for a shared Design System documentation using Jekyll, Markdown and Liquid',
						'Utilized Google Tag Manager to add Tags like Google Analytics and Hotjar used to analyze user behavior.'
					],
					url: 'http://elo.benner.com.br/'
				},
				{
					name: 'Online JS Resume',
					institution: 'Udacity',
					date: 'April 2017',
					topics: [
						'Developed an online resume using Javascript and jQuery, and hosted on GitHub pages',
						'Utilized Google Maps API that can pin a map location based on JSON data declared',
						'Included Javascript animations, with the main content loading on average in 500ms with Regular 2G throttling'
					],
					url: 'https://louisberns.github.io/frontend-nanodegree-resume/'
				},
				{
					name: 'Alphagreen',
					institution: 'Smart Sprint',
					date: 'January 2017',
					topics: [
						'Created an institution website for a real estate business, which included a JS gallery with available deals',
						'Developed web project with various stages of validation, and obtained almost 50 users, updating based on constant feedback',
						'Developed entire site, fully responsible and with clean code, no frameworks for stylish and minimal content making easier user access in any device or connection',
						'Inserted Google Apps form, which allows entry of data to be saved in a Google spreadsheet and provides notifications of new entries via email'
					],
					url: 'http://www.negociosalphagreen.com.br/'
				},
				{
					name: 'Hackathon hotsite',
					institution: 'Unimed',
					date: 'August 2016',
					topics: [
						'Created a hot site for hackathon of Unimed’s healthcare cooperative that was fully responsive with minimum content to improve accessibility and load times',
						'Disponibilize access for all the available documents for the event, such as regulament and programmed schedule',
						'Resulted in more than 500 visits to the site (1 month) and 130 people enrolled resulting in 26 prototypes developed'
					],
					url: 'http://www.unimedmaringa.com.br/hackathon/'
				}
			]
		],
		ux: [ // User Experience related skill set
			uiTools: [
				{name: 'Inkscape', level: 5},
				{name: 'Illustrator', level: 5},
				{name: 'Figma', level: 7}
			],
			deliverables: [
				{name: 'User Research', level: 8},
				{name: 'UI Design', level: 5},
				{name: 'UX Strategy', level: 8},
				{name: 'Information Architecture', level: 8},
				{name: 'UX w/ Performance', level: 5}
			],
			projects: [
				{
					name: 'Hospital ER Solution',
					institution: 'Benner',
					date: 'On going',
					topics: [
						'Improved the product management process with UX deliverables and new metrics for the product'
					]
				},
				{
					name: 'Elo Design System',
					institution: 'Benner',
					date: 'September 2017',
					topics: [
						'Develop a Portal for a shared Design System documentation using Jekyll, Markdown and Liquid',
						'Utilized Google Tag Manager to add Tags like Google Analytics and Hotjar used to analyze user behavior',
						'Developed UX project with Double Diamond methodology within its four stages'
					]
				}
			],
			talks: [
				{
					name: 'UX on Practice',
					institution: 'FEMUG - Dev Paraná',
					date: 'November 2017',
					topics: [
						'Talked about the different roles in UX management and how those can be applied in projects',
						'Presented cases from three companies on how UX helped one to redesign, other develop a AMP and other to develop a PWA app',
					],
					url: 'https://drive.google.com/open?id=1rNdKMCZcTkfBQO4W2dAFIZNp6yao9nE4I8LTAZE1I2s'
				},
				{
					name: 'UX through Product Management',
					institution: 'FEMUG - Dev Paraná',
					date: 'October 2017',
					topics: [
						'Presented a project that its structure focuses on the product as a whole to implement UX practices',
						'Talked about how this project could impact the product - a Hospital Management Software - and its users'
					],
					url: 'https://drive.google.com/open?id=1VA7-fSBDchQw41R6BguKC3glYP70rDIYI3pZ_lrEhTs'
				}
			]
		]
	},
	work: [
		{
			title: 'UX Designer',
			company: 'Benner Solutions',
			startDate: 'August 2017',
			endDate: 'PRESENT',
			topics: [
				'Focused on improving the User Experience within the company web applications for healthcare and others industries',
				'Worked on different products analyzing and creating metrics for strategic product management and UX continuity',
				'Developed a Design System based on internal framework technology used to develop more than 10 products',
				'Developed UX project using Double Diamond method, working with users and developers to improve the product'
			]
		},
		{
			title: 'Web Developer',
			company: 'Smart Sprint',
			startDate: 'January 2017',
			endDate: 'October 2017',
			topics: [
				'Focused on digital marketing and better User Experience, and improved results with client interaction and data analysis',
				'Developed 2 websites using Agile methodology and learned with the final client in the beta process',
				'Developed a brand identity for 2 web development clients and utilized Material Design from Google for web design',
				'Analysed results and user data to improve SEO and User Experience (UX)'
			]
		},
		{
			title: 'Project Assistant',
			company: 'Unimed Maringá',
			startDate: 'March 2016',
			endDate: 'August 2017',
			topics: [
				'Worked with multidisciplinary teams in the healthcare sector as a project manager',
				'Managed the 1st hackathon produced by this cooperative health insurance in Brazil with 130 participants and 26 projects developed',
				'Managed a series of strategic projects with teams of 10-20 people and an average of 6 months duration, focused mainly on IT in the healthcare system',
				'Implemented learning process between the development of project management methodology used by PMO, more than 20 improvements in first month'
			]
		},
		{
			title: 'Project Intern',
			company: 'Unimed Maringá',
			startDate: 'March 2015',
			endDate: 'March 2016',
			topics: [
				'Assisted and managed projects in the PMO focusing on IT projects and research of tools and technologies used by a team of 4 project managers',
				'Improved project management methodology and created materials for others professionals learn how to do it, which is currently used by 30-50 people in 7 departments',
				'Assisted project managers and managed project documents, acquisitions, and PMO portfolios of 20-30 projects',
				'Searched and studied knew tools and technologies to create or increment projects in health sector'
			]
		},
		{
			title: 'Administrative Assistant',
			company: 'Silberseg Insurance Broker',
			startDate: 'December 2010',
			endDate: 'January 2015',
			topics: [
				'Digitized all database of documents and created the workflow organization system',
				'Maintained information technology infrastructure and give support when need it',
				'Collected and processed client’s informations to generate their insurance policy'
			]
		}
	],
	education: {
		degrees: [
			{
				course: 'Administration Business',
				institution: 'Unicesumar',
				startDate: 'February 2013',
				endDate: 'July 2018',
				graduated: false
			},
			{
				course: 'Front-end Developer',
				institution: 'Udacity',
				startDate: 'January 2017',
				endDate: 'December 2017',
				graduated: true
			}
		],
		courses: [
			{
				course: 'Product Design',
				institution: 'Udacity',
				startDate: 'July 2017',
				endDate: 'September 2017'
			},
			{
				course: 'HTML & CSS',
				institution: 'Codecademy',
				startDate: 'May 2013',
				endDate: 'September 2013'
			},
			{
				course: 'Programming Logic',
				institution: 'Softblue',
				startDate: 'March 2013',
				endDate: 'August 2013'
			}
		],
		certifications: [
			{title: 'Professional Interoperability with HL7', institution: 'HL7 Brazil'},
			{title: 'Professional Interoperability with OpenEHR', institution: 'HL7 Brazil'}
		]
	}
};



// VIEWMODEL


// VIEW
