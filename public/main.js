const workHistory = document.getElementById('work-history')
const skill = document.getElementById('skill')
const aboutBio = document.getElementById('about-bio')
const aeBtn = document.getElementById('ae-btn')
const aeText = document.getElementById('ae-text')
const aiText = document.getElementById('ai-text')
const aiBtn = document.getElementById('ai-btn')
const psBtn = document.getElementById('ps-btn')
const figmaBtn = document.getElementById('figma-btn')
const psText = document.getElementById('ps-text')
const figmaText = document.getElementById('figma-text')
const aeIconHover = document.getElementById('ae-icon-hover')
const aeIcon = document.getElementById('ae-icon')
const aiIcon = document.getElementById('ai-icon')
const aiIconHover = document.getElementById('ai-icon-hover')
const psIconHover = document.getElementById('ps-icon-hover')
const figmaIconHover = document.getElementById('figma-icon-hover')
const figmaIcon = document.getElementById('figma-icon')
const emptyState = document.getElementById('empty-state')
const projectLinks = document.querySelectorAll(".portfolio-nav-links a");
const gridButton = document.getElementById("grid-filter");
const listButton = document.getElementById("tray-filter");
const projects = document.querySelector(".projects");
const projectItems = document.querySelectorAll(".project-item");
const pivoListView = document.querySelector('.pivo-project-list-view')
const pivoGridView = document.querySelector('.pivo-project-grid-view')
const portfolioListView = document.querySelector('.portfolio-project-list-view')
const portfolioGridView = document.querySelector('.potfolio-project-grid-view')
const gidiganListView = document.querySelector('.gidigan-project-list-view')
const gidiganGridView = document.querySelector('.gidigan-project-grid-view')
const liberterraListView = document.querySelector('.liberterra-project-list-view')
const liberterraGridView = document.querySelector('.liberterra-project-grid-view')
const betweysureListView = document.querySelector('.betweysure-project-list-view')
const betweysureGridView = document.querySelector('.betweysure-project-grid-view')
const trayFilterIcon = document.querySelector('.ph-list-fill')
const gridFilterIcon = document.querySelector('.ph-grid-four-thin')



document.addEventListener("DOMContentLoaded", () => {


    // Function to toggle between list and grid view
    function toggleView(view) {
        if (view === "grid") {
            projects.classList.remove("list-view");
            pivoListView.classList.add("hidden")
            pivoGridView.classList.remove("hidden")
            portfolioListView.classList.add("hidden")
            portfolioGridView.classList.remove("hidden")
            gidiganListView.classList.add("hidden")
            gidiganGridView.classList.remove("hidden")
            liberterraListView.classList.add("hidden")
            liberterraGridView.classList.remove("hidden")
            betweysureListView.classList.add("hidden")
            betweysureGridView.classList.remove("hidden")
        } else {
            projects.classList.add("list-view");
            pivoListView.classList.remove("hidden")
            pivoGridView.classList.add("hidden")
            portfolioListView.classList.remove("hidden")
            portfolioGridView.classList.add("hidden")
            gidiganListView.classList.remove("hidden")
            gidiganGridView.classList.add("hidden")
            liberterraListView.classList.remove("hidden")
            liberterraGridView.classList.add("hidden")
            betweysureListView.classList.remove("hidden")
            betweysureGridView.classList.add("hidden")
        }
    }

    // Function to handle link clicks
    function handleLinkClick(event) {
        event.preventDefault();
        projectLinks.forEach(link => link.classList.remove("active"));
        event.target.classList.add("active");

        const linkIndex = Array.from(projectLinks).indexOf(event.target);

        // Hide all project items
        projectItems.forEach(item => item.classList.add("hidden"));

      
        if (linkIndex === 0) {
            // Show the first 3 projects
            projectItems[0].classList.remove("hidden");
            projectItems[1].classList.remove("hidden");
            projectItems[2].classList.remove("hidden");
        } else if (linkIndex === 1) {
            // Show only the first project
            projectItems[0].classList.remove("hidden");
        } else if (linkIndex === 2) {
            // Show all 5 projects
            projectItems.forEach(item => item.classList.remove("hidden"));
        } else if (linkIndex === 3) {
            // Show an empty state (all hidden)
        }
    }

    // Add click event listeners
    projectLinks.forEach(link => link.addEventListener("click", handleLinkClick));

    gridButton.addEventListener("click", () => {
      toggleView("grid")
      trayFilterIcon.style.color = '#9D9D9F'
      gridFilterIcon.style.color = 'white'});
    
      listButton.addEventListener("click", () => {
      toggleView("list")
       trayFilterIcon.style.color = 'white'
       gridFilterIcon.style.color = '#9D9D9F'
    });

    // set the default view and handle link clicks
    toggleView("list");
    projectLinks[0].click(); // Simulate a click on the first link
});



//about
const handleKeyPress = (event) => {

  let name = event.key.toLowerCase();

  if (name === 'e') {
    show(workHistory)
    hide(aboutBio)
    hide(skill)
  }

  if (name === 's') {
    hide(workHistory)
    hide(aboutBio)
    show(skill)

  }

  if (name === 'r') {
    hide(workHistory)
    show(aboutBio)
    hide(skill)
  }

};

document.addEventListener("keydown", handleKeyPress);


// ae events
const aeMouseEvents = (element, textElement) => {
  element.addEventListener('mousemove', () => {
    show(textElement)
    show(aeIconHover)
    hide(aeIcon)

  });

  element.addEventListener('mouseout', () => {
    hide(textElement)
    hide(aeIconHover)
    show(aeIcon)

  });
};

aeMouseEvents(aeBtn, aeText);


// ai event
const aiMouseEvents = (element, textElement) => {
  element.addEventListener('mousemove', () => {
    show(textElement)
    show(aiIconHover)
    hide(aiIcon)

  });

  element.addEventListener('mouseout', () => {
    hide(textElement)
    hide(aiIconHover)
    show(aiIcon)
  });
};

aiMouseEvents(aiBtn, aiText);

// ps event
const psMouseEvents = (element, textElement) => {
  element.addEventListener('mousemove', () => {
    show(textElement)
    show(psIconHover)

  });

  element.addEventListener('mouseout', () => {
    hide(textElement)
    hide(psIconHover)

  });
};

psMouseEvents(psBtn, psText);

// figma event
const figmaMouseEvents = (element, textElement) => {
  element.addEventListener('mousemove', () => {
    show(textElement)
    show(figmaIconHover)
    hide(figmaIcon)

  });

  element.addEventListener('mouseout', () => {
    hide(textElement)
    hide(figmaIconHover)
    show(figmaIcon)

  });
};

figmaMouseEvents(figmaBtn, figmaText);


const hide = (element) => {
   if(element){
      element.style.display = 'none'
   }
}

const show = (element) => {
  if(element){
    element.style.display = 'block'
  }
}







