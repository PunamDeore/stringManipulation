function capitalizeWords() {
    const inputSentence = document.getElementById('str').value;
    const result = inputSentence.replace(/\b\w/g, c => c.toUpperCase());
    displayResult(result);
}

function capitalizeAll() {
    const inputSentence = document.getElementById('str').value;
    const result = inputSentence.toUpperCase();
    displayResult(result);
}

function wordExistence() {
    const inputWord = prompt('Enter a word to check existence:');
    const inputSentence = document.getElementById('str').value;
    const result = inputSentence.includes(inputWord);
    displayResult(result ? 'True' : 'False');
}

function wordOccurrenceCount() {
    const inputWord = prompt('Enter a word to count occurrences:');
    const inputSentence = document.getElementById('str').value;
    const words = inputSentence.split(/\s+/).filter(word => word.trim() !== '');
    const result = words.reduce((count, word) => (word.toLowerCase() === inputWord.toLowerCase() ? count + 1 : count), 0);
    displayResult(`Word "${inputWord}" occurs ${result} times`);
}
function wordDensityCalculate() {
    const inputSentence = document.getElementById('str').value;
    const inputWord = prompt('Enter a word to calculate repetitions:');
    const words = inputSentence.trim().split(/\s+/).filter(word => word !== '');
    const totalWords = words.length;
    const wordCount = words.filter(word => word.toLowerCase() === inputWord.toLowerCase()).length;
    const density = ((wordCount / totalWords) * 100).toFixed(2);
    displayResult(`The word "${inputWord}" occurs ${wordCount} times in the sentence. Word Density: ${density}%`);
}

function fileExtraction() {
    const inputFileName = document.getElementById('myfile').value;
    const result = inputFileName.split('.').pop() || null;
    displayResult(result ? `File Extension: ${result}` : 'No file extension found');
}

function removeWhitespace() {
    const inputSentence = document.getElementById('str').value;
    const result = inputSentence.replace(/\s/g, '');
    displayResult(`Result after removing whitespace: "${result}"`);
}

function reverseWords() {
    const inputSentence = document.getElementById('str').value;
    const result = inputSentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    displayResult(`Reversed words: "${result}"`);
}

function countVowels() {
    const inputSentence = document.getElementById('str').value;
    const result = (inputSentence.match(/[aeiou]/gi) || []).length;
    displayResult(`Number of vowels: ${result}`);
}

function checkPalindrome() {
    const inputSentence = document.getElementById('str').value;
    const cleanedString = inputSentence.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');
    const result = cleanedString === reversedString;
    displayResult(result ? 'It is a palindrome' : 'It is not a palindrome');
}

function truncateString() {
    const maxLength = prompt('Enter the maximum length:');
    const inputSentence = document.getElementById('str').value;
    const result = inputSentence.length > maxLength ? inputSentence.substring(0, maxLength) + '...' : inputSentence;
    displayResult(result);
}

function maskingString() {
    const inputSentence = document.getElementById('str').value;
    const maskedString = inputSentence.replace(/\d(?=\d{4})/g, '*');
    displayResult(`Masked String: "${maskedString}"`);
}

function validateEmail() {
    const inputEmail = document.getElementById('str').value;
    const result = /\S+@\S+\.\S+/.test(inputEmail);
    displayResult(result ? 'Valid Email Address' : 'Invalid Email Address');
}

function displayResult(message) {
    document.getElementById('outputResult').innerText = message;
}
