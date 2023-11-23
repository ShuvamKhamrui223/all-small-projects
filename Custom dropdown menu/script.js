const dropdownarrow = document.getElementById("dropdownArrow"),
    menuBar = document.querySelector(".menuBar"),
    menuList = document.querySelector(".menuList"),
    selectedOption = document.querySelector(".selectedOption");

dropdownarrow.addEventListener("click", () => {
    menuList.classList.contains("on") ? menuList.classList.remove("on") : menuList.classList.add("on");
})

/* menuBar.addEventListener("click", () => {
    menuList.classList.contains("on") ? menuList.classList.remove("on") : menuList.classList.add("on");
}) */

menuList.childNodes.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
        selectedOption.innerText = menuItem.innerText;
        menuList.classList.remove("on")
    })
})
