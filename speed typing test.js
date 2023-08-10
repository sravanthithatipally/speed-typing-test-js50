let divele = document.getElementById("speedTypingTest");
let timeele = document.getElementById("timer");

let questionele = document.getElementById("quoteDisplay");
let answer = document.getElementById("quoteInput");
let resultele = document.getElementById("result");
let subbtn = document.getElementById("submitBtn");
let resetbtn = document.getElementById("resetBtn");
let startingvalue = 0;
let idset;

let spinnerele = document.getElementById("spinner");


function togetsentence() {
    let url = "https://apis.ccbp.in/random-quote";
    spinnerele.classList.remove("d-none");
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerele.classList.add("d-none");
            let {
                content
            } = jsonData;
            questionele.textContent = content;
        });

    function togettime() {
        startingvalue += 1;
        timeele.textContent = startingvalue;
    }
    idset = setInterval(togettime, 1000);
}
togetsentence();
resetbtn.addEventListener("click", function tovalidatesentence2() {
    spinnerele.classList.remove("d-none");
    startingvalue = 0;
    togetsentence();
    answer.value = "";
    resultele.textContent = "";
});

subbtn.addEventListener("click",
    function tovalidatesentence() {
        if (answer.value === questionele.textContent) {
            clearInterval(idset);
            resultele.textContent = "You typed in " + timeele.textContent + " seconds";
        } else {
            resultele.textContent = "You typed incorrect sentence.";
        }
    });