
  function showMessage(schoolName) {
      alert("More info coming soon for: " + schoolName);
    }

  
  window.addEventListener('load', () => {
    const searchContainer = document.getElementById('searchContainer');
    setTimeout(() => {
      searchContainer.classList.add('active');
    }, 300);
  });

  const searchInput = document.getElementById('schoolSearch');
  const cardsContainer = document.getElementById('cardsContainer');
  const cards = Array.from(cardsContainer.getElementsByClassName('card'));

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    cards.forEach((card) => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      if (title.includes(query) && query.length > 0) {
        // Highlight matched cards and move to top
        card.classList.add('highlight');
        cardsContainer.prepend(card);
      } else {
        card.classList.remove('highlight');
      }
    });

    // If search is empty, reset highlights and order
    if (query.length === 0) {
      cards.forEach((card) => {
        card.classList.remove('highlight');
        cardsContainer.appendChild(card);
      });
    }
  });

  // Optional: show message function for card clicks
  function showMessage(name) {
    alert('You clicked on ' + name);
  }