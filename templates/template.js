fetch('templates/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

// fetch('templates/header.html')
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById('header').innerHTML = data;
//   });

fetch('templates/banner.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('banner').innerHTML = data;
  });