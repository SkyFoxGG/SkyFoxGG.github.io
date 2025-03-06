




const registrationBtn = document.getElementById("registration-btn");
const myModal = document.getElementById("myModal");
const closeBtn = document.getElementById("close-btn");

registrationBtn.addEventListener("click", function () {
    console.log("Кнопка нажата"); // Добавим для отладки
    console.log("Текущий display:", myModal.style.display); // Добавим для отладки

    if (myModal.style.display !== "block") {
        myModal.style.display = "block";
    } else {
        myModal.style.display = "none";
    }
});

closeBtn.addEventListener("click", function () {
    console.log("Кнопка нажата"); // Добавим для отладки
    console.log("Текущий display:", myModal.style.display); // Добавим для отладки

    if (myModal.style.display !== "none") {
        myModal.style.display = "none";
    } else {
        myModal.style.display = "block";
    }
});


































