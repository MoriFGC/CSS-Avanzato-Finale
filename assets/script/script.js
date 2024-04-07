// faccio in modo che quando scrollo sul documento succedono cose...
document.addEventListener('scroll', function() {
  // vado a puntare la classe scroll che ho messo negli ultimi 3 "caroselli"
  let films = document.querySelectorAll('.scroll');
// queste sono le opzioni che ho per visualizzare l'elemento
  let options = {
    root: null, // null sta per viewport
    rootMargin: '0px', // questo è il margine che serve per visualizzare l'elemento
    threshold: 0.1 // appena visualizzo il 10% dell'elemento compare
  };

  // la funzione di callback che verrà eseguita quando un determinato elemento entra o esce dalla viewport.
  function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // se l'elemento entra nella viwport allora aggiungi la classe
        entry.target.classList.add('show-carousel');
      } else {
        entry.target.classList.remove('show-carousel');
      }
    });
  }

  let observer = new IntersectionObserver(callback, options);
 // questo è l'elemento che voglio osservare 
  films.forEach(film => {
    observer.observe(film);
  });
});
