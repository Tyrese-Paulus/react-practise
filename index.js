import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

function Booklist() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  )
};

const Image = () => {
  return(
    <img src="https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg" alt=""/>
  )
}

const Title = () => <h1>Atomic Habits: An Easy and Proven Way to Build Good Habits and Break Bad Ones</h1>

const Author = () => (<h4 style = {{color: '617d98',fontSize:'0.75rem',marginTop: '0.25rem'}}>James Clear</h4>
)
ReactDom.render(<Booklist />, document.getElementById('root'));