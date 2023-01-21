const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const selectedValue = document.querySelector('input[name="route"]:checked').value;
  
  localStorage.setItem("selectedRoute", selectedValue);
});