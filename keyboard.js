alert('El corazon dirige tu canción')

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']  // letras del teclado white
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']   // letras del teclado black

const keys = document.querySelectorAll('.key')   //utilizamos query.... con key para que funcione el teclado
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key)) // las notas musicales 
})

document.addEventListener('keydown', e => {       // uyilizaremos las e para que haya una variedad de los sonidos
    if(e.repeat) return
const key = e.key
const whiteKeyIndex = WHITE_KEYS.indexOf(key)   // usamos una constante para definir la e con index
const blackKeyIndex = BLACK_KEYS.indexOf(key) // tambien los colores de las teclas 

if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])  // las teclas que se debe de tocar y que no se repitan
if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {                                            // el tiempo de los colores
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () =>{
        key.classList.remove('active')       // acaba y termina el color y tiempo
    }) 
    
}