import './JournalForm.css';
import {useState} from 'react';
import Button from '../Button/Button.jsx';

function JournalForm() {
  const [inputData, setInputData] = useState('');

  const inputChange = (evt) => {
    setInputData(evt.target.value);
    console.log(inputData);
  };

  const addJournalItem = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title"/>
      <input type="date" name="date"/>
      <input type="text" name="tag" value={inputData} onChange={inputChange}/>
      <textarea name="post" id="" cols="30" rows="10"></textarea>
      <Button text="Сохранить" onClick={() => console.log('Нажали!')}/>
    </form>
  );
}

export default JournalForm;