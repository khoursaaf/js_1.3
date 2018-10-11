/* var start = 'Bonjour ', name, end = ' .', result;
name = prompt('Quel est votre prénom ?');
result = start + name + end;
alert(result); */

var firstName = prompt('Entrez votre prénom.');
if (isNaN(firstName)) {
  alert('Bonjour ' + firstName + ' .')
} else {
  alert('Rentrez votre prénom!')
}
