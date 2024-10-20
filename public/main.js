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
const illustrationsListView = document.querySelector('.illustration-project-list-view')
const illustrationsGridView = document.querySelector('.illustration-project-grid-view')
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
            illustrationsListView.classList.add("hidden")
            illustrationsGridView.classList.remove("hidden")
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
            illustrationsListView.classList.remove("hidden")
            illustrationsGridView.classList.add("hidden")
           
        }
    }

    // Function to handle link clicks
    function handleLinkClick(event) {
        event.preventDefault();
        projectLinks.forEach(link => link.classList.remove("active"));
        event.target.classList.add("active");

        const linkIndex = Array.from(projectLinks).indexOf(event.target);
        const emptyState = document.querySelector('.empty-state')
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
            projectItems[1].classList.remove("hidden");
           
        } else if (linkIndex === 2) {
            projectItems[2].classList.remove("hidden");
            projectItems[3].classList.remove("hidden");
            projectItems[4].classList.remove("hidden");
         
        } else if (linkIndex === 3) {
          projectItems[5].classList.remove("hidden");
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


const setupCardHover = (elements, stylesOnHover) => {
  const addStyle = (element, styles) => Object.assign(element.style, styles);

  const resetStyles = () => {
    Object.keys(elements).forEach(key => elements[key].style = '');
  };

  elements.container.addEventListener('mousemove', () => {
    addStyle(elements.card, stylesOnHover);
    show(elements.imgHover);
    hide(elements.img);

    addStyle(elements.text, { color: '#FCFCFC' });
    addStyle(elements.textSubtitle, { color: '#CECECF' });
    addStyle(elements.timerIcon, { color: '#CECECF' });
    addStyle(elements.timerText, { color: '#FCFCFC' });
    addStyle(elements.hoverBtn, { backgroundColor: '#FCFCFC', boxShadow: 'none' });
    addStyle(elements.btnText, { color: '#0B0A0F' });
    addStyle(elements.btnArrow, { color: '#001433' });
    addStyle(elements.cat, { border: '1px solid #CECECF' });
    addStyle(elements.catIcon, { color: '#CECECF' });
    addStyle(elements.catText, { color: '#FCFCFC' });
    addStyle(elements.cat2, { border: '1px solid #CECECF' });
    addStyle(elements.catText2, { color: '#FCFCFC' });
  });

  elements.container.addEventListener('mouseout', () => {
    resetStyles();
    hide(elements.imgHover);
    show(elements.img);

  });
};

const projectPivoHover = () => {
  const pivoElements = {
    card: document.querySelector('.pivo-portfolio-card'),
    container: document.querySelector('.pivo-project-list-view'),
    imgHover: document.querySelector('.pivo-hover-img'),
    img: document.querySelector('.pivo-img'),
    text: document.querySelector('.pivo-text'),
    textSubtitle: document.querySelector('.pivo-text-subtitle'),
    timerIcon: document.querySelector('.timer-icon'),
    timerText: document.querySelector('.timer-text'),
    hoverBtn: document.querySelector('.pivo-hover-btn'),
    btnText: document.querySelector('.pivo-btn-text'),
    btnArrow: document.querySelector('.pivo-btn-hover-icon'),
    cat: document.querySelector('.project-type-btn'),
    catIcon: document.querySelector('.ph-app-window'),
    catText: document.querySelector('.browser-btn-text'),
    cat2: document.querySelector('.saas-btn'),
    catText2: document.querySelector('.project-type-text'),
  };

  const stylesOnHover = {
    backgroundColor: '#001433',
    cursor: 'pointer',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    border: '1px solid #E4F8E4',
    transition: '0.7s ease-in-out',
    // Add any additional styles for the hover state here
  };

  setupCardHover(pivoElements, stylesOnHover);
};
projectPivoHover()

const portfolioCardHover = () => {

  const portfolioElements = {

    card: document.querySelector('.port-card'),
    container: document.querySelector('.portfolio-project-list-view'),
    imgHover: document.querySelector('.portfolio-hover-img'),
    img: document.querySelector('.portfolio-img'),
    text: document.querySelector('.portfolio-text'),
    textSubtitle: document.querySelector('.portfolio-text-subtitle'),
    timerIcon: document.querySelector('.portfolio-timer-icon'),
    timerText: document.querySelector('.portfolio-timer-text'),
    hoverBtn: document.querySelector('.portfolio-hover-btn'),
    btnText: document.querySelector('.portfolio-btn-text'),
    btnArrow: document.querySelector('.portfolio-btn-hover-icon'),
    cat: document.querySelector('.portfolio-cat-border'),
    catIcon: document.querySelector('.portfolio-ph-globe'),
    catText: document.querySelector('.portflio-browser-btn-text'),
    cat2: document.querySelector('.portfolio-saas-btn'),
    catText2: document.querySelector('.portfolio-project-type-text'),
  };

  const stylesOnHover = {
    backgroundColor: '#0B0A0F',
    cursor: 'pointer',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    border: '1px solid #E4F8E4',
    transition: '0.7s ease-in-out',
    // Specify the styles for the other card hover state here
  };

  setupCardHover(portfolioElements, stylesOnHover);
};

portfolioCardHover()

const gidiganCardHover = () => {

  const gidiganElements = {

    card: document.querySelector('.gidigan-portfolio-card'),
    container: document.querySelector('.gidigan-project-list-view'),
    imgHover: document.querySelector('.gidigan-hover-img'),
    img: document.querySelector('.gidigan-img'),
    text: document.querySelector('.gidigan-text'),
    textSubtitle: document.querySelector('.gidigan-text-subtitle'),
    timerIcon: document.querySelector('.gidigan-timer-icon'),
    timerText: document.querySelector('.gidigan-timer-text'),
    hoverBtn: document.querySelector('.gidigan-hover-btn'),
    btnText: document.querySelector('.gidigan-btn-text'),
    btnArrow: document.querySelector('.gidigan-btn-hover-icon'),
    cat: document.querySelector('.gidigan-cat-border'),
    catIcon: document.querySelector('.gidigan-ph-globe'),
    catText: document.querySelector('.gidigan-browser-btn-text'),
    cat2: document.querySelector('.gidigan-saas-btn'),
    catText2: document.querySelector('.gidigan-project-type-text'),
  }

  const stylesOnHover = {
    backgroundColor: '#0B0A0F',
    cursor: 'pointer',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    border: '1px solid #E4F8E4',
    transition: '0.7s ease-in-out',
    // Specify the styles for the other card hover state here
  };

  setupCardHover(gidiganElements, stylesOnHover);
}

gidiganCardHover()

const liberterraCardHover = () => {

  liberterraElements = {

    card: document.querySelector('.liberterra-portfolio-card'),
    container: document.querySelector('.liberterra-project-list-view'),
    imgHover: document.querySelector('.liberterra-hover-img'),
    img: document.querySelector('.liberterra-img'),
    text: document.querySelector('.liberterra-text'),
    textSubtitle: document.querySelector('.liberterra-text-subtitle'),
    timerIcon: document.querySelector('.liberterra-timer-icon'),
    timerText: document.querySelector('.liberterra-timer-text'),
    hoverBtn: document.querySelector('.liberterra-hover-btn'),
    btnText: document.querySelector('.liberterra-btn-text'),
    btnArrow: document.querySelector('.liberterra-btn-hover-icon'),
    cat: document.querySelector('.liberterra-cat-border'),
    catIcon: document.querySelector('.liberterra-ph-globe'),
    catText: document.querySelector('.liberterra-browser-btn-text'),
    cat2: document.querySelector('.liberterra-saas-btn'),
    catText2: document.querySelector('.liberterra-project-type-text'),

  }

  const stylesOnHover = {
    backgroundColor: '#182C18',
    cursor: 'pointer',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    border: '1px solid #E4F8E4',
    transition: '0.7s ease-in-out',
    // Specify the styles for the other card hover state here
  };

  setupCardHover(liberterraElements, stylesOnHover);
}

liberterraCardHover()

const betweysureCardHover = () => {

  const betweysureElements = {
    card: document.querySelector('.betweysure-portfolio-card'),
    container: document.querySelector('.betweysure-project-list-view'),
    imgHover: document.querySelector('.betweysure-hover-img'),
    img: document.querySelector('.betweysure-img'),
    text: document.querySelector('.betweysure-text'),
    textSubtitle: document.querySelector('.betweysure-text-subtitle'),
    timerIcon: document.querySelector('.betweysure-timer-icon'),
    timerText: document.querySelector('.betweysure-timer-text'),
    hoverBtn: document.querySelector('.betweysure-hover-btn'),
    btnText: document.querySelector('.betweysure-btn-text'),
    btnArrow: document.querySelector('.betweysure-btn-hover-icon'),
    cat: document.querySelector('.betweysure-cat-border'),
    catIcon: document.querySelector('.betweysure-ph-globe'),
    catText: document.querySelector('.betweysure-browser-btn-text'),
    cat2: document.querySelector('.betweysure-saas-btn'),
    catText2: document.querySelector('.betweysure-project-type-text'),
  }

  const stylesOnHover = {
    backgroundColor: '#004047',
    cursor: 'pointer',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    border: '1px solid #E4F8E4',
    transition: '0.7s ease-in-out',
    // Specify the styles for the other card hover state here
  };

  setupCardHover(betweysureElements, stylesOnHover)
}

betweysureCardHover()

const projectGridHover = () => {
  const pivoGridHover = document.querySelector('.pivo-project-grid-view')
  const pivoGridCard = document.querySelector('.grid-info')
  const portfolioGridHover = document.querySelector('.potfolio-project-grid-view')
  const gidiganGridHover = document.querySelector('.gidigan-project-grid-view')
  const liberterraGridHover = document.querySelector('.liberterra-project-grid-view')
  const betweysureGridHover = document.querySelector('.betweysure-project-grid-view')
  const betweysureGridCard = document.querySelector('.grid-info-betweysure')
  const liberterraGridCard = document.querySelector('.grid-info-liberterra')
  const gidiganGridCard = document.querySelector('.grid-info-gidigan')
  const portfolioGridCard = document.querySelector('.grid-info-portfolio')

// pivo
  pivoGridHover.addEventListener('mouseover', () => {
    hide(pivoGridCard)
    
  })

  pivoGridHover.addEventListener('mouseout', () => {
    show(pivoGridCard)
   
  })

  // portfolio
  portfolioGridHover.addEventListener('mouseover', () => {
    hide(portfolioGridCard)
    
  })

  portfolioGridHover.addEventListener('mouseout', () => {
    show(portfolioGridCard)
   
  })

  // gidigan
  gidiganGridHover.addEventListener('mouseover', () => {
    hide(gidiganGridCard)
    
  })

  gidiganGridHover.addEventListener('mouseout', () => {
    show(gidiganGridCard)
   
  })

  // liberterra
  liberterraGridHover.addEventListener('mouseover', () => {
    hide(liberterraGridCard)
    
  })

  liberterraGridHover.addEventListener('mouseout', () => {
    show(liberterraGridCard)
   
  })

  // betweysure
  betweysureGridHover.addEventListener('mouseover', () => {
    hide(betweysureGridCard)
    
  })

  betweysureGridCard.addEventListener('mouseout', () => {
    show(betweysureGridCard)
   
  })
}

projectGridHover() 


const footerIconHover = () => {
  const mediumIcon = document.getElementById('medium-icon')
  const emailIcon = document.getElementById('email-icon')
  const linkedinIcon = document.getElementById('linkedin-icon')

  mediumIcon.addEventListener('mouseover', () => {
   
    
    emailIcon.style.marginRight = '140px'
    emailIcon.style.transition = '0.5s ease-in-out'
    linkedinIcon.style.marginLeft = '30px'
  })

  mediumIcon.addEventListener('mouseout', () => {
 
    
    emailIcon.style.marginRight = ''
    emailIcon.style.transition = '0.5s ease-in-out'
    linkedinIcon.style.marginLeft = ''
  })

  linkedinIcon.addEventListener('mouseover', () => {
    mediumIcon.style.marginRight = '140px'
    mediumIcon.style.transition = '0.5s ease-in-out'
  })

  linkedinIcon.addEventListener('mouseout', () => {
    mediumIcon.style.marginRight = ''
    mediumIcon.style.transition = '0.5s ease-in-out'
  })
}

footerIconHover()

// test

const toggleFullScreenButton = document.querySelector('.button')

toggleFullScreenButton.addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
  
    const image = document.querySelector('.image');
    if (!document.fullscreenElement) {
        image.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
        console.log('works')
    } else {
        document.exitFullscreen();
    }
}



// const newToggleFullScreen = () => {
//   const showFullScreenButton = document.querySelector('.container')
//   const imageToBeEnlarged = document.querySelector('.image');

//   showFullScreenButton.addEventListener("click", () => {
//     if(!document.fullscreenElement){
//       imageToBeEnlarged.requestFullscreen().catch(err => {
//         alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
//       });
//     }else{
//       document.exitFullscreen();
//     }
//     console.log('works')
//   } )
// }

// newToggleFullScreen()

// function newToggleFullScreen(){
//   const fullScreenButton = document.querySelector('.button');
//   const imageToBeEnlarged = document.querySelector('.image');

//   fullScreenButton.addEventListener("click", () => {
//     if (!document.fullscreenElement) {
//       imageToBeEnlarged.requestFullscreen().catch(err => {
//         alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
//       });
//     } else {
//       document.exitFullscreen();
//     }
//     console.log('works');
//   });
// }

// newToggleFullScreen();

// function toggleFullScreen() {
//   const image = document.querySelector('.image');
//   if (!document.fullscreenElement) {
//       image.requestFullscreen().catch(err => {
//           alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
//       });
//       console.log('works');
//   } else {
//       document.exitFullscreen();
//   }
 
// }




