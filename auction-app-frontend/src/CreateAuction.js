import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CreateAuction() {
const [itemName, setItemName] = useState('');
const [description, setDescription] = useState('');
const [endDateTime, setEndDateTime] = useState('');
const [response, setResponse] = useState('');

const handleAuctionSubmit = async (e) => {
    e.preventDefault();
    

    try {
        const result = await axios.post(`http://localhost:3000/auctions`, {
            itemName, description, endDateTime
        });
        setResponse(result.data);
        if (result.data.success) {
            alert('Your auction was created successfully, Auction ID: ${result.data.auctionId}')
        } else {
            setErrorMessage('Failed to place bid.');
        }
    } catch(error) {
        console.error('Error saving auction:', error);
        setErrorMessage('An error occured while saving the auction.');
    }


}

}

export default CreateAuction;