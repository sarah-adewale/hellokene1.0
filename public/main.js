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


//filter
trayFilterBtn.addEventListener('click', () => {
    if(tray){
        tray.style.display = 'block'
        grid.style.display = 'none'
        trayFilterIcon.style.color = 'white'
        gridFilterIcon.style.color = '#9D9D9F'
    }
})

gridFilterBtn.addEventListener('click', () => {
    if(grid){
        tray.style.display = 'none'
        grid.style.display = 'block'
        trayFilterIcon.style.color = '#9D9D9F'
        gridFilterIcon.style.color = 'white'
    }

})


//about
document.addEventListener("keydown", (e) => {
    let name = e.key
    name = name.toLowerCase()
  if (name === 'e') {
    workHistory.style.display = 'block'
    aboutBio.style.display = 'none'
    skill.style.display = 'none'
  }

   if (name === 's') {
    workHistory.style.display = 'none'
    aboutBio.style.display = 'none'
    skill.style.display = 'block'
  }

   if (name === 'r') {
    workHistory.style.display = 'none'
    aboutBio.style.display = 'block'
    skill.style.display = 'none'
  }
  
});

aeBtn.addEventListener('mousemove', () => {
        aeText.style.display = "block"
})

aeBtn.addEventListener('mouseout', () => {
        aeText.style.display = "none"
})

aiBtn.addEventListener('mousemove', () => {
        aiText.style.display = "block"
})

aiBtn.addEventListener('mouseout', () => {
        aiText.style.display = "none"
})

// ps
psBtn.addEventListener('mousemove', () => {
        psText.style.display = "block"
})

psBtn.addEventListener('mouseout', () => {
        psText.style.display = "none"
})

// figma
figmaBtn.addEventListener('mousemove', () => {
        figmaText.style.display = "block"
})

figmaBtn.addEventListener('mouseout', () => {
        figmaText.style.display = "none"
})