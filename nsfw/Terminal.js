const chalk = require("chalk");
const process = require("process");
var term = require( 'terminal-kit' ).terminal ;
const util = require("util")
const old = global.console;



global.console = new (class Terminal {

    constructor() {
        this.editors = [];
    }

    clear() {
        old.clear();
    }

    log(...arg) {
        this.modEditor("Log",util.format.apply(this, arg).substring(0,200))
    }

    logLine(x, y, ...arg) {
        if (x != null || y != null) {
            process.stdout.cursorTo(x, y);
            process.stdout.write(new Array(process.stdout.columns - x).fill(" ").join(""));
            process.stdout.cursorTo(x, y);

        }
        process.stdout.write(util.format.apply(this, arg) + (x || y ? '' : '\n'));
        process.stdout.cursorTo(process.stdout.columns,process.stdout.rows);
    }

    addEditor(name, editor, conste = false, render = true) {
        this.editors.push({
            "const": conste,
            "name": name,
            "editor": editor,
        })

        if (render) this.renderEditors();
    }

    modEditor(name, editor, on) {
        let e = this.editors.find(function (a) { return a.name == name })
        if (!e) throw new Error("Editor not founded")
        let i = this.editors.indexOf(e);
        e.editor = editor;
        this.logLine(45, Math.round((process.stdout.rows - (this.editors.length)) / 2) + i, chalk.red(e.name) + " : " + chalk.white(e.editor))

    }
    renderEditors() {
        for (let i = 0; i < this.editors.length; i++) {
            if (this.editors[i].const) {
                this.logLine(45, Math.round((process.stdout.rows - (this.editors.length)) / 2) + i, this.editors[i].editor);
            } else {
                this.logLine(45, Math.round((process.stdout.rows - (this.editors.length)) / 2) + i, chalk.red(this.editors[i].name) + " : " + chalk.white(this.editors[i].editor));
            }
        }
    }

    start() {
        console.clear();
        let ascii = "                  -yy+`    +MMNs                 \n          +NMM/   `MMMN:+hNNmh:         \n           `+dhyy+.MMMNhyoosyho         \n     `yddmNMhyMMNd.dMMo/+osmNNy.        \n      `+hmMm`-MMm-  :oyyyo+MMMMh        \n        `-hMmmNMMMh/myosyhhmMMM.        \n   .dMMMMMNs/ohhho` dMMy.`:--/.         \n     ./oysoymMMMMM. hMMmNMMMM/          \n        :MMNds/hMm  yMMos+ss/`          \n        -MMdodmNMh  yMMdmMMMMh          \n        +MMhyNNNMd  yMN`./oo/.          \n        mMMdMMMMMN  yMMmNMMMMm`         \n       +MMmys+/hMM- sMM---``..-o/`      \n      oMMMo  -.yMM: .NMmo-    `MMMy-    \n      `mMM/ `mMMMMo  `smMMMmdhhMMMMM:   \n        --   .sNMM+     .:+shdmNMMMN:   \n                .`               `"
        console.logLine(0, Math.round((process.stdout.rows - 16) / 2), chalk.red(ascii));
    }
})()

let package = require("../package.json");

console.start();



console.addEditor("Space", chalk.red("Elma v" + package.version), true);
console.addEditor("Space", "────────────────────────────", true);
console.addEditor("Bot Name", "...");
console.addEditor("Shards", "...");
console.addEditor("Users", "...");
console.addEditor("Channels",'...')
console.addEditor("TotalMembers",'...')
console.addEditor("Servers", "...");
console.addEditor("Ping", "...");
console.addEditor("Database Status", "...");
console.addEditor("RAM Allocated", Math.round((process.memoryUsage().heapTotal / 1024 / 1024) * 100) / 100 + " MB");
console.addEditor("RAM Used", Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100 + " MB");
console.addEditor("Log", "Nothing");
console.addEditor("Space", "", true);
console.addEditor("Space","        [" + chalk.green.bold(" DESLIGAR ") + "]", true);
setInterval(function () {
    console.modEditor("RAM Used", Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100 + " MB");
    console.modEditor("RAM Allocated", Math.round((process.memoryUsage().heapTotal / 1024 / 1024) * 100) / 100 + " MB");
}, 5000);

term.grabInput( { mouse: 'button' } ) ;

term.on( 'mouse' , function( name , data ) {
    console.log(data.y + "/" + (Math.round((process.stdout.rows - (console.editors.length)) / 2) + 16));
	if(data.x >= 54 && data.x <= 66 && data.y == Math.round((process.stdout.rows - (console.editors.length)) / 2) + 15){
        console.clear()
        process.exit(0);
    }
} ) ;

setInterval(function () { global.gc() }, 5000);

process.stdout.on('resize', function() {
    console.clear()
    console.start();
    console.renderEditors();
});