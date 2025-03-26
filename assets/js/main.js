let words = [...new Set([
    "if",
    "for",
    "foreach",
    "remove",
    "add",
    "push",
    "pop",
    "class",
    "new",
    "list",
    "array",
    "let",
    "query",
    "selector",
    "const",
    "all",
    "def",
    "function",
    "insert",
    "select",
    "from",
    "left",
    "top",
    "icon",
    "bottom",
    "reverse",
    "right",
    "color",
    "back",
    "post",
    "flex",
    "grid",
    "method",
    "prop",
    "property",
    "open",
    "close",
    "static",
    "void",
    "main",
    "str",
    "var",
    "set",
    "background",
    "from",
    "finally",
    "else",
    "continue",
    "interface",
    "text",
    "echo",
    "enum",
    "enums",
    "thread",
    "threads",
    "regex",
    "switch",
    "boolean",
    "lambda",
    "pass",
    "true",
    "false",
    "while",
    "error",
    "unicode",
    "request",
    "http",
    "assert",
    "any",
    "abs",
    "ascii",
    "bool",
    "read",
    "line",
    "lines",
    "page",
    "write",
    "edit",
    "justify",
    "execute",
    "delete",
    "byte",
    "string",
    "compile",
    "dict",
    "exec",
    "sys",
    "system",
    "os",
    "filter",
    "package",
    "release",
    "version",
    "file",
    "pos",
    "range",
    "hash",
    "uuid",
    "id",
    "count",
    "code",
    "codes",
    "encrypt",
    "script",
    "json",
    "scripts",
    "counter",
    "user",
    "users",
    "admin",
    "staff",
    "help",
    "helper",
    "forum",
    "link",
    "url",
    "username",
    "name",
    "full",
    "last",
    "editor",
    "temp",
    "center",
    "with",
    "find",
    "format",
    "translate",
    "api",
    "rest",
    "sets",
    "index",
    "numeric",
    "number",
    "service",
    "services",
    "postgresql",
    "excel",
    "mongodb",
    "mariadb",
    "mysql",
    "connect",
    "database",
    "controller",
    "controllers",
    "view",
    "views",
    "mvc",
    "numbers",
    "input",
    "comment",
    "output",
    "comments",
    "syntax",
    "socket",
    "lower",
    "upper",
    "sockets",
    "date",
    "iteration",
    "dates",
    "random",
    "math",
    "split",
    "cut",
    "node",
    "div",
    "overflow",
    "debug",
    "padding",
    "position",
    "stack",
    "display",
    "margin",
    "style",
    "styles",
    "border",
    "outline",
    "bug",
    "width",
    "height",
    "font",
    "react",
    "angular",
    "strip",
    "join",
    "leave",
    "replace",
    "align",
    "drop",
    "callback",
    "theme",
    "by",
    "null",
    "into",
    "case",
    "alter",
    "default",
    "auto",
    "break",
    "increment",
    "injection",
    "keyword",
    "keywords",
    "key",
    "char",
    "chars",
    "keys",
    "group",
    "export",
    "port",
    "router",
    "application",
    "com",
    "www",
    "struct",
    "io",
    "app",
    "encode",
    "decode",
    "base",
    "routes",
    "vars",
    "route",
    "module",
    "src",
    "source",
    "sub",
    "config",
    "plugin",
    "env",
    "where",
    "avg",
    "sum",
    "or",
    "not",
    "and",
    "elseif",
    "callbacks",
    "call",
    "sql",
    "int",
    "async",
    "await",
    "promise",
    "integer",
    "instance",
    "len",
    "length",
    "map",
    "local",
    "locals",
    "memory",
    "create",
    "fix",
    "data",
    "type",
    "dom",
    "jsx",
    "web",
    "token",
    "jwt",
    "yml",
    "xml",
    "csv",
    "types",
    "lib",
    "library",
    "worker",
    "history",
    "require",
    "println",
    "extend",
    "import",
    "object",
    "objects",
    "task",
    "schedule",
    "min",
    "html",
    "css",
    "nodes",
    "child",
    "parent",
    "element",
    "animate",
    "animation",
    "table",
    "update",
    "limit",
    "crud",
    "max",
    "get",
    "print",
    "console",
    "return",
    "log",
    "document",
    "item",
    "default",
    "items",
    "key",
    "keys",
    "listener",
    "event",
    "sort",
    "div",
    "public",
    "pip",
    "npm",
    "private",
    "update",
    "doc",
    "include",
    "value",
    "send",
    "request",
    "status",
    "result",
    "response",
    "ajax",
    "res",
    "req",
    "isset",
    "conn",
    "state",
    "discard",
    "values",
    "host",
    "net",
    "network",
    "sorted",
    "slice",
    "server",
    "pass",
    "password",
    "try",
    "catch",
    "super",
    "fill",
    "except",
    "exception",
    "load",
    "reload",
    "upload",
    "cancel",
    "tuple",
    "zip",
    "java",
    "python",
    "window",
    "start",
    "startwith",
    "endwith",
    "screen",
    "session",
    "fetch",
    "storage",
    "location",
    "time",
    "prefab",
    "timer",
    "timing",
    "cookie",
    "cookies",
    "form",
    "search",
    "append",
    "clear",
    "insert",
    "copy",
    "str",
    "line",
    "loop",
    "datetime",
    "timeout",
    "interval",
    "paste",
    "hover",
    "cobol",
    "inner",
    "nav",
    "button",
    "init",
    "self",
    "click",
    "current",
    "handle",
    "press",
    "navigator",
    "language",
    "this"
])].sort()

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

const randomItemFromArray = array => array[Math.floor(Math.random() * array.length)];

const inputElement = document.querySelector('#input')
const wordsElement = document.querySelector('#words')
const timeElement = document.querySelector('#time')
const charsElement = document.querySelector('#chars')
const mainElement = document.querySelector('#main')
const cpsElement = document.querySelector('#cps')
const finishElement = document.querySelector('#finish')
const maxElement = document.querySelector('#max')
const resetElement = document.querySelector('#reset-icon')
const lastMaxElement = document.querySelector('#last-max')

let randomWordsArray = []
let randomWordsString = ''

let time = 30

let started = false
let finished = false

let chars = 0
let timeElapsed = 0
let cps = 0
let lastMaxCPS = 0

let nextSecondTimeout = null;

let error = false
let lastInput = ''

const colors = {
    correctList: [
        '#61AFEF',
        '#E5C07B',
        '#89C36D',
        '#C678DD'
    ],
    error: '#e3505a'
}

let color = null;

function reset() {
    colors.color = randomItemFromArray(colors.correctList);

    started = false
    finished = false
    chars = 0
    timeElapsed = 0
    cps = 0
    lastMaxCPS = 0

    error = false
    lastInput = ''

    randomWordsArray = shuffle(words)
    randomWordsString = randomWordsArray.join(' ')

    wordsElement.innerText = randomWordsString

    inputElement.removeAttribute('disabled')
    inputElement.value = ''
    inputElement.focus()

    timeElement.innerText = time

    inputElement.style.cursor = 'none'
    mainElement.style.cursor = 'none'
    finishElement.style.display = 'none'
    lastMaxElement.style.display = 'none'

    try {
        clearTimeout(nextSecondTimeout)
        nextSecondTimeout = null
    } catch (_) {}
}

reset()

function finish() {
    inputElement.setAttribute('disabled', '')
    inputElement.style.cursor = 'default'
    mainElement.style.cursor = 'default'

    finishElement.style.display = 'block'

    started = false
    finished = true

    let maxCPS = localStorage.getItem("maxCPS")

    cps = chars/time

    if (maxCPS === null) localStorage.setItem('maxCPS', cps)
    else {
        if (cps > maxCPS) {
            lastMaxCPS = maxCPS

            lastMaxElement.innerText = `last max cps: ${lastMaxCPS}`
            lastMaxElement.style.display = 'block'

            localStorage.setItem('maxCPS', cps)
        }
    }

    maxElement.innerText = `max cps: ${localStorage.getItem("maxCPS")}`
}

function nextSecond() {
    if (timeElapsed != time) {
        nextSecondTimeout = setTimeout(() => {

            timeElapsed += 1
            timeElement.innerText = time - timeElapsed

            charsElement.innerText = `chars: ${chars}`

            cps = chars/time
            cpsElement.innerText = `cps: ${cps}`

            nextSecond()
        }, 1000)

    } else {
        finish()
    }
}

inputElement.addEventListener('input', e => {
    if (!started && !finished) {
        started = true
        nextSecond()
    }

    if (e.target.value ===  ' ') e.target.value = ''

    if (e.target.value.endsWith(" ")) {
        if(e.target.value.trim() === randomWordsArray[0]) {
            randomWordsArray.shift()

            randomWordsString = randomWordsArray.join(' ')
            wordsElement.innerText = randomWordsString

            chars += e.target.value.length

            inputElement.value = ''
            inputElement.focus()
        }else{
            if(!error) {
                lastInput = e.target.value
                error = true
            }else{
                e.target.value = lastInput
            }
            inputElement.style.color = colors.error
        }
    } else {
        if (randomWordsArray[0].startsWith(e.target.value)) {
            error = false
            inputElement.style.color = colors.color
        } else {
            if (!error) {
                lastInput = e.target.value
                error = true
            } else {
                e.target.value = lastInput
            }
            inputElement.style.color = colors.error
        }
    }
})

window.addEventListener('keydown', e => {
    console.log(e.keyCode)

    if (e.keyCode == 27) reset()
    if (finished && e.keyCode == 32) reset()
})

resetElement.addEventListener('click', () => reset())

mainElement.addEventListener('click', () => {
    if (finished) reset()
})

window.addEventListener('load', () => {
    inputElement.style.width = `${wordsElement.getBoundingClientRect().width}px`
})

window.addEventListener('resize', () => {
    inputElement.style.width = `${wordsElement.getBoundingClientRect().width}px`
})