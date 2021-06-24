// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Anna",
  middleName: "",
  lastName: "Funsten",
  message: " My goal is to use my medical background to create data driven and machine learning solutions for public health.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/alfunsten",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/anna-funsten/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/anna_funsten.jpeg"),
  imageSize: 350,
  message:
    "Creative and insightful data scientist with enthusiasm for research and public health. Trained and practiced as a pediatric nurse practitioner with a deep knowledge in disease processes and strong communication skills with patients and co-workers. Natural intuition to interpret, problem solve and visualize data.",
  resume: "https://docs.google.com/document/d/1pWaBVcPeoYBSRth_YDQtAnW6v8sZc1wNS--1QzMO_24/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "alfunsten", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['Ear-Effusion-Identifier', 'food-borne-disease-outbreaks-and-hospitalizations', 'movie-facts-vs-descriptions-nlp'],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python"},
    { name: "Numpy"},
    { name: "Pandas"},
    { name: "Sklearn"},
    { name: "Matplotlib"},
    { name: "Seaborn"},
    { name: "Plotly"},
    { name: "Machine Learning"},
    { name: "Natural Language Processing"},
    { name: "Data Cleaning and EDA"},
    { name: "Statistics"},
    { name: "Advanced Nursing"}
  ],
  softSkills: [
    { name: "Organized"},
    { name: "Thorough"},
    { name: "Adaptable"},
    { name: "Multifaceted"},
    { name: "Empathetic"},
    { name: "Innovative"},
    { name: "Atriculate"},
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
  "I'm currently looking for full-time data analyst or data science opportunity! Please feel free to email me at",
  email: "alfunsten@gmail.com",
};

const experiences = {
  show: true,
  heading: "Education",
  data: [
    {
      role: 'General Assembly Data Science Fellow',// Here Add Company Name
      companylogo: require('../assets/img/ga.png'),
      date: 'March 2021 – June 2021',
    },
    {
      role: 'MSN-Pediatric Nurse Practitioner Primary Care',
      companylogo: require('../assets/img/vanderbilt.png'),
      date: 'Aug 2015 – Aug 2017',
    },
    {
      role: 'BS in Biopsychology, Cognition, and Neuroscience with a minor in Applied Statistics',
      companylogo: require('../assets/img/michigan.png'),
      date: 'Sept 2011 – May 2015',
    },
  ]
}


// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
