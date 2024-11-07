onload = function () {
    let clickedButton;
    let colunaSelecionada;
    let selectedOption1, selectedOption2;
    var modalOpcoes = new bootstrap.Modal(document.getElementById('modalOpcoes'));
    var modalFeedbackNegativo = new bootstrap.Modal(document.getElementById('modalFeedbackNegativo'));
    var modalFeedbackPositivo = new bootstrap.Modal(document.getElementById('modalFeedbackPositivo'));
    $('.tela-modal-opcoes-2').hide();

    // selecionar opcao
    $('.fluxograma-option-selector').click(function () {
        clickedButton = $(this);
        colunaSelecionada = clickedButton.parent();
        clickedButton.addClass('selected');
        modalOpcoes.show();
    });

    $('.opcao-fluxograma').click(function () {
        $(this).parent().find('.selected').removeClass('selected');
        $(this).addClass('selected');

        if ($(this).parent()[0].classList[0] == 'lista-acoes') {
            selectedOption1 = $(this)[0].dataset.resposta;
            $('.btn-proximo').removeClass('disabled');
        } else {
            selectedOption2 = $(this)[0].dataset.resposta;
            $('.btn-concluir').removeClass('disabled');
        }

    });

    $('.btn-concluir').click(function () {

        let nResposta = clickedButton[0].dataset.resposta;
        // console.log('selectedOption1: ' + selectedOption1)
        // console.log('selectedOption2: ' + selectedOption2)
        // console.log('nResposta = ' + nResposta)
        switch (nResposta) {
            case '1':
                if (selectedOption1 == 1 && selectedOption2 == 1) {
                    clickedButton.addClass('correto');
                    const imagemFluxo = colunaSelecionada.find('.img-fluxo');
                    imagemFluxo.addClass('visible');
                    modalFeedbackPositivo.toggle();
                } else {
                    modalOpcoes.hide();
                    modalFeedbackNegativo.toggle();
                }
                break;
            case '2':
                if (selectedOption1 == 2 && selectedOption2 == 3) {
                    clickedButton.addClass('correto');
                    const imagemFluxo = colunaSelecionada.find('.img-fluxo');
                    imagemFluxo.addClass('visible');
                    modalFeedbackPositivo.toggle();
                } else {
                    modalOpcoes.hide();
                    modalFeedbackNegativo.toggle();
                }
                break;
            case '3':
                if (selectedOption1 == 3 && selectedOption2 == 2) {
                    clickedButton.addClass('correto');
                    const imagemFluxo = colunaSelecionada.find('.img-fluxo');
                    imagemFluxo.addClass('visible');
                    modalFeedbackPositivo.toggle();
                } else {
                    modalOpcoes.hide();
                    modalFeedbackNegativo.toggle();
                }
                break;
            case '4':
                if (selectedOption1 == 4 && selectedOption2 == 2) {
                    clickedButton.addClass('correto');
                    const imagemFluxo = colunaSelecionada.find('.img-fluxo');
                    imagemFluxo.addClass('visible');
                    modalFeedbackPositivo.toggle();
                } else {
                    modalOpcoes.hide();
                    modalFeedbackNegativo.toggle();
                }
                break;
            case '5':
                if (selectedOption1 == 5 && selectedOption2 == 2) {
                    clickedButton.addClass('correto');
                    const imagemFluxo = colunaSelecionada.find('.img-fluxo');
                    imagemFluxo.addClass('visible');
                    modalFeedbackPositivo.toggle();
                } else {
                    modalOpcoes.hide();
                    modalFeedbackNegativo.toggle();
                }
                break;
            case '6':
                if (selectedOption1 == 6 && selectedOption2 == 2) {
                    clickedButton.addClass('correto');
                    const imagemFluxo = colunaSelecionada.find('.img-fluxo');
                    imagemFluxo.addClass('visible');
                    modalFeedbackPositivo.toggle();
                } else {
                    modalOpcoes.hide();
                    modalFeedbackNegativo.toggle();
                }
                break;
            case '7':
                if (selectedOption1 == 7 && selectedOption2 == 2) {
                    clickedButton.addClass('correto');
                    const imagemFluxo = colunaSelecionada.find('.img-fluxo');
                    imagemFluxo.addClass('visible');
                    modalFeedbackPositivo.toggle();
                } else {
                    modalOpcoes.hide();
                    modalFeedbackNegativo.toggle();
                }
                break;
            case '8':
                if (selectedOption1 == 8 && selectedOption2 == 2) {
                    clickedButton.addClass('correto');
                    const imagemFluxo = colunaSelecionada.find('.img-fluxo');
                    imagemFluxo.addClass('visible');
                    modalFeedbackPositivo.toggle();
                } else {
                    modalOpcoes.hide();
                    modalFeedbackNegativo.toggle();
                }
                break;
            case '9':

                if (selectedOption1 == 9 && selectedOption2 == 2) {
                    clickedButton.addClass('correto');
                    const imagemFluxo = colunaSelecionada.find('.img-fluxo');
                    imagemFluxo.addClass('visible');
                    modalFeedbackPositivo.toggle();
                } else {
                    modalOpcoes.hide();
                    modalFeedbackNegativo.toggle();
                }
                break;
            case '10':

                if (selectedOption1 == 10 && selectedOption2 == 2) {
                    clickedButton.addClass('correto');
                    const imagemFluxo = colunaSelecionada.find('.img-fluxo');
                    imagemFluxo.addClass('visible');
                    modalFeedbackPositivo.toggle();
                } else {
                    modalOpcoes.hide();
                    modalFeedbackNegativo.toggle();
                }
                break;
            case '11':

                if (selectedOption1 == 11 && selectedOption2 == 1) {
                    clickedButton.addClass('correto');
                    const imagemFluxo = colunaSelecionada.find('.img-fluxo');
                    imagemFluxo.addClass('visible');
                    modalFeedbackPositivo.toggle();
                } else {
                    modalOpcoes.hide();
                    modalFeedbackNegativo.toggle();
                }
                break;
        }
        modalOpcoes.hide();
        $('.selected').removeClass('selected');
        $('.btn-proximo').addClass('disabled');
        $('.btn-concluir').addClass('disabled');
    });

    $('.btn-proximo').click(function () {
        $('.tela-modal-opcoes-1').fadeOut();
        setTimeout(() => {
            $('.tela-modal-opcoes-2').fadeIn();
        }, 500);
    });

    $('.btn-voltar').click(function () {
        $('.tela-modal-opcoes-2').fadeOut();
        setTimeout(() => {
            $('.tela-modal-opcoes-1').fadeIn();
        }, 500);
    });
}

modalOpcoes.addEventListener('hide.bs.modal', function () {
    $('.tela-modal-opcoes-2').fadeOut();
    setTimeout(() => {
        $('.tela-modal-opcoes-1').fadeIn();
    }, 500);
    $('.selected').removeClass('selected');
});

var modalFeedbackFinal = new bootstrap.Modal(document.getElementById('modalFeedbackFinal'));

modalFeedbackPositivo.addEventListener('hide.bs.modal', function () {
    if ($('.fluxograma-option-selector').length == $('.correto').length) {
        modalFeedbackFinal.show();
    }
});

const scrollableDiv = document.querySelector('.fluxograma-container');
let isDragging = false;
let initialX;

scrollableDiv.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    scrollableDiv.classList.add('grabbing');
    initialX = e.clientX + scrollableDiv.scrollLeft;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.clientX;
    const diffX = initialX - currentX;
    scrollableDiv.scrollLeft = diffX;
});

document.addEventListener('mouseup', (e) => {
    scrollableDiv.classList.remove('grabbing');
    isDragging = false;
});