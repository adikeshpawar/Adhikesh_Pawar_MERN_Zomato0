import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const FoodItemPage = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', description: '', price: '', image: '' });
    const [editingItem, setEditingItem] = useState(null); // New state for tracking edit mode
    const [error, setError] = useState(null);

    // Fetch items from the backend
    useEffect(() => {
        axios.get('http://localhost:5000/api/items')
            .then((response) => {
                setFoodItems(response.data);
            })
            .catch((error) => console.error(error));
    }, []);

    // Handle form input
    const handleInputChange = (e) => {
        setNewItem({ ...newItem, [e.target.name]: e.target.value });
    };

    // Add a new item
    const addItem = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/items', newItem);
            setFoodItems([...foodItems, response.data]);
            setNewItem({ name: '', description: '', price: '', image: '' });
            // alert('Item added successfully!');
        } catch (error) {
            console.error('Error adding item:', error);
            setError('Failed to add item. Please try again.');
        }
    };

    // Update an item
    const updateItem = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/items/${editingItem._id}`, newItem);
            const updatedItems = foodItems.map(item =>
                item._id === editingItem._id ? response.data : item
            );
            setFoodItems(updatedItems);
            setEditingItem(null);
            setNewItem({ name: '', description: '', price: '', image: '' });
            // alert('Item updated successfully!');
        } catch (error) {
            console.error('Error updating item:', error);
            setError('Failed to update item. Please try again.');
        }
    };

    // Delete an item
    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/items/${id}`);
            setFoodItems(foodItems.filter(item => item._id !== id));
        } catch (error) {
            console.error("Error deleting item:", error);
            setError("Failed to delete item.");
        }
    };

    // Handle edit click
    const handleEditClick = (item) => {
        setEditingItem(item);
        setNewItem({
            name: item.name,
            description: item.description,
            price: item.price,
            image: item.image
        });
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Food Items</h1>

                <div className="mb-6 w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                        {editingItem ? 'Edit Food Item' : 'Add New Food Item'}
                    </h2>
                    <input
                        name="name"
                        value={newItem.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="mb-2 p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                    />
                    <input
                        name="description"
                        value={newItem.description}
                        onChange={handleInputChange}
                        placeholder="Description"
                        className="mb-2 p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                    />
                    <input
                        name="price"
                        value={newItem.price}
                        onChange={handleInputChange}
                        placeholder="Price"
                        className="mb-2 p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                    />
                    <input
                        name="image"
                        value={newItem.image}
                        onChange={handleInputChange}
                        placeholder="Image URL"
                        className="mb-4 p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                    />
                    <button
                        onClick={editingItem ? updateItem : addItem}
                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                    >
                        {editingItem ? 'Update Item' : 'Add Item'}
                    </button>
                </div>

                {error && <p className="text-red-500">{error}</p>}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
                    {Array.isArray(foodItems) && foodItems.length > 0 ? (
                        foodItems.map((item) => (
                            <div key={item._id} className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-md mb-4" />
                                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                <p className="text-gray-600">{item.description}</p>
                                <p className="text-lg font-bold text-gray-900">Rs. {item.price}</p>
                                <button
                                    onClick={() => handleEditClick(item)}
                                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteItem(item._id)}
                                    className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No food items found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default FoodItemPage;
