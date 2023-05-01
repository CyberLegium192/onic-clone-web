const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.ml-schedule');

tabs.forEach((tab, index)=>{
  tab.addEventListener('click', (e) => {
    tabs.forEach(tab=>{tab.classList.remove('memek')});
    tab.classList.add('memek')
    
    all_content.forEach(content=>{content.classList.remove('card-active')});
    all_content[index].classList.add('card-active')
  })
})