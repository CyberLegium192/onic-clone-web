const menu = document.querySelector('.humberger');
const sideBar = document.querySelector('.side-bar');
const sidebarClose = document.querySelector('.side-bar i');
const sidebarContainer = document.querySelector('.container-sidebar');

// MENU CLICK
menu.onclick = () =>{
  sidebarContainer.classList.toggle('active')
  sideBar.classList.add('active2')
}
sidebarClose.onclick = () =>{
  sidebarContainer.classList.remove('active')
  sideBar.classList.remove('active2')

}
// CLOSE SIDEBAR AT RANDOM CLICK
document.addEventListener("click", function(e) {
  if (!sideBar.contains(e.target) && !sidebarClose.contains(e.target) && !menu.contains(e.target)) {
    sidebarContainer.classList.remove('active')
    sideBar.classList.remove("active2")
  }
})


const ml = document.querySelector('.mlbb-click')
const pubg = document.querySelector('.pubg-click')
const ff = document.querySelector('.ff-click')

function mlcta(){
  ml.classList.add('memek')
  pubg.classList.remove('memek')
  ff.classList.remove('memek')
  document.querySelector('.mlbb').classList.add('card-player-active')
  document.querySelector('.pubg').classList.remove('card-player-active')
  document.querySelector('.ff').classList.remove('card-player-active')
}
function pubgcta(){
  ml.classList.remove('memek')
  pubg.classList.add('memek')
  ff.classList.remove('memek')
  document.querySelector('.mlbb').classList.remove('card-player-active')
  document.querySelector('.pubg').classList.add('card-player-active')
  document.querySelector('.ff').classList.remove('card-player-active')
}
function ffcta(){
  ml.classList.remove('memek')
  pubg.classList.remove('memek')
  ff.classList.add('memek')
  document.querySelector('.mlbb').classList.remove('card-player-active')
  document.querySelector('.pubg').classList.remove('card-player-active')
  document.querySelector('.ff').classList.add('card-player-active')
}

