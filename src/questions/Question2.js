import React, { useState } from 'react';

export default function Question2() {
  // Situation: Create a search bar that filters items in the list as the user types.
  // Feel free to refactor as you feel necessary.


  const shoppingList = [
    'Peanut Butter',
    'Peas',
    'Butter',
    'Beans',
    'Eggs',
    'Quiche',
    'Cheese'
  ];

  const [searchText, setSearchText] = useState({ items: shoppingList, searched: "" });

  const handleSearchTextChange = (searchString) => {
    console.log(searchString)
    const searchedItems = shoppingList.filter(item => {
      return item.toLowerCase().includes(searchString.toLowerCase())
    })
    console.log(searchedItems)
    setSearchText(prev => ({ ...prev, items: searchedItems, searched: searchString }))
  }

  return (
    <div>
      <input placeholder = "Search Here" onChange={text => handleSearchTextChange(text.target.value)} />
      {searchText.items.map(item => {
        return (
          <div>
            {item}
          </div>
        )
      })}
    </div>
  )
}
