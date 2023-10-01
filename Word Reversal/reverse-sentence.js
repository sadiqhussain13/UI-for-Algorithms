var reverseWordsSentence = function() {
    const sentenceInput = document.getElementById('sentence');
    const reversedOutput = document.getElementById('reversedOutputSentence');
  
    const sentence = sentenceInput.value;
    const reversedWords = sentence.split(' ').reverse().join(' ');
  
    reversedOutput.innerText = reversedWords;
  };