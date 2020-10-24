import React, { useEffect, useState } from 'react';
import './style.css';
import treeImg from '../public/img/tree.jpg';

export default function App() {
  const [api, setApi] = useState('');
  const [formContent, setFormContent] = useState('');
  const [test, setTest] = useState('');
  const [dataUpdateFlague, setDataUpdateFlague] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormContent(value);
  };
  const handleSubmit = (e) => {
    if (!formContent) return;
    e.preventDefault();
    fetch('/api/add-test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: formContent }),
    }).then((data) => console.log('Submit', data));
    setFormContent('');
    setDataUpdateFlague(!dataUpdateFlague);
  };

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then(({ message }) => setApi(message))
      // eslint-disable-next-line no-console
      .catch((err) => console.log('err:', err));
  }, []);
  useEffect(() => {
    fetch('/api/show-test')
      .then((response) => response.json())
      .then((data) => setTest(data));
  }, [dataUpdateFlague]);
  return (
    <>
      <h1>Hello world!!</h1>
      <div>{api}</div>
      <form action="get">
        <input type="text" value={formContent} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Wyślij
        </button>
      </form>
      <ul>
        {test && test.map(({ _id, content }) => <li key={_id}>{content}</li>)}
      </ul>
      <img src={treeImg} alt="tree-public" />
    </>
  );
}
