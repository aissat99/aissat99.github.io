// changing the style of the header when the href is the current page
const currentPage = window.location.href; // Get current page path
const currentPagehref = currentPage.substring(currentPage.lastIndexOf('/') + 1);    // removing the full URL until the page indexer, for it to match with what I wrote in the html file
// console.log(currentPagehref);

// navLinks.forEach(link => {
//     // console.log(link.getAttribute('href'));
//     if (link.getAttribute('href') === currentPagehref) {
//         link.classList.add('active'); // Add 'active' class to the current page link
//         console.log("added a new class");
//     }
//     else {
//         link.classList.remove('active');
//     }
// });

const navLinks = document.querySelectorAll('.menu a'); // Select all links
navLinks.forEach(link => {
    link.addEventListener('click', function(){
        // remove all the styles of the items
        navLinks.forEach(element => {
            element.classList.remove('active');
        });
        // then only add a class to the CLICKED element
        this.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.menu a'); // Select all links
    navLinks.forEach(link => {
        link.addEventListener('click', function(){
            // remove all the styles of the items
            navLinks.forEach(element => {
                element.classList.remove('active');
            });
            // then only add a class to the CLICKED element
            this.classList.add('active');
        });
    });
});

// document.getElementById('menu').addEventListener('click', function() {
//     this.style.backgroundColor = 'blue';
//     this.style.color = 'white';
//   });
  
//   document.getElementById('menu').addEventListener('mouseout', function() {
//     this.style.backgroundColor = ''; // Reset to default
//     this.style.color = ''; // Reset to default
//   });


// display and mask footer sticky elements depending on the scroll position
window.addEventListener('scroll', function() {
    var stickyElement = document.getElementsByClassName('copyright');
    var footer = document.querySelector('footer');
    
    // Show or hide the sticky element based on scroll position
    if (isElementInViewport(footer)) {
        for(let i = 0; i < stickyElement.length; i++)
        {
            stickyElement[i].style.display = 'block';
        }
        console.log("hita");
    } else {
        for(let i = 0; i < stickyElement.length; i++)
        {
            stickyElement[i].style.display = 'none';
        }
      console.log('nope');
    }
});
console.log('helloooooooo');

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// // Usage example:
// var element = document.getElementById('yourElementId');
// if (isElementInViewport(element)) {
//     console.log('Element is visible on the screen');
// } else {
//     console.log('Element is not visible on the screen');
// }

  