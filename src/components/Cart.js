import React ,{useState}from 'react';
import "../styles/Cart.css";

 
const Cart = ({cart,setCart}) => {

  const [Price,setPrice]=useState(0);

  const handleRemove = (id) =>{
    const arr = cart.filter((item)=>item.id !== id);
    setCart(arr);
    // handlePrice();
}
  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        
    </article>
  )
}

export default Cart;
