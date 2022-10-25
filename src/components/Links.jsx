import React from "react";

const Links = () => {
  return (
  <div>
    <button id="btn__twitter">
      <a
        className="a__twitter"
        href="https://twitter.com/PrestonOsoro"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter Link
      </a>
      </button>
      <button id="btn__zuri">
        <a
          className="a__zuri"
          href="https://training.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuri Training
        </a>
      </button>
      
      <button id="books">
        <a 
          className="a__books"
          href="http://books.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuri Books
        </a>
      </button>

      <button id="book__python">
        <a
          className="a__pythonBooks"
          href="https://books.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
        >
          Python Books
        </a>
      </button>

      <button id="pitch">
        <a 
          className="a__backgroundCheck"
          href="https://background.zuri.team"
          target="_blank"
          rel="noopener noreferrer"
        > 
         Background Check For Coding 
        </a>
      </button>
      
      <button id="book__design">
        <a 
          className="a__bookDesign"
          href="https://books.zuri.team/design-rules "
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Design
        </a>
        </button>

        
  </div>
     
  )
};



export default Links;
