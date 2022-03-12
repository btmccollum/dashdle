import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  arg: string;
}

const App = ({ arg }: AppProps) => {
  // return <div>{`Hello, ${arg}!`}</div>;
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  ReactDOM.render(<App arg="Rails 7 with ESBuild" />, rootEl);
});

