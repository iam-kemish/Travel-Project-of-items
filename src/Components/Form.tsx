// import {useState} from 'react'

import React, { useState } from 'react'
import PackingLists from './PackingLists';
import Footer from './Footer';

interface PackingItem {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

const Form = () => {
  const [items, setItems] = useState<PackingItem[]>([]);

  const [description, setDescription] = useState("");
 const[quantity, setQuantity] = useState(1);

  const handleAdd = (item:PackingItem) =>{
    setItems((items) => [...items, item])
    console.log(item)
  }


  function handleDelete(id: number) {
  setItems((items) => items.filter((item) => item.id !== id))
}


 function handleToggleItem(id: number) {
  setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed}: item))
 }
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
   if(!description) return;
   const newItemsToAdd = {description,quantity, id:Number(new Date()), packed: false}
   handleAdd(newItemsToAdd)
   console.log(quantity)
   setQuantity(1)
   setDescription("")
  }
 

  
 
  return (
   <>
    <form className='add-form' onSubmit={handleSubmit}>
     <h3>What do you need for your 😍 trip?</h3>  
     <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
      
     {
       Array.from({length: 20}, (_, i) => i+1).map((num) =>{
           
         return (
           <option value={num} key={num}>{num}</option>
           )
          })
     
      
        }
     </select>
     <input type="text" placeholder='Enter item name' value={description} onChange={(e) =>  setDescription(e.target.value)} />
     <button >ADD</button>
    </form>

  <PackingLists items={items} deleteItem = {handleDelete} packItem = {handleToggleItem}/>
  <Footer  items={items}/>
   </>
  )
}

export default Form;
