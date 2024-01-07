const experiences = [
    {
        position: 'Software Engineer Intern',
        company: 'Pateron Indonesia',
        period: 'June 2020 - September 2020',
        location: 'Bandung, Jawa Barat, Indonesia',
        linkedin: 'https://www.linkedin.com/company/pateronindonesia/',
        desc: [
            'Collaborated with 4 other engineers to develop the software (website)',
            'Built a tryout website on the backend / server side',
            'Technologies used are phalcon (PHP framework), MySQL, and git.',
        ]
    },
    {
        position: 'Software Engineer Intern',
        company: 'DigiTiket',
        period: 'January 2021 - March 2021',
        location: 'Semarang, Jawa Tengah, Indonesia',
        linkedin: 'https://www.linkedin.com/company/digitiket/',
        desc: [
            'Collaborated with 10+ other engineers and UI/UX designers to develop and maintain software (website and android)',
            'Built and maintained a tourism website',
            'Technologies used are laravel (PHP framework), MySQL, and git.',
        ]
    },
    {
        position: 'Software Engineer Intern',
        company: 'VisitInd',
        period: 'January 2021 - June 2021',
        location: 'Bandung, Jawa Barat, Indonesia',
        linkedin: 'https://www.linkedin.com/company/visitind/',
        desc: [
            'Collaborated with 4 other engineers to develop and maintain the software (website)',
            'Consumed API for website from Antares',
            'Maintained tourism website', 'Technologies used are WordPress, python, and MySQL.',
        ]
    },
    {
        position: 'Software Engineer Intern',
        company: 'Eduka System',
        period: 'June 2021 - September 2021',
        location: 'Bandung, Jawa Barat, Indonesia',
        linkedin: 'https://www.linkedin.com/company/edukasystem/',
        desc: [
            'Collaborated with 7 other engineers to develop and maintain eduka software (website and android)',
            'Developed and modified 10+ web services to fix bugs and maximize functionality',
            'Designed and implemented algorithms to meet business needs', 'Implemented software testing (unit test and integration test)', 'Deployed web service, one using server and one serverless', 'Technologies used are python, NodeJS, golang, jest, MySQL, MongoDB, Docker, and amazon web service.',
        ]
    },
    {
        position: 'Software Engineer Intern',
        company: 'kumparan',
        period: 'October 2021 - January 2022',
        location: 'Jakarta, Indonesia',
        linkedin: 'https://www.linkedin.com/company/kumparan/',
        desc: [
            'Collaborated with 6 other engineers to develop and maintain web services and microservices',
            'Participated in code review',
            'Migrated web service (nodeJS) to microservices (golang)', 'Created API documentation using stoplight, insomnia, and postman', 'Technologies used are nodeJS, golang, redis, elasticsearch, postgreSQL, cockroachDB, and graphQL.',
        ]
    },
    {
        position: 'Cloud Computing Trainee',
        company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
        period: 'February 2022 - July 2022',
        location: 'Bandung, Indonesia',
        linkedin: 'https://www.linkedin.com/company/bangkit-academy/',
        desc: [
            'Got honored as Graduate with Distinction due to great achievements in cloud computing, soft skills, and English',
            'Successfully completed 2 courses about Front-end and Back-end development from Dicoding and got 5 stars grade for the Back-end development course',
            'Managed to complete courses and labs on Google Cloud Skill Boost from Qwiklabs and got more than 20 badges',
            'Got 100% of full score about Associate Cloud Engineer from Coursera course',
            'Actively participated in a capstone project and managed to be on the top 53 capstone teams among 3000+ cohorts and 400+ teams (top 10%)',
            'Developed back-end application and handled the cloud environment using Google Cloud Platform for the capstone project',
            'Collaborated with 5 other cohorts to develop a mobile application that could detect and translate images of sign language using machine learning'
        ]
    },
    {
        position: 'Software Engineer Intern',
        company: 'Makmur',
        period: 'May 2022 - August 2022',
        location: 'Jakarta, Indonesia',
        linkedin: 'https://www.linkedin.com/company/makmurapp',
        desc: [
            'Collaborated with 2 other engineers to develop and maintain microservices using NodeJS',
            'Participated in manual testing to meet the standard requirement and test scenario from the development stage',
            'Migrated API-driven architecture to event-driven architecture in sending push notifications and email notifications using AWS Simple Queue Service and AWS Simple Notification Service',
            'Built analytics tool using REST API and event-driven technology for internal needs to track user growth, transactions, and asset under management',
            'Created an internal library to convert HTML content into PDF files using TypeScript and the existing NPM package',
            'Technologies used are NodeJS, TypeScript, MongoDB, Redis, AWS, git, and bitbucket.',
        ],
    },
    {
        position: 'Software Engineer Intern',
        company: 'PT. Cakra Radha Mustika (Kalbe Group)',
        period: 'September 2022 - December 2022',
        location: 'Jakarta, Indonesia',
        linkedin: 'https://www.linkedin.com/company/pt-cakra-radha-mustika-kalbe-group',
        desc: [
            'Collaborated with other engineers and cross-functional team to develop and maintain web services',
            'Created new features and improved existing code for finance website and company profile using JavaScript and Go',
            'Technologies used are ExpressJS, Go Fiber, Sequelize, PostgreSQL, Postman, and Gitlab.'
        ]
    },
    {
        position: 'Software Engineer',
        company: 'PT. Dans Multi Pro',
        period: 'December 2022 - March 2023',
        location: 'Jakarta, Indonesia',
        linkedin: 'https://www.linkedin.com/company/pt-dans-multi-pro',
        desc: [
            'Collaborated with other engineers and cross-functional team to develop and maintain web services',
            'Improved existing API security by implementing Role Based Access',
            'Implemented event-driven mechanism in uploading images to cloud storage (AWS S3) using AWS SQS and AWS Lambda',
            'Monitored SQS events and Lambda function using AWS CloudWatch',
            'Supported senior engineers in production deployment',
            'Created schedulers for scheduled web notification and email using smtp protocol',
            'Technologies used are HapiJS, MySQL, MongoDB, Amazon Web Service, Postman, Bitbucket, and Gitlab'
        ]
    },
    {
        position: 'Cloud Computing Mentor',
        company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
        period: 'February 2023 - July 2023',
        location: 'Bandung, Indonesia',
        linkedin: 'https://www.linkedin.com/company/bangkit-academy/',
        desc: [
            'Empowered and guided 24 cohorts of cloud computing enthusiasts throughout their transformative journey in Bangkit, fostering a nurturing environment for their growth and development',
            'Demonstrated mentorship excellence by skillfully leading 20 weekly consultations, offering expert insights and personalized support, and empowering students to overcome challenges with confidence',
            'Collaborated seamlessly with dedicated instructors and fellow mentors in 14 engaging ILT (Instructor Led Training) sessions both tech skills and soft skills, co-creating enriching learning experiences that encouraged knowledge-sharing and camaraderie',
            'As a catalyst for success, shared invaluable tips and practical wisdom with cohorts during their capstone projects, with a special focus on deploying services in Google Cloud Platform, enabling them to thrive in real-world applications and make a significant impact in the field'
        ]
    },
    {
        position: 'Research Assistant',
        company: 'Infrastructure Service Research Laboratory Telkom Indonesia',
        period: 'January 2023 - January 2024',
        location: 'Bandung, Indonesia',
        linkedin: 'https://www.linkedin.com/company/telekomunikasi-indonesia',
        desc: [
            'Collaborated with other engineers at Telkom Infrastructure Service Research Laboratory as a Research Assistant on various innovative projects',
            'Developed the backend and frontend for 4 simultaneous projects, demonstrating strong multitasking abilities',
            'Created essential tools including a comprehensive project management tool, a robust network monitoring system, efficient gateway management, and a streamlined document repository',
            'Technologies used are Fastify, Alpine.js, MinIO, MongoDB, InfluxDB, Redis, Cloudflare, and StatusCake'
        ]
    },
    {
        position: 'Software Engineer',
        company: 'PT. Dans Multi Pro',
        period: 'November 2023 - Present',
        location: 'Jakarta, Indonesia',
        linkedin: 'https://www.linkedin.com/company/pt-dans-multi-pro',
        desc: [
            'Collaborated closely with fellow engineers to create and maintain internal tools as well as client projects',
            'Devised and executed test automation scenarios for microservices, enhancing application test coverage significantly',
            'Crafted tools aimed at boosting engineers\' efficiency in delivering and deploying microservices, seamlessly integrating with Bitbucket and SonarQube APIs',
            'Technologies used are Java Spring Boot, Node.js, Cucumber, along with databases like MySQL, PostgreSQL, and Oracle'
        ]
    },
]