//Write a function for extracting all email addresses from given text.
//All sub-strings that match the format @… should be recognized as emails.
//Return the emails as array of strings.

function extractEmails(text) {
    return text.match(/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g);
}

//test
var sample = 'This is our mail: hello@abv.bg. Please use it ins@tead. of office@yahoo.com, sin@c.e it is our old one. This is fake mail: com.yahoo@office. This @one.is fake a@typo?bg',
    result = extractEmails(sample);

console.log('Valid emails:');

for (var i in result) {
    console.log(result[i]);
}
