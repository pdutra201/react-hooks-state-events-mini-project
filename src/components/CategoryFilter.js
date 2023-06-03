import React from "react";

function CategoryFilter({category, categories, setCategory}) {
  

  const categoriesBtn = categories.map((cat) => {
    const className = cat === category ? "selected" : null
  return (
  <button key={cat} className={className} onClick={() => setCategory(cat)} >{cat}</button>
  )}
  )
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesBtn}
    </div>
  );
}

export default CategoryFilter;
