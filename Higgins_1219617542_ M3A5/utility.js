export const generateRandonNumber = function (minimum, maximum){
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}
console.log(`from Utility ${generateRandonNumber(10, 100)}`);

