import React, { useState } from 'react';
import './NewProductForm.css';

const NewProductForm = () => {
    const initialFormData = {
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [formError, setFormError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateFormData = () => {
        for (let field in formData) {
            if (!formData[field]) {
                return 'Please fill out all fields.';
            }
        }

        if (formData.quantity < 0 || formData.price < 0) {
            return 'Quantity and Price cannot be negative.';
        }

        const regex = /^[a-zA-Z0-9 ]{3,50}$/;  // Alphanumeric, 3 to 50 characters
        if (!regex.test(formData.name) || !regex.test(formData.description) || !regex.test(formData.category)) {
            return 'Name, Description, and Category should be alphanumeric and between 3 to 50 characters.';
        }

        return '';  // No validation error found
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationError = validateFormData();
        if (validationError) {
            setFormError(validationError);
            return;
        }

        setFormError('');
        setIsSubmitted(true);
        setFormData(initialFormData);  // Reset form fields
    };

    const handleCancel = () => {
        setFormData(initialFormData);  // Reset form fields
        setFormError('');
        setIsSubmitted(false);
    };

    return (
        <div className="form-container">
            <h2>New Product</h2>
            {formError && <p className="error-message">{formError}</p>}
            {isSubmitted && <p className="success-message">Submitted successfully!</p>}
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
                <button type="button" onClick={handleCancel}>CANCEL</button>
            </form>
        </div>
    );
};

export default NewProductForm;
