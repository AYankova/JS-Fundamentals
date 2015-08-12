var params1 = [
    '#the-big-b{',
    '   color: yellow;',
    '   size: big;',
    '}',
    '.muppet{',
    '    powers: all;',
    '    skin: fluffy;',
    '}',
    '.water-spirit         {',
    '    powers: water;',
    '    alignment    : not-good;',
    '}',
    'all{',
    ' meant-for: nerdy-children;',
    '}',
    '.muppet      {',
    '    powers: everything;',
    '}',
    'all            .muppet {',
    '    alignment             :             good',
    '}',
    '.muppet+             .water-spirit{',
    '    power: everything-a-muppet-can-do-and-water;',
    '}'
];

Solve(params1);

function Solve(params) {
    var input = params.join('');
    var output = '',
        i, j;
    var selectorsContent = [];

    //first remove the white spaces
    input = input.replace(/\s*([^]+?)\s*{\s*([^]+?)\s*}/g, function(match, selectors, content) {
        content = content.replace(/\s*/g, '');
        content = content.replace(/;$/g, '');

        selectors = selectors.replace(/\s+/g, ' ');
        selectors = selectors.replace(/^\s*/g, '');
        selectors = selectors.replace(/\s*$/g, '');

        var contentObj = {};
        var contentEntities = content.split(';');
        for (j = 0; j < contentEntities.length; j++) {
            var ent = contentEntities[j].split(':');
            contentObj[ent[0]] = ent[1];
        }

        selectorsContent.push({
            selectors: selectors,
            content: contentObj
        });

        return selectors + '{' + content + '}';
    });


    for (i = 0; i < selectorsContent.length; i++) {
        var currentEnt = selectorsContent[i];
        var currentSelector = currentEnt.selectors;

        for (j = i + 1; j < selectorsContent.length; j++) {
            var otherEnt = selectorsContent[j];
            var otherSelector = otherEnt.selectors;

            if (currentSelector === otherSelector) {

                for (var prop in currentEnt.content) {
                    if (otherEnt.content[prop]) { //the other entity has the same property 
                        var newValue = otherEnt.content[prop];

                        //replace the new property
                        var regex = new RegExp('(' + currentSelector + '{[^]+?)(' + prop + ':[^]+?)}[^{]');
                        input = input.replace(regex, function(match, remain, remove) {
                            return remain + '}';
                        });
                    }
                }
            }
        }
    }
}
