function capital_words() {
      const inputSentence = document.getElementById('str').value;
      const result = inputSentence.charAt(0).toUpperCase() + inputSentence.slice(1);
      displayResult(result);
    }
function capitalizeAll() {
     const inputSentence = document.getElementById('str').value;
    const result =  inputSentence.toUpperCase();
	
    displayResult(result);
}

function Word_Existence() {
      const inputWord = prompt('Enter a word to check existence:');
      const inputSentence = document.getElementById('str').value;
      const result = inputSentence.includes(inputWord);
      displayResult(result ? 'True' : 'False');
    }

function word_OccurrenceCount() {
      const inputWord = prompt('Enter a word to count occurrences:');
      const inputSentence = document.getElementById('str').value;
      const result = (inputSentence.match(new RegExp('\\b' + inputWord + '\\b', 'gi')) || []).length;
      displayResult(`Word "${inputWord}" occurs ${result} times`);
    }

function Word_Densitycalculate() {
      const inputSentence = document.getElementById('str').value;
      const words = inputSentence.split(/\s+/).filter(word => word.trim() !== '');
      const occurrenceCount = words.length;
      const totalWords = new Set(words).size;
      const density = (occurrenceCount / totalWords * 100).toFixed(2);
      displayResult(`Word Density: ${density}%`);
    }

function file_extration() {
      const inputFileName = document.getElementById('myfile').value;
      const result = inputFileName.split('.').pop() || null;
      displayResult(result ? `File Extension: ${result}` : 'No file extension found');
    }

function remove_Whitespace() {
      const inputSentence = document.getElementById('str').value;
      const result = inputSentence.replace(/\s/g, '');
      displayResult(`Result after removing whitespace: "${result}"`);
    }

function reverse_Words() {
      const inputSentence = document.getElementById('str').value;
      const result = inputSentence.split(' ').reverse().join(' ');
      displayResult(`Reversed sentence: "${result}"`);
    }

function count_Vowels() {
      const inputSentence = document.getElementById('str').value;
      const result = (inputSentence.match(/[aeiou]/gi) || []).length;
      displayResult(`Number of vowels: ${result}`);
    }

function check_Palindrome() {
      const inputSentence = document.getElementById('str').value;
      const cleanedString = inputSentence.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      const reversedString = cleanedString.split('').reverse().join('');
      const result = cleanedString === reversedString;
      displayResult(result ? 'It is a palindrome' : 'It is not a palindrome');
    }

function truncate_String() {
      const maxLength = prompt('Enter the maximum length:');
      const inputSentence = document.getElementById('str').value;
      const result = inputSentence.length > maxLength
        ? inputSentence.substring(0, maxLength) + '...'
        : inputSentence;
      displayResult(result);
    }
function masking_String() {
      const inputSentence = document.getElementById('str').value;
      const maskedString = inputSentence.replace(/\d(?=\d{4})/g, '*');
      displayResult(`Masked String: "${maskedString}"`);
    }

function validation_Email() {
      const inputEmail = document.getElementById('str').value;
      const result = /\S+@\S+\.\S+/.test(inputEmail);
      displayResult(result ? 'Valid Email Address' : 'Invalid Email Address');
    }

function displayResult(result) {
      document.getElementById('outputResult').innerText = result;
    }