document.addEventListener("DOMContentLoaded", function() {
    const totalPrice = document.getElementById("totalPrice");
    const radios = document.querySelectorAll("input[name='unit']");
    
    radios.forEach(radio => {
        radio.addEventListener("change", function() {
            totalPrice.textContent = $${this.value}.00 USD;
        });
    });
});