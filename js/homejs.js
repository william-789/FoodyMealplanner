function openMenu (){
    var select = document.getElementById("mainMenu");
    if (select.className === "superNav") {
        select.className += " mobile"; /* superNav.mobile */
    } else {
        select.className = "superNav";
    }
}
