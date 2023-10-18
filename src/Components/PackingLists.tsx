import React from 'react'
interface PackingItem {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  }
  interface props {
    items: PackingItem[]
    deleteItem : (id : number) => void;
    packItem: (id: number) => void;
  }
 
const PackingLists:React.FC<props> = ({items, deleteItem, packItem}) => {
  return (
   
        <div className='mainList'>
      <ul className='list'>
     {
        items.map((item)=>{
            return (
                <li key={item.id}>
              <button style={{color: "red"}} onClick={() => deleteItem(item.id)}> X</button>   
            <span style={item.packed? {textDecoration: "line-through"}: {}}> 
            <input type="checkbox" checked={item.packed} onChange={() => packItem(item.id)} /> {item.quantity} {item.description}</span>
             
            </li>
            )
        })
     }
    </ul>
  </div>
    
  )
}

export default PackingLists
