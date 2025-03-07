




const registrationBtn = document.getElementById("registration-btn");
const myModal = document.getElementById("myModal");
const closeBtn = document.getElementById("close-btn");
const moreBtn = document.getElementById("more");
const imageHidden = document.getElementById("image-hidden");
const registrationMenuBtn = document.getElementById("registration-menu-btn");
const menuModal = document.getElementById("menu-modal");
const closeMenuBtn = document.getElementById("close-menu-btn");

if (registrationBtn){
registrationBtn.addEventListener("click", function () {
    console.log("Кнопка нажата"); // Добавим для отладки
    console.log("Текущий display:", myModal.style.display); // Добавим для отладки

    if (myModal.style.display !== "block") {
        myModal.style.display = "block";
    } else {
        myModal.style.display = "none";
    }
});
}

if (closeBtn){
    closeBtn.addEventListener("click", function () {
    console.log("Кнопка нажата"); // Добавим для отладки
    console.log("Текущий display:", myModal.style.display); // Добавим для отладки

    if (myModal.style.display !== "none") {
        myModal.style.display = "none";
    } else {
        myModal.style.display = "block";
    }
});
}

if (moreBtn){
moreBtn.addEventListener("click", function () {
    console.log("Кнопка нажата"); // Добавим для отладки
    console.log("Текущий display:", imageHidden.style.display); // Добавим для отладки

    if (imageHidden.style.display !== "flex") {
        imageHidden.style.display = "flex";
        moreBtn.style.display = "none";
    } else {
        imageHidden.style.display = "none";
    }
});
}

if (registrationMenuBtn){
    registrationMenuBtn.addEventListener("click", function () {
        console.log("Кнопка нажата"); // Добавим для отладки
        console.log("Текущий display:", menuModal.style.display); // Добавим для отладки
    
        if (menuModal.style.display !== "block") {
            menuModal.style.display = "block";
        } else {
            menuModal.style.display = "none";
        }
    });
    }

    if (closeMenuBtn){
        closeMenuBtn.addEventListener("click", function () {
        console.log("Кнопка нажата"); // Добавим для отладки
        console.log("Текущий display:", menuModal.style.display); // Добавим для отладки
    
        if (menuModal.style.display !== "none") {
            menuModal.style.display = "none";
        } else {
            menuModal.style.display = "block";
        }
    });
    }





























