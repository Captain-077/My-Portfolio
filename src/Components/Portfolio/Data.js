import StudentApp from "../../assests/thumnails/2.jpg"
import shoppingCart from "../../assests/thumnails/4.jpg"
import bgChanger from '../../assests/thumnails/1.jpg'
import BMI from '../../assests/thumnails/3.jpg'
import MusicPlayer from '../../assests/thumnails/5.jpg'
import WeatherApp from '../../assests/thumnails/6.jpg'



export const ProjectsData = [
    {
        id: 1,
        category: "React Projects",
        title: 'Student management App',
        image: StudentApp,
        description: "Efficiently add, edit, and delete information via intuitive forms and a dynamic table. Simplify data management with ease.",
        link: 'https://student-manage-system.vercel.app/',
        techstack: "#HTML, #CSS, #JS, #Rest-APIs, #React-Router, #React",
        github: "https://github.com/Captain-077/My-Crud-App"
    },
    {
        id: 2,
        category: "React Projects",
        title: 'Shopping Cart App (Pending....)',
        image: shoppingCart,
        description: "A simple Shopping cart App",
        link: 'https://nakul-ecommerce-app.vercel.app/',
        techstack: "#HTML, #CSS, #JS, #Rest-APIs, #React-Router, #React, #Redux",
        github: "https://github.com/Captain-077/Shopping-Cart-App"
    },

    {
        id: 3,
        category: "Mini Js projects",
        title: 'Music Player',
        image: MusicPlayer,
        description: "A simple music player.",
        link: 'https://music-player-mu-tawny.vercel.app/',
        techstack: "#HTML, #CSS, #JS",
        github: "https://github.com/Captain-077/Music_Player"
    },
    {
        id: 4,
        category: "Mini Js projects",
        title: 'BAckgorund Color Changer',
        image: bgChanger,
        description: "A simple Background color changer site.",
        link: 'https://background-color-changer-lac.vercel.app/',
        techstack: "#HTML, #CSS, #JS",
        github: "https://github.com/Captain-077/BackGround-Color-Changer"
    },
    {
        id: 5,
        category: "Mini Js projects",
        title: 'BMI calculator',
        image: BMI,
        description: "A simple BMI calculator website.",
        link: 'https://bmi-calculator-mu-ecru.vercel.app/',
        techstack: "#HTML, #CSS, #JS",
        github: "https://github.com/Captain-077/BMI-Calculator"
    },
    {
        id: 6,
        category: "React Projects",
        title: 'Weather App',
        image: WeatherApp,
        description: "A simple weather app",
        link: 'https://weather-app-delta-orpin-27.vercel.app/',
        techstack: "#HTML, #CSS, #JS, #Rest-APIs, #React",
        github: "https://github.com/Captain-077/weather-app"
    }
  
  
];


export const ProjectsNav = [

{
    name:"All"
},

{
    name:"React Projects"
},

{
    name:"Mini Js projects"
},


]


