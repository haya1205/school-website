
    const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  
  
  
  
  
  
  function searchSchool() {
    const input = document.getElementById("searchInput").value.trim();
    if (input === "") {
      alert("Please enter a school name to search.");
    } else {
      alert("Searching for: " + input);

    }
  }

