const functions = require('./functions.js')

test('"abc" has 3 character', ()=>{
    let input = 'abc';
    let result = functions.stringLength(input);
    expect(result).toBe(3);
    
});
test('Empty input must throw error', ()=>{
    let input = '';
    //let result = functions.stringLength(input);
    expect(()=>{
        functions.stringLength(input)
    }).toThrow('not between 1-10');
    
});
test('"abcdefghijklmno" input must throw an error', ()=>{
    let input = 'abcdefghijklmno';
    expect(()=>{
        functions.stringLength(input)
    }).toThrow('not between 1-10');
    
});
test('reverse of abcd must dcba', ()=>{
    let input = 'abcd';
    let result = functions.reverseString(input);
    expect(result).toBe('dcba');
    
});

test('cpitalized format of alazar yilma must be Alazar yilma', ()=>{
    let input = 'alazar yilma';
    let result = functions.capitalize(input);
    expect(result).toBe('Alazar yilma');
    
});