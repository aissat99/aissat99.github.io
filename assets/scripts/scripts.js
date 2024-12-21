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

  