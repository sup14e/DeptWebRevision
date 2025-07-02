fetch('templates/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

fetch('templates/navbar.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById('navbar').innerHTML = data;
});

fetch('templates/banner.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('banner').innerHTML = data;
  });

