import StudentApp from "../../assests/student_app.png"
import shoppingCart from "../../assests/shopping_cart.png"
import bgChanger from '../../assests/thumnails/1.jpg'


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
        category: "Mini Js projects",
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
        title: 'BAckgorund Color Changer',
        image: bgChanger,
        description: "A simple Background color changer site.",
        link: 'https://background-color-changer-lac.vercel.app/',
        techstack: "#HTML, #CSS, #JS",
        github: "https://github.com/Captain-077/BackGround-Color-Changer"
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


