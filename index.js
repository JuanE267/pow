let pow = (a, b) => {
    if (b < 1) {
        alert("you cant do that");
    } else {
        let vari = a;
        for (let i = 1; i < b; i++) {

            vari *= a;

        }
        return alert(vari);
    }
}

//  ↑ let pow = (a, b) => { return alert(a ** b) };


pow(prompt("number"), prompt("exponet"));