var quotes = [
    'Not visible to the surveyors (their rules and scripts do not get executed)',
    'Get the value assigned based on a calculation done on other questions',
    'Lets look at an example survey that first asks 2 general questions in order to classify the respondent',
    'Questions Q1-Q4 contain the same answer scale. Q5 is a question inside a loop chapter, and the ',
    'needed logic is to iterate on all the answers that were coded through Q1-Q4. So, instead of generating ',
    'Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
]

document.querySelector("button").addEventListener("click", myFunction, false);
function myFunction() {
    debugger;
    var ranomDomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[ranomDomNumber];
}
