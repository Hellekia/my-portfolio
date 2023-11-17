const images = document.querySelectorAll('#corousel img')
const dots = document.querySelector('#dots')
const desc = document.querySelector('#desc')

let speed  = 3000;
let index = 0;
let intervalID ;


images.forEach((image, i)=>{
    const span = document.createElement('span')
    span.className = 'dot';
    if(i === 0) span.classList.add('active');
    span.addEventListener('click', ()=>{
        index = i;
        startInterval();
        updateContent();
    })

    dots.appendChild(span)
})


startInterval();
function startInterval(){
    if(intervalID) clearInterval(intervalID)
    intervalID = setInterval(()=>{
        console.log(index)
        index==images.length-1?index = 0:index++;
        updateContent();
    }, speed)
}

updateContent();
function updateContent(){
    
    images.forEach(item => item.classList.remove('active'));
    images[index].classList.add('active');
    const dots =  document.querySelectorAll('.dot');
    dots.forEach(item=>item.classList.remove('active'));
    dots[index].classList.add('active');

}