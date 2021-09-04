/*
    this module contains all the logic pertaining to the pop-up modal form on UI,
    whereby each field will provide the "value" for its corresponding "key"
    defined in Profile object constructor.
*/

//a function that "refreshes" modal form fields from "update" mode:
const resetModal = () => {
    document.getElementById("modaltitle").innerHTML = "new check-in";
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("notes-input").value = "";
    document.getElementById("check-in-by").value = "";
    document.getElementById("check-in-time").value = "09:00";
}
//a function that displays/hides modal popup
const toggleModal = () => {
    document.querySelector(".modal") //selecting the modal element
    .classList.toggle("modal--hidden"); //"turning off" the classlist that hides the class
};

//eventlistener for when 'esc' is pressed; to close modalform:

document.addEventListener("keydown", e => {
    if(e.keyCode == 27) {
        if (!document.getElementById("submit").classList.contains("button--hidden")) {
            document.getElementById("submit").classList.toggle("button--hidden");
        }
        else if (!document.getElementById("update").classList.contains("button--hidden")) {
            document.getElementById("update").classList.toggle("button--hidden");
        }
        toggleModal();
    }
});

//another eventlistener for when "×" (close) button inside the modal is clicked
document.querySelector("#close").addEventListener("click", () => {

    //if submitbtn is not hidden from modal, hide it!
    if (!document.getElementById("submit").classList.contains("button--hidden")) {
        document.getElementById("submit").classList.toggle("button--hidden");
    }
    //if updatebtn is not hidden from modal, hide it too!
    if (!document.getElementById("update").classList.contains("button--hidden")) {
    document.getElementById("update").classList.toggle("button--hidden");
    }
    toggleModal();
    resetModal();
});

// event listener to add profile to list when form is submitted
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (event) => {
    if (!document.getElementById("submit").classList.contains("button--hidden")) {
        document.getElementById("submit").classList.toggle("button--hidden");
    }
    //preventDefault prevents the form from its default activity; adding to the root url with form input queries.
    event.preventDefault();
    toggleModal();
    addProfileToList();
});

//preventing user from selecting past date on date input (further info. in COMMENTS)
const today = new Date().toISOString().split("T")[0];
document.getElementsByName("checkinby")[0].setAttribute("min", today);


//ensure all necessary things are included here!!
module.exports = resetModal, toggleModal, submitButton
