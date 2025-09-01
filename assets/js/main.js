const WORDS = [...new Set(["abs","add","ajax","align","alter","and","animate","animation","any","api","append","application","argc","argv","array","ascii","assert","async","asyncfunction","auto","await","background","base","boolean","bool","border","break","bug","by","byte","call","callback","callbacks","cancel","case","catch","catcherror","char","chars","child","class","click","close","code","codes","color","com","comment","comments","compile","config","connect","console","const","continue","controller","controllers","copy","cookie","cookies","counter","create","crud","csv","current","cut","data","database","date","datetime","dates","decode","default","delete","dict","div","doc","document","drop","echo","edit","element","else","elseif","encode","encrypt","enum","enumclass","enums","env","error","eval","event","except","exception","exec","execute","excel","extends","false","fetch","file","fill","filter","find","finally","finallyblock","fix","flex","font","for","foreach","form","format","forum","from","full","function","get","grid","group","handle","hash","height","help","helper","history","host","hover","html","http","icon","id","if","implements","import","include","increment","index","init","input","insert","instance","instanceof","int","integer","interface","into","io","isset","item","items","iteration","java","join","json","jwt","key","keys","keyword","keywords","lambda","language","last","leave","len","length","let","lib","library","line","lines","link","listener","list","load","local","locals","location","log","loop","lower","main","map","margin","mariadb","math","max","memory","method","min","module","mongodb","msql","mvc","mysql","name","namespace","nav","net","network","new","node","nodes","npm","null","nullpointer","number","numbers","numeric","object","objects","open","or","os","output","package","padding","page","parent","pass","password","paste","pip","plugin","pointer","pop","port","postgresql","pos","post","prefab","prefetch","print","println","private","promise","prop","property","prototype","public","push","python","query","range","react","read","reference","regex","release","reload","remove","req","request","require","res","response","result","return","reverse","right","router","route","routes","schedule","screen","script","scripts","search","select","self","send","server","service","services","session","set","sets","slice","socket","sockets","sort","source","sql","src","stack","staff","start","startwith","state","static","status","storage","str","string","strip","struct","style","styles","sub","sum","super","switch","switchcase","syntax","system","table","task","temp","text","then","theme","this","thread","threads","throw","throws","time","timeout","timer","timing","token","top","true","try","trycatch","tuple","type","typeof","types","union","unicode","update","upper","upload","url","user","username","users","uuid","value","values","var","vars","version","view","views","void","web","where","while","width","window","with","worker","write","xml","xss","yml","yield","zip","www","jsx"])]

const $input = document.querySelector('#input')
const $words = document.querySelector('#words')
const $time = document.querySelector('#time')
const $chars = document.querySelector('#chars')
const $main = document.querySelector('#main')
const $cps = document.querySelector('#cps')
const $finish = document.querySelector('#finish')
const $max = document.querySelector('#max')
const $reset = document.querySelector('#reset-icon')
const $lastMax = document.querySelector('#last-max')

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

    randomWordsArray = shuffle([...WORDS])
    randomWordsString = randomWordsArray.join(' ')

    $words.innerText = randomWordsString

    $input.removeAttribute('disabled')
    $input.value = ''
    $input.focus()

    $time.innerText = time

    $input.style.cursor = 'none'
    $main.style.cursor = 'none'
    $finish.style.display = 'none'
    $lastMax.style.display = 'none'

    if (nextSecondTimeout) {
        clearTimeout(nextSecondTimeout)
        nextSecondTimeout = null
    }
}

reset()

function finish() {
    $input.setAttribute('disabled', '')
    $input.style.cursor = 'default'
    $main.style.cursor = 'default'

    $finish.style.display = 'block'

    started = false
    finished = true

    const maxCPS = localStorage.getItem("maxCPS")

    cps = chars/time

    if (maxCPS === null) {
        localStorage.setItem('maxCPS', cps)
    } else {
        if (cps > maxCPS) {
            lastMaxCPS = maxCPS

            $lastMax.innerText = `last max cps: ${lastMaxCPS}`
            $lastMax.style.display = 'block'

            localStorage.setItem('maxCPS', cps)
        }
    }

    $max.innerText = `max cps: ${localStorage.getItem("maxCPS")}`
}

function nextSecond() {
    if (timeElapsed == time) {
        finish()
        return
    }

    nextSecondTimeout = setTimeout(() => {
        timeElapsed += 1
        $time.innerText = time - timeElapsed

        $chars.innerText = `chars: ${chars}`

        cps = chars/time
        $cps.innerText = `cps: ${cps}`

        nextSecond()
    }, 1000)
}

$input.addEventListener('input', e => {
    if (!started && !finished) {
        started = true
        nextSecond()
    }

    if (e.target.value ===  ' ') e.target.value = ''

    if (e.target.value.endsWith(" ")) {
        if (e.target.value.trim() === randomWordsArray[0]) {
            randomWordsArray.shift()

            randomWordsString = randomWordsArray.join(' ')
            $words.innerText = randomWordsString

            chars += e.target.value.length

            $input.value = ''
            $input.focus()
        } else {
            if (!error) {
                lastInput = e.target.value
                error = true
            } else {
                e.target.value = lastInput
            }

            $input.style.color = colors.error
        }
    } else {
        if (randomWordsArray[0].startsWith(e.target.value)) {
            error = false
            $input.style.color = colors.color
        } else {
            if (!error) {
                lastInput = e.target.value
                error = true
            } else {
                e.target.value = lastInput
            }
            $input.style.color = colors.error
        }
    }
})

window.addEventListener('keydown', e => {
    console.log(e.keyCode)

    if (e.keyCode == 27) reset()
    if (finished && e.keyCode == 32) reset()
})

$reset.addEventListener('click', () => reset())

$main.addEventListener('click', () => {
    if (finished) reset()
})

window.addEventListener('load', () => {
    $input.style.width = `${$words.getBoundingClientRect().width}px`
})

window.addEventListener('resize', () => {
    $input.style.width = `${$words.getBoundingClientRect().width}px`
})

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function randomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
