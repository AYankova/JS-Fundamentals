//Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
//Return the elements in a JSON object.

function parseURL(url) {
    var result = {},
        proIndex = url.indexOf(':'),
        servStr = url.substr(proIndex + 3),
        servIndex = servStr.indexOf('/');


    result.protocol = url.substr(0, proIndex);
    result.server = servStr.substr(0, servIndex);
    result.resource = servStr.substr(servIndex);

    return result;
}


//test
var sample = 'http://telerikacademy.com/Courses/Courses/Details/239',
    result = parseURL(sample);

console.log('JSON:\n' + JSON.stringify(result));
console.log("\nURL: " + sample);
console.log("[protocol] = " + result.protocol);
console.log("[server] = " + result.server);
console.log("[resource] = " + result.resource);
