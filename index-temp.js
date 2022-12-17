const path = require('path')

const toCamelCase = function (str) {
    return (" " + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
}

function indexTemplate(files) {
    const exportEntries = files.map(file => {
        const basename = path.basename(file, path.extname(file))
        return `export { ${toCamelCase(basename)}Icon } from './${basename}';`
    })
    return exportEntries.join('\n')
}

module.exports = indexTemplate