function add(stringNumbers){
    if(stringNumbers === null || stringNumbers === "") return 0;
    const splitStringNumbers = stringNumbers.split(/[\n,]/);
    return splitStringNumbers.reduce((sum, num) => sum + parseInt(num),0);
}

module.exports = { add };