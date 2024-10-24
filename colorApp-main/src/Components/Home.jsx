import React from "react";
import SingleColor from "./SingleColor/SingleColor";
import Values from "values.js";
import { useState } from 'react';

const Home = () => {
  const [list, setList] = useState(new Values("#f15025").all(10));
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
        let colors = new Values(color).all(10)
        setList(colors)
    }catch (error) {
        setError(true)
        console.log(error);
    }
  }
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text"
           placeholder="#f15025"
           value={color}
           onChange={(e) => setColor(e.target.value)}
           className={`${error ? "error" : null}`}
           />
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
        <SingleColor 
        key={index}
        {...color}
        index={index}
        hexColor={color.hex}
        />

        ))}
      </section>
    </>
  );
};

export default Home;
