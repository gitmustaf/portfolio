const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls');
const sectionButton = document.querySelectorAll('.control'); 
const allSections = document.querySelector('.main-content');
// alert('JS is working');
function handleTransitions(){
  //Handle active button
  for(let i=0; i<sectionButton.length; i++){
    sectionButton[i].addEventListener('click', function(){
      let currentButton = document.querySelectorAll('.active-btn');
      currentButton[0].className = currentButton[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    });
  }

  //Handle active section
  allSections.addEventListener('click', (e) => {
    console.log(e.target);
    const id = e.target.dataset.id;
    if(id){
      sectionButton.forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      //hide other sections
      sections.forEach(section => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  }); 
}
handleTransitions();