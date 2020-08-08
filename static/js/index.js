/* Get HTML menu elements by querySelector */
const menu = document.querySelector('.menu')
const heroTitle = document.querySelector('h1')
const postCover = document.querySelector('.post-cover')
const burgerButton = document.querySelector('#burger-button')    

/* To improve performance of website I added a screen media query.
And only if the query matches to the max-width value, the event
listeners are implemented */
const ipad = window.matchMedia('screen and (max-width: 767px)')
ipad.addListener(validation)

/* Validates that media query matches in order to listen menu events */
function validation(event) {
  if(event.matches) {
    /* Listening events in burgerButton to toggle menu*/
    burgerButton.addEventListener('click', hideShow)

    /* Listening events in menu options to hide it when one is clicked */
    document.querySelector('.link-proyectos').addEventListener('click', hideShow)
    document.querySelector('.link-experiencia').addEventListener('click', hideShow)
    document.querySelector('.link-contacto').addEventListener('click', hideShow)
    document.querySelector('.link-blog').addEventListener('click', hideShow)
  } else {
    /* Removes event listeners to free memory */
    burgerButton.removeEventListener('click', hideShow)
    document.querySelector('.link-proyectos').removeEventListener('click', hideShow)
    document.querySelector('.link-experiencia').removeEventListener('click', hideShow)
    document.querySelector('.link-blog').removeEventListener('click', hideShow)
  }
}

validation(ipad)

/* Function to hide and show menu */
function hideShow() {
  if(menu.classList.contains('is-active')) {
    /* Removes classes in order to hide menu and show heroTitle */
    menu.classList.remove('is-active')
    
    setTimeout(() => {
      heroTitle.classList.remove('menu-is-active')
    }, 85)

    setTimeout(() => {
      postCover.classList.remove('menu-is-active')
    }, 200)
  } else {
    /* Adds classes in order to show menu and hide heroTitle */
    menu.classList.add('is-active')
    heroTitle.classList.add('menu-is-active')   
    postCover.classList.add('menu-is-active') 
  }
}
