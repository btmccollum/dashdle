import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  arg: string;
}

function App({ arg }: AppProps) {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello
      {' '}
      {arg}
      !
    </h1>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<App arg="World" />, rootEl);
});
