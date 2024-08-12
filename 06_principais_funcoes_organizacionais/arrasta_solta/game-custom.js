// Aqui você adiciona ou remove os containers pra onde devem ir os cards
var containers = [
  // Container com os cards que serão realocados
  // Não mexer
  document.querySelector("#cardPile"),

  // Containers que irão receber os cards
  document.querySelector("#slot-1"),
  document.querySelector('#slot-2'),
  document.querySelector('#slot-3'),
  document.querySelector('#slot-4')
];
var audio = new Audio();
var erro = 0;

// Solução ao dragindrop
var scrollable = true;

var listener = function (e) {
  console.log(scrollable)
  if (!scrollable) {
    e.preventDefault();
  }
}

document.addEventListener('touchmove', listener, { passive: false });

// Solução ao dragindrop

dragula({
  containers: containers,
  revertOnSpill: true,
  direction: 'vertical',
  accepts: function (el, target, source, sibling) {
    return el.dataset.target == target.id;
  }
}).on('drag', function (el, source) {
  // On mobile this prevents the default page scrolling while dragging an item.
  scrollable = false;
}).on("drop", function () {
  scrollable = true;

  // Exibir feedback de acerto e ocultar feedback de erro
  $('#feedback-acerto').css('display', 'block');
  $('#feedback-erro').css('display', 'none');

  // Tocar o áudio de acerto
  audio.setAttribute('src', '../assets/atividades/arrasta_solta/acerto.mp3'); // mudar a fonte
  audio.load(); // carregar a nova fonte
  audio.play(); // tocar

  // Exibir modal de acerto
  $('#bgmodal-acerto').modal('show');
}).on("cancel", function () {
  scrollable = true;

  // Exibir feedback de erro e ocultar feedback de acerto
  $('#feedback-acerto').css('display', 'none');
  $('#feedback-erro').css('display', 'block');

  // Tocar o áudio de erro
  audio.setAttribute('src', '../assets/atividades/arrasta_solta/erro.mp3'); // mudar a fonte
  audio.load(); // carregar a nova fonte
  audio.play(); // tocar

  // Exibir modal de erro
  $('#bgmodal-erro').modal('show');
});
