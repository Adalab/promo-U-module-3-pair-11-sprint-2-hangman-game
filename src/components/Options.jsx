const Options = ({ handleAnacleta, word }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleAnacleta(value);
  };

  return (
    <form onSubmit={(ev) => ev.preventDefault()}>
      <label className="title" htmlFor="word">
        Escribe aquí la palabra que hay que adivinar:
      </label>
      <input
        autoFocus
        autoComplete="off"
        className="form__input"
        maxLength="15"
        type="text"
        id="word"
        name="word"
        onChange={handleChange}
        value={word}
      />
    </form>
  );
};

export default Options;
