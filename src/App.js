import { useState, useEffect } from 'react';
import './App.css';
import {db} from './firebase-config';
import {collection, getDocs, addDoc,deleteDoc,doc,} from "firebase/firestore";

function App() {
const [newProduct, setNewProduct] = useState("");
const [newname, setNewname] = useState(0);

const [products, setProducts] = useState([]);
const productsCollectionRef = collection(db, "products");

const createProduct = async () => {
 await addDoc(productsCollectionRef, { product: newProduct, name: newname})
};

const deleteProduct = async (id) => {
  const productDoc = doc(db, "products", id);
  await deleteDoc(productDoc);

}
useEffect(() => {
const getProducts = async () => {
const data = await getDocs(productsCollectionRef);
setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
};

getProducts();
},[]);

  return (
    <div className="App">
    <input placeholder = "Product.." 
    onChange={(event) => {setNewProduct(event.target.value);
      }}
      />
    <input type = "name" 
    placeholder = "name..."
    onChange={(event) => {
      setNewname(event.target.value);
    }}
    />

    <button onClick = {createProduct}> Create products</button>
    {products.map((product) => {
      
      return (
        <div>
        {" "}
      <h2> product: {product.product} </h2>
      <h2> name: {product.name} </h2>

      <button onClick={ () => {deleteProduct(product.id);

      }}>
      {""}
      Delete Product
      </button>
      </div>
      );
    })}
      
    </div>
  );
}

export default App;
