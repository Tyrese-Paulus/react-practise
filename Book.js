import React from 'react'

const Book = ( props ) => {

  const clickHandler = (title) => {
  alert(title);
}

  const { img, title, author} = props;
  return (
    <article className="book">
      <img src = {img} alt=''  />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type = "button" onClick={ () => clickHandler(title)}>example</button>
    </article>
  )
};

export default Book
