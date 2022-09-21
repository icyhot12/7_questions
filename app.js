// const btns = document.querySelectorAll('.btn')

// btns.forEach(btn => {
//     btn.addEventListener('click', e => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
// })


// secod method
const questions = document.querySelectorAll('.question-container');

questions.forEach(question => {
    const btn = question.querySelector('.btn');

    btn.addEventListener('click', () => {
        question.classList.toggle('show-text');
    })
})