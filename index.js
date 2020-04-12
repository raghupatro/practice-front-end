function setAnnualPrice() {
  document.querySelector(".basic .price").innerHTML = "199.99";
  document.querySelector(".professional .price").innerHTML = "249.99";
  document.querySelector(".master .price").innerHTML = "399.99";
}
function setMonthlyPrice() {
  document.querySelector(".basic .price").innerHTML = "19.99";
  document.querySelector(".professional .price").innerHTML = "24.99";
  document.querySelector(".master .price").innerHTML = "39.99";
}
document
  .getElementById("price-checkbox")
  .addEventListener("click", function (event) {
    if (document.getElementById("price-checkbox").checked === true) {
      setAnnualPrice();
    } else setMonthlyPrice();
  });
