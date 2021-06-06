const DATA_QUETIONS = [
    {imageName: 'amazon', options: ['Amazon', 'Facebook', 'Tinder', 'Google']},
    {imageName: 'apple', options: ['YouTube', 'Apple', 'Instagram', 'WhatsApp']},
    {imageName: 'microsoft', options: ['Twitter', 'Mozilla', 'Microsoft', 'Shopify']},
    {imageName: 'twitter', options: ['Trello', 'PayPal', 'Twitter', 'TikTok']},
];

const DATA_MIN_POINTS_FOR_WINNING = 3;

var points = 0;
var currentQuestion = 0;

function validateAnswer(optionNumber){
    const rightAnswer = DATA_QUETIONS[currentQuestion].imageName;
    const sentAnswer = DATA_QUETIONS[currentQuestion].options[optionNumber];
    if (rightAnswer == sentAnswer.toLowerCase()) points += 1;
    currentQuestion += 1;
    fillDataForQuestion(currentQuestion);
}

function fillDataForQuestion(questionNumber = 0) {
    if(questionNumber == DATA_QUETIONS.length){
        showResults();
    }
    else {
        document.getElementById('brand').src = './img/' + DATA_QUETIONS[questionNumber].imageName + '.png';
        var options = document.getElementsByClassName('answer');
        for (let i = 0; i < options.length; i++) {
            const elem = options[i];
            const newOptionName = DATA_QUETIONS[questionNumber].options[i];
            elem.innerText = newOptionName;            
        }
    }
}

function showResults(){
    var optionsDivElement = document.getElementById('options');
    if(points >= DATA_MIN_POINTS_FOR_WINNING){
        document.getElementById('brand').src = './img/won.png';
        optionsDivElement.innerHTML = "Congrats! You're great at recognizing brands"
    }
    else {
        document.getElementById('brand').src = './img/lost.png';
        optionsDivElement.innerHTML = "Ohh, looks like you might need to try again"
    }
    
    document.getElementById('try-again').innerHTML = `<button onClick="window.location.reload();">Try again</button>`
}

fillDataForQuestion();