
const points = document.querySelectorAll('.circle');
const mainContainer = document.querySelector('.container');
const thanksContainer = document.querySelector('.thanks-box');
const ratePoint = document.querySelector('#rate');

points.forEach(point => {
    point.addEventListener('click', () =>{
        // console.log(point.innerHTML)
        let raiting = point.innerHTML;
        ratePoint.innerHTML = raiting;
        console.log(ratePoint.innerHTML);
    }) 
})

document.querySelector('.submit').addEventListener('click', () =>{
    // window.location.href = './thank-you.html';
    mainContainer.style.display = "none";
    thanksContainer.classList.remove("hidden");
})

// document.querySelector('#msg')
// .innerHTML = `You selected 4 out of 5`;



