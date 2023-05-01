const tabs = document.querySelectorAll('.btn_tab');
const all_content = document.querySelectorAll('.mlbb');

tabs.forEach((tab, index)=>{
  tab.addEventListener('click', (e) => {
    tabs.forEach(tab=>{tab.classList.remove('memek')});
    tab.classList.add('memek')
    
    all_content.forEach(content=>{content.classList.remove('card-player-active')});
    all_content[index].classList.add('card-player-active')
  })
})