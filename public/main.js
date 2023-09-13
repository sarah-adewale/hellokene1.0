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
const aeIconHover = document.getElementById('ae-icon-hover')
const aeIcon = document.getElementById('ae-icon')
const aiIcon = document.getElementById('ai-icon')
const aiIconHover = document.getElementById('ai-icon-hover')
const psIconHover = document.getElementById('ps-icon-hover')
const figmaIconHover = document.getElementById('figma-icon-hover')
const figmaIcon = document.getElementById('figma-icon')


//page load
window.onload = () => {
  hide(grid)
}

// filter
const addFilterEvents = (trayFilterBtn, gridFilterBtn, tray, grid, trayFilterIcon, gridFilterIcon) => {
  trayFilterBtn.addEventListener('click', () => {
    if(tray){
      show(tray)
      hide(grid)
      trayFilterIcon.style.color = 'white'
      gridFilterIcon.style.color = '#9D9D9F'
    }
  });

  gridFilterBtn.addEventListener('click', () => {
    if(grid){
      hide(tray)
      show(grid)
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