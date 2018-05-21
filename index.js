function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}
 
var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false

function sayHiToGrandma(lowercase) {
  return `I can't hear you!`
}
function sayHiToGrandma(uppercase) {
  return `YES INDEED!`
}

function sayHiToGrandma(string) {
 console.log(`string`(lowercase(`I can't hear you!`))
 console.log(string(uppercase(`YES INDEED!`)))
 return `I love you, too.`
 }