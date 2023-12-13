import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import CartProduct from "../../components/CartProduct/CartProduct";


const Cart = () => {
    const {user} = useContext(AuthContext)
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState(cart);


    useEffect(()=>{
        fetch(`https://fashion-apparel-server-navy.vercel.app/cart/${user?.email}`)
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            setCart(data)

        })
    },[user])
    return (
        <div>
           <div className="grid md:grid-cols-2 gap-6">
           {
                cart?.map(aCart=> <CartProduct
                key={aCart._id}
                aCart={aCart}
                setProduct={setProduct}
                product={product}
                
                >

                </CartProduct>)
            }
           </div>
        </div>
    );
};

export default Cart;