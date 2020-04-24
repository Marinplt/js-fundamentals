/**
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieur façon de faire.
 */

function tailleString(texte) {
  return texte.length;
}
function remplaceCar(text1, text2, text3) {
  return text1 = text1.replace(text2, text3);
}
function concatString(text1, text2){
  return text1 = text1 + text2;
}
function afficherCar(text1, nbr){
  return text1[nbr-1];
}
function afficherNCar(text1, nbr){
  return text1.substr(0,nbr);
}
function majusculeString(text1){
  return text1.toUpperCase();
}
function SupprEspaceString(text1){
  return text1.trim();
}
function IsString(text1){
  return text1.includes(text1);
}
function AfficherExtensionString(text1){
  return text1.slice((text1.lastIndexOf('.') - 1 >>> 0) + 2);
}
function NombreEspaceString(text1){
  text1 = text1.split(' ').length - 1;
  return text1;
}
function InverseString(text1){
  return text1.split('').reverse().join('');
}
function minusculeString(text1){
  return text1.toLowerCase();
}
function countDistinctCar(text1){
  return 
}