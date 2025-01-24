import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api';
import { Link } from 'react-router-dom';
import React from 'react';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    };

    const handleDelete = async (id) => {
        await deleteProduct(id);
        loadProducts();
    };

    return (
        <div>
            <h2>Product List</h2>
            <Link to="/add">
                <button>Add Product</button>
            </Link>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <Link to={`/edit/${product.id}`}><button>Edit</button></Link>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


