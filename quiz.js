// Liste med spørgsmål
const questionList = [{
    question: "Er husedderkoppen Danmarks største edderkop?",
    answer: ["Ja, den er jo kæmpestor.", "Nej, det er kun den næststørste.", "Det er ikke kun Danmarks, men faktisk Europas største edderkop."],
    rightAnswer: 0
},
{
    question: "Hvor gammel kan en husedderkop blive?",
    answer: ["7-8 dage.", "7-8 måneder.", "7-8 år.", "70-80 år."],
    rightAnswer: 2
},
{
    question: "Hvor i Danmark lever husedderkoppen?",
    answer: ["Kun i Jylland.", "Den findes i hele landet.", "Den lever ikke i Danmark."],
    rightAnswer: 1
},
{
    question: "Passer det, at hannernes benspænd kan være over 10 cm?",
    answer: ["Ja", "Nej"],
    rightAnswer: 0
},
{
    question: "Hvor lever husedderkopppen?",
    answer: ["Den bygger et hus af græs.", "I gamle sneglehuse.", "I huse og skure, men også ude i naturen i stengærder."],
    rightAnswer: 2
},
{
    question: "Er det godt at have edderkopper i sit hjem?",
    answer: ["Ja, de spiser insekter og kan kun leve i hjem uden giftstoffer.", "Nej, de er et tegn på det er beskidt."],
    rightAnswer: 0
},
];

// Holder styr på hvilket spørgsmål vi er igang med samt rigtige og forkerte svar
var questionNumber = 0;
var rightAnswers = 0;
var wrongAnswers = 0;

// Funktion som indsætter spørgsmål og svarmugligheder i HTML
function question() {

    // Fjerner intro tekst og startknap
    document.getElementById("tekst").style.display = "none";
    document.getElementById("knapHTML").style.display = "none";

    // Tjekker om alle spørgsmål er besvaret 
    if (questionNumber == questionList.length) {
        document.getElementById("questionHTML").innerHTML = "Du svarede " + rightAnswers + " ud af " + questionList.length + " rigtige!";
        document.getElementById("answerHTML").innerHTML = "<p class='kilde' >Kilder: <ul class='kilde'><li><a href='https://www.fugleognatur.dk/artsbeskrivelse.asp?ArtsID=2804' alt='fugleognatur.dk' target='_blank'>Fugle og Natur </a> </li><li><a href='https://vbn.aau.dk/da/clippings/edderkopper-er-et-sundhedstegn' alt='aau.dk' target='_blank'>Aalborg Universitet </a></li></ul></p>";
        document.getElementById("knapHTML").style.display = "block";
        document.getElementById("knapHTML").innerHTML = "Prøv igen"
        document.getElementById("knapHTML").setAttribute("onclick", "restart()")

    } else {
        // Her indsættes spørgsmålet    
        document.getElementById("questionHTML").innerHTML = questionList[questionNumber].question;

        // Her indsættes svarmuligheder
        let answers = "";

        for (let index = 0; index < questionList[questionNumber].answer.length; index++) {
            answers += "<button value='" + index + "' id='" + index + "' onclick='check(value)'>" + questionList[questionNumber].answer[index] + "</button>";

            document.getElementById("answerHTML").innerHTML = answers;
        };
    }
};

// Funktion som tjekker om der er svaret rigtigt
function check(answerValue) {
    if (answerValue == questionList[questionNumber].rightAnswer) {
        rightAnswers += 1
        document.getElementById(answerValue).style.backgroundColor = "hsla(120, 100%, 25%, 0.3)";

        disabledButtons();

    } else {
        wrongAnswers += 1
        document.getElementById(answerValue).style.backgroundColor = "hsla(0, 100%, 50%, 0.3)";

        disabledButtons();

    };

    // Tidsforsinkels
    var delayInMilliseconds = 800;
    setTimeout(function () {

        questionNumber += 1;
        question();

    }, delayInMilliseconds);
};

// Funktion som nulstiller quizzen og genstarter den
function restart() {
    questionNumber = 0;
    rightAnswers = 0;
    wrongAnswers = 0;
    question();
};

// Funktion som deaktivere knapperne efter man har svaret, så man ikke kan svare flere gange
function disabledButtons() {
    for (let index = 0; index < questionList[questionNumber].answer.length; index++) {
        document.getElementById(index).disabled = true;
    };
};