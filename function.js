window.onload = function() {
    fetch('menu.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('menu').innerHTML = data;
      });
  };
  