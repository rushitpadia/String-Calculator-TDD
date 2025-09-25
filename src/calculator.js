function add(stringNumbers){
    if(stringNumbers === null || stringNumbers === "") return 0;
    return parseInt(stringNumbers);
}

module.exports = { add };