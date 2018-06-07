do {
  var msg = prompt('Insira a sua mensagem para criptografar:');
  if (msg === '') alert('A mensagem não pode ser vazia!');
  for (i = 0; i < msg.length; i++) {
    if(msg.charCodeAt(i) > 47 && msg.charCodeAt(i) < 58) {
      alert('A mensagem não pode conter números!');
      msg = '';
      break;
    }
  }
} while (msg === '');

function cipher(msg) {
  var newMsg = '';
  for (i = 0; i < msg.length; i++) {
    if (msg.charCodeAt(i) < 97) {
      newMsg += String.fromCharCode((msg.charCodeAt(i) - 65 + 33) % 26 + 65);
    } else {
      newMsg += String.fromCharCode((msg.charCodeAt(i) - 97 + 33) % 26 + 97);
    }
  }
  return alert(newMsg);
}

function decipher(msg) {
  var newMsg = '';
  for (i = 0; i < msg.length; i++) {
    if (msg.charCodeAt(i) < 97) {
      newMsg += String.fromCharCode((msg.charCodeAt(i) - 65 + 19) % 26 + 65);
    } else {
      newMsg += String.fromCharCode((msg.charCodeAt(i) - 97 + 19) % 26 + 97);
    }
  }
  return alert(newMsg);
}
cipher(msg);
