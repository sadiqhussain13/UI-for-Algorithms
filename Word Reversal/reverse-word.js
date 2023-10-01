var reverseWords = function() {
    var sentence = document.getElementById('sentence').value;
    var reversedWords = sentence.split(' ').map(x => x.split('').reverse().join('')).join(' ');
    document.getElementById('reversedOutput').innerText = reversedWords;
  };