const trayFilterBtn = document.getElementById('tray-filter')
const gridFilterBtn = document.getElementById('grid-filter')
const tray = document.getElementById('tray')
const grid = document.getElementById('grid')
const trayFilterIcon = document.querySelector('.ph-list-fill')
const gridFilterIcon = document.querySelector('.ph-grid-four-thin')


//page load
window.onload = function(){
    grid.style.display = 'none'
}

//filter
trayFilterBtn.addEventListener('click', function(){
    console.log('it works')
    if(tray){
        tray.style.display = 'block'
        grid.style.display = 'none'
        trayFilterIcon.style.color = 'white'
        gridFilterIcon.style.color = '#9D9D9F'
    }
})

gridFilterBtn.addEventListener('click', function(){
    console.log('it fucking works')
    if(grid){
        tray.style.display = 'none'
        grid.style.display = 'block'
        document.querySelector('.ph-list-fill').style.color = '#9D9D9F'
        document.querySelector('.ph-grid-four-thin').style.color = 'white'
    }
})


