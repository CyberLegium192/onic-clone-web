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




