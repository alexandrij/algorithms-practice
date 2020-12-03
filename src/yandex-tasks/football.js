const input = `
Cplusplus - C - 1:0
Cplusplus - Php - 2:0
Java - Php - 1:0
Java - C - 2:2
Java - Perl - 1:1
Java - Haskell - 1:1
`;

const Football = function() {
    this.commands = new Map();
    this.games = new Map();
}

Football.prototype.reader = function (str) {
    const rows = str.split("\r\n");
    const len = rows.length;
    let i = 0; 
    let row;

    for(; i < len; i++) {
        row = rows[i].split(' - ');
    }
}