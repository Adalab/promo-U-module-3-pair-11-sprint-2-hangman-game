const Instructions = () => {
  return (
    <section className="instructions">
      <p>
        En el juego del ahorcado, un jugador elige una palabra oculta y el otro
        intenta adivinarla letra por letra. Si adivina una letra correcta, se
        revela en la palabra; si adivina una letra incorrecta, se dibuja una
        parte del ahorcado. El objetivo es adivinar la palabra antes de cometer
        13 errores. Si el jugador adivina la palabra antes de alcanzar los 13
        fallos, gana; de lo contrario, pierde.
      </p>
      <p>
        Recuerda, el juego implica adivinar letras de la palabra oculta y evitar
        cometer demasiados errores antes de completar la palabra. ¡Disfruta del
        desafío!
      </p>
    </section>
  );
};

export default Instructions;
