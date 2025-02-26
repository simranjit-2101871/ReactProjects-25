

/*import React, { useState, useEffect } from 'react'

export default function Cart(props) {
    const [cartItems, setCartItems] = useState([]);
    const [result, setResult] = useState(null);
    
    const checkcart = (productID) => {
        const foundItem = cartItems.find(item => item.id === productID)
        setResult(foundItem); // Store result in state
    }

    useEffect(() => {
        setCartItems([...cartItems, props.id]);//yahan par update hone se pahel hi code agge nikal jayyeg so thas why i ma changing my code
        checkcart(props.id)

    }, [props.id]);

    useEffect(() => {
        if (result) {

            // If item exists, increment quantity
            //result.quantity += 1; // Directly modifying object (Not ideal)
            //setCartItems([...cartItems]); // Trigger re-render
            setCartItems(prevCart => prevCart.map(item =>
                item.id === props.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
            
        }
        else {
            //new wauntity will be added here
         return [...prevCart, { id: props.id, quantity: 1 }];
        }


    }, [result])
    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                        <h3>Item ID: {item.id}</h3>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))
            )}
        </div>
    )
}
*/

import { useState, useEffect } from "react";

export default function Cart(props) {
    const [cartItems, setCartItems] = useState([]);

    const decrement = () => {
        setCartItems(cartItems.map(item => 
            item.id === props.id ? { ...item, quantity: item.quantity - 1 } : item
        )); 
    };
    

    const increment = () => {
        setCartItems(cartItems.map(item => 
            item.id === props.id ? { ...item, quantity: item.quantity + 1 } : item
        ));

    };

    useEffect(() => {
        setCartItems(prevCart => {
            const existingItem = prevCart.find(item => item.id === props.id);

            if (existingItem) {
                // If item exists, increment quantity
                return prevCart.map(item =>
                    item.id === props.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // If item is new, add with quantity 1
                return [...prevCart, { id: props.id, quantity: 1 }];
            }
        });
    }, [props.id]);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                        <h3>Item ID: {item.id}</h3>
                        <p><button onClick={decrement}>-</button>Quantity: {item.quantity}<button onClick={increment}>+</button></p>
                    </div>
                ))
            )}
        </div>
    );
}//

