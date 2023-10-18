import React from 'react'
interface PackingItem {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}
interface props {
  items: PackingItem[]
 
}
const Stats:React.FC<props> = ({items}) => {
  const newItem = items.length;
  const packedItems = items.filter((items) => items.packed).length;
const totalPercentage = (packedItems / newItem) * 100;

 function funQuantity(items:PackingItem[]) {
  if(packedItems > 0) {
    return items.filter((item) => item.packed).reduce((acc,curr) => acc + curr.quantity, 0)
  }else {
  return 0;
  }
 }

 const quantityItems =  funQuantity(items)
  let toInsert = "";
 
  if(quantityItems > 1) {
    toInsert = "quantity"
  }else {
    toInsert = "quantites"
  }
  return (
    <div className='footer'>
    {
      totalPercentage === 100?  <h3>Your bag is full,Ready to go ✈️. </h3>:<h3>"You got total of {newItem} items, you have already packed {packedItems} things, total of {quantityItems} {toInsert}.{totalPercentage}% of bag.</h3>
    }
   

    </div>
  )
}

export default Stats
