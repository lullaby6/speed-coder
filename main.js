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
    "filter",
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
    "module",
    "plugin",
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
    "steate",
    "discard",
    "values",
    "host",
    "red",
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

const input = document.querySelector('#input')
const textarea = document.querySelector('#words')
const hero = document.querySelector('#hero')

let randomWordsArray = shuffle(words)
let randomWordsString = randomWordsArray.join(' ')

textarea.innerText = randomWordsString

input.focus()

const correctColor = '#cccccc'
const errorColor = '#cb4350'

let started = false
let time = 15
let chars = 0

input.addEventListener('input', e => {
    if(!started) {
        started = true
        console.log('start!')
        setTimeout(() => {
            console.log(`${chars} in ${time} seconds.`)
            console.log(`${chars/time} CPS (Chars Per Second).`)
        }, time*1000)
    }

    if(e.target.value.endsWith(" ")) {
        if(e.target.value.trim() === randomWordsArray[0]) {
            randomWordsArray.shift()

            randomWordsString = randomWordsArray.join(' ')
            textarea.innerText = randomWordsString

            chars += e.target.value.length
            input.value = ''
            input.focus()
        }else{
            input.style.color = errorColor
        }
    }else{
        if(randomWordsArray[0].startsWith(e.target.value)){
            input.style.color = correctColor
        }else{
            input.style.color = errorColor
        }
    }
})