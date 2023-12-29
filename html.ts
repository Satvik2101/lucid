const html = (templateStrings: TemplateStringsArray, ...values: any[]) => {
    let result = '';
    for (let i = 0; i < values.length; i++) {
        result += templateStrings[i] + values[i];
    }
    result += templateStrings[templateStrings.length - 1];
    return result;
};

export default html;