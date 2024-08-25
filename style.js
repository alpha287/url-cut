
// function shortenURL() {
//     var url = document.getElementById('urlInput').value;
//     var result = document.getElementById('result');
    
//     // Placeholder for actual URL shortening logic
//     var shortenedUrl = "http://short.url/" + btoa(url).substring(0,8);
    
//     result.textContent = shortenedUrl;
    
//     // Add animation
//     result.style.transition = 'background-color 0.5s ease-in-out';
//     result.style.backgroundColor = '#ffff99';
    
//     // Reset background color after animation
//     setTimeout(function() {
//       result.style.backgroundColor = '#f2f2f2';
//     }, 500);
//   }

// dialog.show();
// dialog.hide();


// function show() {
//   setInterval(function () {
//     document.getElementById("qr-im").style.display = "block";
        
//   }, 1000);
//}
  function expandBox() {
    const box = document.getElementById('qr-im');
    box.classList.toggle('expanded');
  }
  
  function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
  // function hide() {
  //   document.getElementById("qr-im").style.display = "none";
  // }


