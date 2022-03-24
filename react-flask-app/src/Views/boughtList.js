import React from 'react';
import { List } from "semantic-ui-react";
import axios from 'axios';
import "../CSS_Files/ListStyle.css";

// TODO: This is used in many places, can extract into its own file
const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const ItemList = ({items}) => {
    // Need to get user data for navigation
    const user = JSON.parse(localStorage.getItem("user"));
    const usersId = user[0].userId;

    /*********************************************************************************************
     * Prevent default is called in order to prevent function from automatically getting called. *
     *    By doing this it will only get called when the user clicks edit and will pass the      *
     *                                  necessary information                                    *
    **********************************************************************************************/
    const deleteItemClicked = async (itemId) => {
        const response = await api.delete(`/${usersId}/${itemId}/deleteItem`)

        if (response.status === 200) {
            // Force a refresh of the page.
            window.location.reload();
        }
    }
    const unBoughtItemClicked = async (itemId) => {
        const response = await api.post(`/${itemId}/setunBought`)
        if(response.status === 200){
            window.location.reload();
        }
    }
    return(    
        <List className= 'itemList'>
            {items.map(item => {
                return (
                    <List.Item key = {item.itemId}>
                        <div>
                            <div>
                               <p>{item.itemId.toString()}</p>
                                <h3><a className='link' href={`//${item.url}`} target="_blank" rel="noreferrer">{item.name}</a></h3>
                                <p>${item.price}</p>
                            </div>
                            <p>{item.description}</p>
                            <img src={item.image} alt="" / >
                            <button className='btn' onClick={e => {e.preventDefault(); deleteItemClicked(item.itemId)}}>Delete</button>
                            <button className='btn' onClick={e => {e.preventDefault(); unBoughtItemClicked(item.itemId)}}>Set to unbought</button>
                        </div>
                    </List.Item>
                )
            })}
        </List>
    )
}

export default ItemList;