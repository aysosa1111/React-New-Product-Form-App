import React, { useState } from 'react';
import './NewProductForm.css';

const NewProductForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    });

    const [formError, setFormError] = useState(''); // State to hold error message

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Check if all fields are filled out
        for (let field in formData) {
            if (!formData[field]) {
                setFormError('Please fill out all fields.');
                return;
            }
        }
        
        setFormError(''); // Clear error message if any
        console.log(formData); // Handle form submission logic here
    };

    return (
        <div className="form-container">
            <h2>New Product</h2>
            {formError && <p className="error-message">{formError}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Description" 
                    value={formData.description} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="category" 
                    placeholder="Category" 
                    value={formData.category} 
                    onChange={handleChange}
                />
                <input 
                    type="number" 
                    name="quantity" 
                    placeholder="Quantity" 
                    value={formData.quantity} 
                    onChange={handleChange}
                />
                <input 
                    type="number" 
                    name="price" 
                    placeholder="Price" 
                    value={formData.price} 
                    onChange={handleChange}
                />
                <input type="submit" value="SUBMIT" />
                <button type="button">CANCEL</button>
            </form>
        </div>
    );
};

export default NewProductForm;
