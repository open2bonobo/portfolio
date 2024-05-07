export type Skill = {
    skill_name: string;
    Image: string;
    width: number;
    height: number;
    src: string;
    yearsOfExpirience: number;
  };
  
  export type Social = {
    name: string;
    src: string;
    href: string;
  };
  
  export type Project = {
    imageSrc: string;
    title: string;
    href: string;
    description: string;
    team: string;
    role: string;
    duration: string;
    environment: string;
    responsibilities: string[];
  };


  export const Socials: Social[] = [
    {
      name: "LinkedIn",
      src: "./linkedin.svg",
      href: "https://www.linkedin.com/in/alex-ink-a11b8b133/",
    },
  ];
  
  export const Projects: Project[] = [
    {
      imageSrc: "./bankrot.png",
      title: "Unified State Register of Bankruptcy Information",
      href: "https://bankrot.gov.by/",
      description:
        "The Register serves as a crucial portal for accessing comprehensive data on bankrupt entities within Belarus. It offers transparency and accessibility to legal information, aiding stakeholders in navigating bankruptcy proceedings effectively",
      team: "4 developers, 2 economists, 1 lawyer",
      role: "junior Full-stack developer",
      duration: "2 years",
      environment: "C#, .NET Framework 4.5, ASP.NET, Entity Framework 5/6, Entity Framework Core, xUnit, MS SQL Server, HTML, CSS, JavaScript, GIT, IIS, Jira, SCRUM",
      responsibilities:[
        "Creating UI/UX design and implementing it",
        "Developing and maintaining new features",
        "Developing features as a datascientist",
        "Developing integrations of external systems such as banks, social networks, and government services, bots",      
        "Implementing new REST endpoints",
        "Refactoring heavy code",
        "Migrating from EF 5 to EF 6, from DB first to Code first",
        "Writing SQL queries",
        "Creating and maintaining unit tests",
        "Participating in code reviews",
        "Participating in SCRUM events",
      ]
    },
    {
      imageSrc: "./msiminsk.png",
      title: "MECASOFT International",
      href: "https://msiminsk.com/",
      description:
        "Psychophysiological testing, a powerful tool in understanding human responses, can be enhanced through the development of mobile and Windows applications using Unity3D. These applications provide an interactive platform for conducting tests, collecting data, and analyzing psychophysiological responses, contributing to advancements in both research and practical applications in fields such as healthcare and human-computer interaction",
      team: "5 developers, over 150 psychologists, 1 designer, 1 manager",
      role: "Middle Full-Stack developer with Unity3D",
      duration: "2 years",
      environment: "C#, .NET Framework 4.5-8, Unity3D, Google Play, Windows, SQLight, GIT, PHP, MySQL, HTML, CSS, JavaScript, Jira, SCRUM",
      responsibilities:[
        "Developing tests for tablets and smartphones for pshychophisiological research",
        "Solving performance issues",
        "Developing and maintaining windows applications as a reports generator",
        "Implementing client-server architecture to couple devices without internet",
        "Tune delivery for Google Play and Windows",
        "Creating app from scratch to delivery",
        "Working with external custom devices",
        "Creating and maintaining tests",
      ]
      },
    {
      imageSrc: "./bimpoint.png",
      title: "Bim.Point",
      href: "https://www.bim-point.cz/",
      description:
        "BIM (Building Information Modeling) streamlines the programming documents workflow by integrating design, construction, and management data into a centralized digital model. Through automated processes and collaborative platforms, BIM enhances efficiency, accuracy, and communication among stakeholders, facilitating smoother project progression from initial planning to execution.",
      team: "4 developers, 1 architect, 1 QA, 1 business analyst, 1 designer",
      role: "Senior Full-Stack developer with ReactJS",
      duration: "1 year",
      environment: "C#, .NET7, ASP.NET Core, xUnit, NSubstitute, MongoDB, JavaScript,  HTML, CSS, EmotionJS, TypeScript, React 18, Zustand, React Query, React Form, GIT, TeamCity, Octopus Deploy, Jira, SCRUM",
      responsibilities:[
        "Developing and maintaining new features from DB to UI",
        "Moving legacy from Razor to React",
        "Implementing security",
        "Writing unit and integration tests",
      ]
    },
    {
      imageSrc: "./ibby.png",
      title: "IB.BY",
      href: "https://ib.by/",
      description: "The company specializes in creating dynamic websites using Drupal, offering tailored solutions to meet diverse client needs. Leveraging Drupal's flexibility and scalability, they deliver user-friendly interfaces and robust functionalities, empowering businesses to establish a strong online presence.",
      team: "7 developers, 1 designer, 1 SEO, 1 manager",
      role: "Junior Full-Stack developer with Drupal",
      duration: "7 months",
      environment: "Drupal 7/8, PHP, MySQL, HTML, CSS, JavaScript, GIT, Jira, SCRUM", 
      responsibilities:[
        "Creating UI/UX design and implementing it",
        "Developing and maintaining new features",
        "Participating in code reviews",
        "Participating in SCRUM events",
      ]
    },
    {
      imageSrc: "./portfolio.png",
      title: "Portfolio & Studing",
      href: "#",
      description: "This website serves as a showcase of my professional journey, highlighting my skills, projects, and achievements. It offers a comprehensive overview of my expertise and experience, providing insights into my capabilities as a Full-Stack developer.",
      team: "1 developer",
      duration: "1 month",
      role: "Lead Full-Stack Engineer/CEO",
      environment: "C#, .NET8, ASP.NET Core, REST, React 18, Postgres SQL, NuGet, Azure Cloud, AKS, Azure for Postgres, Azure DevOps, CI/CD, Docker, Kubernetes",
      responsibilities:[
        "Creating critical business rules as a separately dll, providing by NuGet",
        "Creating RESTful web-api",
        "Unit, Integration, Load tests",
        "Automate CI/CD via Azure DevOps",
        "Full circle of creation microservice architecture's solution from scratch"
      ]
    }
  ];
  
  export const Backend_skills: Skill[] = [
    {
      skill_name: "C#",
      Image: "./csharp.png",
      width: 80,
      height: 80,
      src: "https://docs.microsoft.com/en-us/dotnet/csharp",
      yearsOfExpirience: 5,
    },
    {
      skill_name: ".NET Framework",
      Image: "./dotnetframework.png",
      width: 80,
      height: 80,
      src: "https://dotnet.microsoft.com/en-us/download/dotnet-framework",
      yearsOfExpirience: 5,
    },
    {
      skill_name: ".NET Core",
      Image: "./netcore.png",
      width: 120,
      height: 120,
      src: "https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core",
      yearsOfExpirience: 5,
    },
    {
      skill_name: "ASP.NET",
      Image: "./aspnet.png",
      width: 120,
      height: 120,
      src: "https://dotnet.microsoft.com/apps/aspnet",
      yearsOfExpirience: 5,
    },
    {
      skill_name: "ASP.NET Core",
      Image: "./aspnetcore.png",
      width: 80,
      height: 80,
      src: "https://dotnet.microsoft.com/apps/aspnet",
      yearsOfExpirience: 5,
    },
    {
      skill_name: "Entity Framework",
      Image: "./entityframework.png",
      width: 140,
      height: 140,
      src: "https://docs.microsoft.com/en-us/ef",
      yearsOfExpirience: 5,
    },
    {
      skill_name: "Entity Framework Core",
      Image: "./entityframeworkcore.png",
      width: 60,
      height: 60,
      src: "https://docs.microsoft.com/en-us/ef/core",
      yearsOfExpirience: 5,
    },
    {
      skill_name: "Quartz .NET",
      Image: "./quartz.png",
      width: 60,
      height: 60,
      src: "https://www.quartz-scheduler.net",
      yearsOfExpirience: 5,
    },
    {
      skill_name: "Unity 3D",
      Image: "./unity.png",
      width: 100,
      height: 100,
      src: "https://unity.com",
      yearsOfExpirience: 2,
    },
  ];
  
  export const Frontend_skill: Skill[] = [
    {
      skill_name: "Html 5",
      Image: "./html-5.png",
      width: 80,
      height: 80,
      src: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
      yearsOfExpirience: 3,
    },
    {
      skill_name: "Css 3",
      Image: "./css-3.png",
      width: 70,
      height: 70,
      src: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      yearsOfExpirience: 3,
    },
    {
      skill_name: "Tailwind Css",
      Image: "./tailwind.png",
      width: 80,
      height: 80,
      src: "https://tailwindcss.com",
      yearsOfExpirience: 1,
    },
    {
      skill_name: "Java Script",
      Image: "./js.png",
      width: 65,
      height: 65,
      src: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      yearsOfExpirience: 5,
    },
    {
      skill_name: "Type Script",
      Image: "./ts.png",
      width: 80,
      height: 80,
      src: "https://www.typescriptlang.org",
      yearsOfExpirience: 2,
    },
    {
      skill_name: "Emotion JS",
      Image: "./emotionjs.png",
      width: 80,
      height: 80,
      src: "https://emotion.sh/docs/introduction",
      yearsOfExpirience: 1,
    },
    {
      skill_name: "React",
      Image: "./react.png",
      width: 80,
      height: 80,
      src: "https://reactjs.org",
      yearsOfExpirience: 1,
    },
    {
      skill_name: "Redux",
      Image: "./redux.png",
      width: 80,
      height: 80,
      src: "https://redux.js.org",
      yearsOfExpirience: 1,
    },
    {
      skill_name: "Zustand",
      Image: "./zustand-icon.webp",
      width: 80,
      height: 80,
      src: "https://zustand.surge.sh",
      yearsOfExpirience: 1,
    },
    {
      skill_name: "React Query",
      Image: "./reactquery.png",
      width: 80,
      height: 80,
      src: "https://react-query.tanstack.com",
      yearsOfExpirience: 1,
    },
  ];
  
  export const Database_skills: Skill[] = [
    {
      skill_name: "MS SQL Server",
      Image: "./mssql.png",
      width: 80,
      height: 80,
      src: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
      yearsOfExpirience: 3,
    },
    {
      skill_name: "My SQL",
      Image: "./mysql.png",
      width: 70,
      height: 70,
      src: "https://www.mysql.com",
      yearsOfExpirience: 1,
    },
    {
      skill_name: "Postger SQL",
      Image: "./postger.png",
      width: 70,
      height: 70,
      src: "https://www.postgresql.org",
      yearsOfExpirience: 1,
    },
    {
      skill_name: "Mongo db",
      Image: "./mongodb.png",
      width: 40,
      height: 40,
      src: "https://www.mongodb.com",
      yearsOfExpirience: 1,
    },
    {
      skill_name: "SQLight",
      Image: "./sqlight.png",
      width: 150,
      height: 150,
      src: "https://www.sqlite.org/index.html",
      yearsOfExpirience: 2,
    },
  ];
  
  export const Devops_skills: Skill[] = [
    {
      skill_name: "Azure DevOps",
      Image: "./azuredevops.png",
      width: 80,
      height: 80,
      src: "https://azure.microsoft.com/en-us/services/devops",
      yearsOfExpirience: 1,
    },
    {
      skill_name: "GitLab CI/CD",
      Image: "./gitlab.png",
      width: 80,
      height: 80,
      src: "https://docs.gitlab.com",
      yearsOfExpirience: 1,
    },
    {
      skill_name: "TeamCity",
      Image: "./teamcity.png",
      width: 50,
      height: 50,
      src: "https://www.jetbrains.com/teamcity",
      yearsOfExpirience: 1,
    },
    {
      skill_name: "Octopus Deploy",
      Image: "./octopus.png",
      width: 50,
      height: 50,
      src: "https://octopus.com",
      yearsOfExpirience: 1,
    },
    {
      skill_name: "Docker ",
      Image: "./docker.png",
      width: 50,
      height: 50,
      src: "https://www.docker.com",
      yearsOfExpirience: 2,
    },
    {
      skill_name: "Kubernetes ",
      Image: "./kubernetes.png",
      width: 50,
      height: 50,
      src: "https://kubernetes.io",
      yearsOfExpirience: 1,
    },
  ];
  
  export const SourceControl_skills: Skill[] = [
    {
      skill_name: "Git",
      Image: "./git.png",
      width: 50,
      height: 50,
      src: "https://git-scm.com",
      yearsOfExpirience: 5,
    },
    {
      skill_name: "Bitbucket",
      Image: "./bitbucket.png",
      width: 50,
      height: 50,
      src: "https://bitbucket.org",
      yearsOfExpirience: 5,
    },
    {
      skill_name: "GitHub",
      Image: "./github.png",
      width: 50,
      height: 50,
      src: "https://github.com",
      yearsOfExpirience: 5,
    },
  ];
  
  export const Soft_skills = [
    {
      skill_name: "Agile Metodology",
      Image: "./agile.png",
      width: 80,
      height: 80,
      href: "https://www.atlassian.com/agile",
      yearsOfExpirience: 5,
    },
  ];
  
  export const AboutMe_Paragraphs : string[] = [
    "As a seasoned Full-Stack developer with over 5 years of experience, I specialize in a variety of essential technologies including C#, .NET, .NET Core, JavaScript, SQL, NoSQL, and Unity3D. My role encompasses a diverse range of responsibilities, from building projects from scratch to designing and implementing new features, refactoring complex code, and providing direct client support.",
    "In project development, I excel at constructing comprehensive solutions that align with client requirements. My expertise extends to deployment processes, ensuring seamless project launches. I am adept at designing and implementing new features, optimizing project functionality, and refactoring code for improved performance and maintainability.",
    "My organizational skills are evident in managing component hierarchies and providing timely hot-fixes to address critical issues. I prioritize client satisfaction, offering transparent communication and support throughout the development process. Additionally, my experience as a business analyst enables me to translate business requirements into technical tasks effectively.",
    "I thrive in fast-paced environments, embracing agile methodologies to adapt to evolving project needs efficiently. With strong problem-solving abilities and excellent soft skills, I collaborate effectively with team members to achieve shared objectives. My proficiency in English at a B2 level facilitates clear communication within the team and with stakeholders.",
  ];