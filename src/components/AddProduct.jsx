import { useState } from 'react';
import { createProduct } from '../api';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function AddProduct() {
    const [form, setForm] = useState({ name: '', price: '', description: '', category_id: '' });
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCategories().then(response => setCategories(response.data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProduct(form);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <input type="number" placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} required />
            <textarea placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} required />
            
            <select onChange={(e) => setForm({ ...form, category_id: e.target.value })} required>
                <option value="">Select Category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>

            <button type="submit">Add Product</button>
        </form>
    );
}
