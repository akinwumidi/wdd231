  // Set current year and last modified date in footer
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;