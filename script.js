var navLinks = document.getElementsByClassName('nav-link');
var contents = document.getElementsByClassName('content');
var searchLinks = document.getElementsByClassName('search-link');

// Function to toggle visibility of sections
function toggleSection(targetId) {
  for (var j = 0; j < contents.length; j++) {
    if (contents[j].id === targetId) {
      contents[j].style.display = 'block';
    } else {
      contents[j].style.display = 'none';
    }
  }
}

// Event listener for nav links
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(e) {
    e.preventDefault();
    var targetId = this.getAttribute('data-target');
    toggleSection(targetId);
    
    // Remove active class from all nav links
    for (var k = 0; k < navLinks.length; k++) {
      navLinks[k].classList.remove('active');
    }
    // Add active class to the clicked nav link
    this.classList.add('active');
  });
}

// Event listener for search links
for (var i = 0; i < searchLinks.length; i++) {
  searchLinks[i].addEventListener('click', function(e) {
    e.preventDefault();
    var targetId = this.getAttribute('data-target');
    toggleSection(targetId);
  });
}
