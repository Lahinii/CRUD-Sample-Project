import { useEffect, useState } from 'react';
import { getProductById, updateProduct } from '../api';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditProduct() {
    const [form, setForm] = useState({ name: '', price: '', description: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const response = await getProductById(id);
        setForm(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProduct(id, form);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
            <button type="submit">Update Product</button>
        </form>
    );
}
