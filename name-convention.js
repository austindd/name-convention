const createNameConvention = () => {
    class nameConvention {
        constructor() {
            this.replacementMap = {
                0: [
                    [/\-a/, "A"],
                    [/\-b/, "B"],
                    [/\-c/, "C"],
                    [/\-d/, "D"],
                    [/\-e/, "E"],
                    [/\-f/, "F"],
                    [/\-g/, "G"],
                    [/\-h/, "H"],
                    [/\-i/, "I"],
                    [/\-j/, "J"],
                    [/\-k/, "K"],
                    [/\-l/, "L"],
                    [/\-m/, "M"],
                    [/\-n/, "N"],
                    [/\-o/, "O"],
                    [/\-p/, "P"],
                    [/\-q/, "Q"],
                    [/\-r/, "R"],
                    [/\-s/, "S"],
                    [/\-t/, "T"],
                    [/\-u/, "U"],
                    [/\-v/, "V"],
                    [/\-w/, "W"],
                    [/\-x/, "X"],
                    [/\-y/, "Y"],
                    [/\-z/, "Z"],
                    [/\-A/, "A"],
                    [/\-B/, "B"],
                    [/\-C/, "C"],
                    [/\-D/, "D"],
                    [/\-E/, "E"],
                    [/\-F/, "F"],
                    [/\-G/, "G"],
                    [/\-H/, "H"],
                    [/\-I/, "I"],
                    [/\-J/, "J"],
                    [/\-K/, "K"],
                    [/\-L/, "L"],
                    [/\-M/, "M"],
                    [/\-N/, "N"],
                    [/\-O/, "O"],
                    [/\-P/, "P"],
                    [/\-Q/, "Q"],
                    [/\-R/, "R"],
                    [/\-S/, "S"],
                    [/\-T/, "T"],
                    [/\-U/, "U"],
                    [/\-V/, "V"],
                    [/\-W/, "W"],
                    [/\-X/, "X"],
                    [/\-Y/, "Y"],
                    [/\-Z/, "Z"],
                    [/\-0/, "0"],
                    [/\-1/, "1"],
                    [/\-2/, "2"],
                    [/\-3/, "3"],
                    [/\-4/, "4"],
                    [/\-5/, "5"],
                    [/\-6/, "6"],
                    [/\-7/, "7"],
                    [/\-8/, "8"],
                    [/\-9/, "9"],
                ],
                1: [
                    [/A/, "-a"],
                    [/B/, "-b"],
                    [/C/, "-c"],
                    [/D/, "-d"],
                    [/E/, "-e"],
                    [/F/, "-f"],
                    [/G/, "-g"],
                    [/H/, "-h"],
                    [/I/, "-i"],
                    [/J/, "-j"],
                    [/K/, "-k"],
                    [/L/, "-l"],
                    [/M/, "-m"],
                    [/N/, "-n"],
                    [/O/, "-o"],
                    [/P/, "-p"],
                    [/Q/, "-q"],
                    [/R/, "-r"],
                    [/S/, "-s"],
                    [/T/, "-t"],
                    [/U/, "-u"],
                    [/V/, "-v"],
                    [/W/, "-w"],
                    [/X/, "-x"],
                    [/Y/, "-y"],
                    [/Z/, "-z"],
                    [/0/, "-0"],
                    [/1/, "-1"],
                    [/2/, "-2"],
                    [/3/, "-3"],
                    [/4/, "-4"],
                    [/5/, "-5"],
                    [/6/, "-6"],
                    [/7/, "-7"],
                    [/8/, "-8"],
                    [/9/, "-9"],

                ]
            }
            this.hyphenate = this.hyphenate.bind(this);
            this.camelCase = this.camelCase.bind(this);
        }
        camelCase(text = ('' || [])) {
            let result;
            if (typeof text === 'string') {
                let str = text;
                for (let j = 0; j < this.replacementMap[1].length; ++j) {
                    str = str.replace(this.replacementMap[0][j][0], this.replacementMap[0][j][1]);
                }
                result = str;
            } else if (typeof text === 'object') {
                result = [];
                for (let i = 0; i < text.length; ++i) {
                    let str = text[i];
                    for (let j = 0; j < this.replacementMap[1].length; ++j) {
                        str = str.replace(this.replacementMap[0][j][0], this.replacementMap[0][j][1]);
                    }
                    result.push(str);
                }
                console.log(result);
            }
            return result;
        }
        hyphenate(text = ('' || [])) {
            let result;
            if (typeof text === 'string') {
                let str = text;
                for (let j = 0; j < this.replacementMap[1].length; ++j) {
                    str = str.replace(this.replacementMap[1][j][0], this.replacementMap[1][j][1]);
                }
                result = str;
            } else if (typeof text === 'object') {
                result = [];
                for (let i = 0; i < text.length; ++i) {
                    let str = text[i];
                    for (let j = 0; j < this.replacementMap[1].length; ++j) {
                        str = str.replace(this.replacementMap[1][j][0], this.replacementMap[1][j][1]);
                    }
                    result.push(str);
                }
                console.log(result);
            }
            return result;
        }
    }
    console.log((nameConvention));
    return new nameConvention;
}
let nameConvention = createNameConvention();



// ==============================  Tests  ==============================

let test1, test2, test3, test4;

// Hyphenated string to Camel-cased string
test1 = nameConvention.camelCase('hyphenated-property-name');
console.log('Test1: ', test1);

// Camel-cased string to hyphenated string
test2 = nameConvention.hyphenate('camelCasedPropertyName');
console.log('Test2: ', test2);

// Hyphenated array to Camel-cased array
test3 = nameConvention.camelCase([
    'test-string-1',
    '2-abcdef-hyphenated',
    'I-hope-this-works'
]);
console.log('Test3: ', test3);

// Camel-cased array to hyphenated array
test4 = nameConvention.hyphenate([
    'testString1234',
    '15gammaAlphaBeta',
    'geezISpentWayToMuchTimeOnThis',
]);
console.log('Test4: ', test4);

// ======================================================================


/*
    Use-case:
    Converting any style attribute name from inline HTML/CSS syntax (hyphenated)
    to DOM element property syntax (camel-cased).
*/

