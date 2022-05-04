function romanToInt(s) {
    let result = 0;
    console.log({ result });
    let remainStringToParse = s;
    console.log({ remainStringToParse });

    while (remainStringToParse !== '') {
        const nextToken = identifyFirstRomanToken(remainStringToParse);
        console.log({ nextToken });
        remainStringToParse = remainStringToParse.replace(nextToken, '');
        console.log({ remainStringToParse });
        const nextValue = romanToIntValueMapper[nextToken];
        result = result + nextValue;
        console.log({ result });
    }
    return result;
}

const romanToIntValueMapper = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

function identifyFirstRomanToken(s) {
    for (const token in romanToIntValueMapper) {
        if (s.startsWith(token)) {
            return token;
        }
    }
}

romanToInt('III');
romanToInt('LVIII');
romanToInt('MCMXCIV');
