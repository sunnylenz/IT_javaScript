const isAlphaNumeric = str => {
    let code;

    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && //numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A_Z)
            !(code > 96 && code < 123)) { //loer alpha (a-z)
            return false;
        }
    }

    return true;
}