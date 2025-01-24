import { useState } from 'react';
import { createProduct } from '../api';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function AddProduct() {
    const [form, setForm] = useState({ name: '', price: '', description: '' });
    const navigate = useNavigate();

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
            <button type="submit">Add Product</button>
        </form>
    );
}
