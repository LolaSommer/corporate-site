const navLinks = document.querySelectorAll('.header__link');
 const sections = document.querySelectorAll('section'); 
 navLinks.forEach(link=>{ 
    link.addEventListener('click', ()=>{ 
        navLinks.forEach(l => l.classList.remove('active')); 
        link.classList.add('active'); 
    }) 
}) 
function updateOnScroll() { 
    const scrollY = window.scrollY + window.innerHeight / 2; 
    let activeSection = null; 
    sections.forEach((section) => { 
        const top = section.offsetTop; 
        const bottom = top + section.offsetHeight; 
        if (scrollY >= top && scrollY < bottom) { 
            activeSection = section;
         } 
        }); 
        if(activeSection){ 
            navLinks.forEach(link =>{ 
                link.classList.remove('active');
                 const href = link.getAttribute('href'); 
                 if(href === '#' + activeSection.id){
                     link.classList.add('active'); 
                    } 
                }) 
            } 
        }
        window.addEventListener('scroll', updateOnScroll);



