/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words)  {
    const [first, ...rest] = words.sort((a, b) => (a.length - b.length));
    const duplicates = [];
    [...first].forEach(e => {
        let duplicate = true;
        for (let x = 0, len = rest.length; x < len; x++) {
            let word = rest[x];
            const i = word.indexOf(e);
            if (i !== -1) {
                rest[x] = word.slice(0, i) + word.slice(i + 1);
            } else {
                duplicate = false;
                break;
            }
        }
        if (duplicate) {
            duplicates.push(e);
        }
    });
    return duplicates;
}