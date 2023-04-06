const rate = document.querySelectorAll('.rate');
const vote = document.querySelector('.vote');
const btn = document.getElementById('submit')
let con = document.querySelector('.container')

let selectedRate = "a";


vote.addEventListener('click', (e) => {
    if (e.target.classList.contains('rate')) {
        removeActive();
        e.target.classList.add('active');
        selectedRate = e.target.innerHTML;
    }
});

btn.addEventListener('click', (e) => {
    con.innerHTML = `
    <div class="image-align">
        <img src="./images/illustration-thank-you.svg" alt="#">
    </div>
    <div class="you-select">
        <strong>You selected ${selectedRate} out of 5</strong>
    </div>
    <div class="for-typo">
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
        </p>
    </div>
    `
})



function removeActive() {
    for (let i = 0; i < rate.length; i++) {
        rate[i].classList.remove('active');
    }
}