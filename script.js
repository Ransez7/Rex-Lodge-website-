

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let room = document.getElementById("room").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;

    if (room === "") {
        alert("Please select a room!");
        return;
    }

    let days = (new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24);

    if (days <= 0) {
        alert("Invalid dates!");
        return;
    }

    let price = room.includes("15") ? 15 :
                room.includes("25") ? 25 : 40;

    let total = days * price;

    // Show confirmation
    document.getElementById("confirmationCard").style.display = "block";

    document.getElementById("cName").innerText = name;
    document.getElementById("cRoom").innerText = room;
    document.getElementById("cCheckin").innerText = checkin;
    document.getElementById("cCheckout").innerText = checkout;
    document.getElementById("cTotal").innerText = total;

    // SAVE booking
    let booking = {
        name: name,
        email: email,
        room: room,
        checkin: checkin,
        checkout: checkout,
        total: total
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));
});