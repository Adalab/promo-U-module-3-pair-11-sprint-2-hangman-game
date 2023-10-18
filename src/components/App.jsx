import { useEffect, useState } from 'react';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';



function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const handleKeyDown = (ev) => {
    ev.target.setSelectionRange(0, 1);
  };

  const handleChange = (value) => {
      handleLastLetter(value);
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };



  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };



  return (
    <div className="page">
      <Header />
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters}/>
          
          <ErrorLetters
          word={word} userLetters={userLetters}
          />
          <Form
          lastLetter={lastLetter}
          handleKeyDown={handleKeyDown}
          handleChange={handleChange}
          />

        </section>
        <Dummy number={getNumberOfErrors()}/>
       
      </main>
    </div>
  );
}

export default App;
