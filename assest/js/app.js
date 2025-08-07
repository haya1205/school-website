
  function searchSchool() {
    const input = document.getElementById("searchInput").value.trim();
    if (input === "") {
      alert("Please enter a school name to search.");
    } else {
      alert("Searching for: " + input);

    }
  }

