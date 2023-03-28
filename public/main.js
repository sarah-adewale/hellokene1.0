const trayFilterBtn = document.getElementById('tray-filter')
const gridFilterBtn = document.getElementById('grid-filter')
const tray = document.getElementById('tray')
const grid = document.getElementById('grid')
const trayFilterIcon = document.querySelector('.ph-list-fill')
const gridFilterIcon = document.querySelector('.ph-grid-four-thin')
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



//page load
window.onload = () => {
    grid.style.display = 'none'
   
}

// filter
const addFilterEvents = (trayFilterBtn, gridFilterBtn, tray, grid, trayFilterIcon, gridFilterIcon) => {
  trayFilterBtn.addEventListener('click', () => {
    if(tray){
      tray.style.display = 'block'
      grid.style.display = 'none'
      trayFilterIcon.style.color = 'white'
      gridFilterIcon.style.color = '#9D9D9F'
    }
  });
  
  gridFilterBtn.addEventListener('click', () => {
    if(grid){
      tray.style.display = 'none'
      grid.style.display = 'block'
      trayFilterIcon.style.color = '#9D9D9F'
      gridFilterIcon.style.color = 'white'
    }
  });
};
addFilterEvents(trayFilterBtn, gridFilterBtn, tray, grid, trayFilterIcon, gridFilterIcon);


//about
const handleKeyPress = (event) => {

  let name = event.key.toLowerCase();
  if (name === 'e') {
    workHistory.style.display = 'block';
    aboutBio.style.display = 'none';
    skill.style.display = 'none';
  } else if (name === 's') {
    workHistory.style.display = 'none';
    aboutBio.style.display = 'none';
    skill.style.display = 'block';
  } else if (name === 'r') {
    workHistory.style.display = 'none';
    aboutBio.style.display = 'block';
    skill.style.display = 'none';
  }

};

document.addEventListener("keydown", handleKeyPress);


// document.addEventListener("keydown", (e) => {
//   const map = {
//     'e': ['block', 'none', 'none'],
//     'r': ['none', 'block', 'none'],
//     's': ['none', 'none', 'block'],
    
//   };
//   const [work, bio, skill] = map[e.key.toLowerCase()] || [];
//   if (work) {
//     workHistory.style.display = work;
//     aboutBio.style.display = bio;
//     skill.style.display = skill;
//   }
// });

// ae events
const aeMouseEvents = (element, textElement) => {
  element.addEventListener('mousemove', () => {
    textElement.style.display = "block";
  });
  
  element.addEventListener('mouseout', () => {
    textElement.style.display = "none";
  });
};

aeMouseEvents(aeBtn, aeText);


// ai event
const aiMouseEvents = (element, textElement) => {
  element.addEventListener('mousemove', () => {
    textElement.style.display = "block";
  });
  
  element.addEventListener('mouseout', () => {
    textElement.style.display = "none";
  });
};

aiMouseEvents(aiBtn, aiText);

// ps event
const psMouseEvents = (element, textElement) => {
  element.addEventListener('mousemove', () => {
    textElement.style.display = "block";
  });
  
  element.addEventListener('mouseout', () => {
    textElement.style.display = "none";
  });
};

psMouseEvents(psBtn, psText);

// figma event
const figmaMouseEvents = (element, textElement) => {
  element.addEventListener('mousemove', () => {
    textElement.style.display = "block";
  });
  
  element.addEventListener('mouseout', () => {
    textElement.style.display = "none";
  });
};

figmaMouseEvents(figmaBtn, figmaText);



