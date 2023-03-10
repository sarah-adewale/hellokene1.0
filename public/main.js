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
    if(tray){
        tray.style.display = 'block'
        grid.style.display = 'none'
        trayFilterIcon.style.color = 'white'
        gridFilterIcon.style.color = '#9D9D9F'
    }
})

gridFilterBtn.addEventListener('click', function(){
    if(grid){
        tray.style.display = 'none'
        grid.style.display = 'block'
        trayFilterIcon.style.color = '#9D9D9F'
        gridFilterIcon.style.color = 'white'
    }

})


