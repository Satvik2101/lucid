const html = (strings, ...values) => {
    let str = '';
    // console.log(strings, values)
    strings.forEach((string, i) => {
        str += string + (values[i] || '');
    });
    return str;
};

module.exports = html;