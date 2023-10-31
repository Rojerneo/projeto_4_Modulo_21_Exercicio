document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const optionSelected = botao.target.dataset.tabButton;
            const option = document.querySelector(`[data-tab-id=${optionSelected}]`)

            ocultaTodasAbas();
            option.classList.add('hero__list--is-active')

            removeButtonActive();
            botao.target.classList.add('show__tabs__button--is-active');

        })
    }

    //Abre e fecha resposta da FAQ
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreFechaResposta);
    }
})

function ocultaTodasAbas() {
    const tabList = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabList.length; i++) {
        tabList[i].classList.remove('hero__list--is-active')
    }
}

function removeButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('show__tabs__button--is-active');
    }
}

function abreFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}