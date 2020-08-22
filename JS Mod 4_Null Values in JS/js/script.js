let testVariable="";

let isUndefined = (testVariable === undefined);
let isNull = (testVariable === null);
let isEmpty = (testVariable === '');

document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;
