function locoScroll () {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#portfolio"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#portfolio", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#portfolio").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


};
locoScroll();

var projectsList = [
    {
        img:"./images/farmerspalm.gif",
        heading:"Farmers Plam",
        para:"A shopping created with ReactJS and Express",
        tags:"#ReactJS #TailWind #Express #NodeJS #Redux #cookies #Mongo",
        href:"https://farmerspalmapp.onrender.com/"
    },
    {
        img:"./images/blogify.png",
        heading:"Blogify-App for Blogging",
        para:"A social media app with React, Node,Express and more",
        tags:"#Express #ReactJS #CSS #Express #NodeJS #MongoDB #MaterialUI",
        href:"https://blogify-by-arya.onrender.com"
    },
    {
        img:"./images/rejouice.gif",
        heading:"UI/UX Animated Web App",
        para:"Using GSAP,ScrollTrigger & Locomotive.A JS Frameworks made it easy",
        tags:"#GSAP #ScrollTrigger #JavaScript #Locomotive",
        href:"https://gowthamarya.github.io/rejouice/"
    },
    {
        img:"./images/simon-game.png",heading:"Simon Game",
        para:"A logical game to play & creating an appping.",
        tags:"#JS #CSS3 #HTML5",
        href:"https://gowthamarya.github.io/simon-game/"
    }, 
    {
        img:"./images/tin-dog.png",heading:"Tin Dog, A shopping for dogs food.",
        para:"My first cloned website of Tin-Dog.By this I have started my jounry with Fronted Interfaces",
        tags:"JS #CSS3 #HTML5 BOOTSTRAP",
        href:"https://gowthamarya.github.io/tindog-clone/"
    },
    {
        img:"./images/drum-kit.png",heading:"A stress releif web site",
        para:"A Music app,By pressing keys rethem connects with it..",
        tags:"JS #CSS3 #HTML5 BOOTSTRAP",
        href:"https://gowthamarya.github.io/Drum-Kit/"
    }
];

function displayProjects() {
    console.log("working 1");
    var dataContainer = document.getElementById("projects-field");
    projectsList.forEach((projectItem)=>{
        var project = document.createElement("a");
        project.href = projectItem.href;
        project.target="_blank";
        project.classList.add("project");
        var heading = document.createElement("h3");
        heading.textContent=projectItem.heading;
        project.appendChild(heading);
        var paragraph = document.createElement("p");
        paragraph.textContent=projectItem.para;
        project.appendChild(paragraph);
        var tags = document.createElement("p");
        tags.textContent=projectItem.tags;
        project.appendChild(tags);
        var image = document.createElement("img");
        image.src = projectItem.img;
        image.classList.add("projectImg");
        image.alt = projectItem.heading;
        project.appendChild(image);
        dataContainer.appendChild(project);
    })
};

displayProjects();