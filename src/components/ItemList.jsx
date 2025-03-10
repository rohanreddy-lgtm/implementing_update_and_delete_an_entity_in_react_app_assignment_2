import { useState,useEffect } from "react"; 
import Item from "./Item";

const ItemList = ({ items }) => {
    // your code here
    const [items,setItems] = useState([]);
    const [message, setMessage]= useState("");

    useEffect(()=>{
        const fetchItems = async () =>{
            try{
                const response = await fetch(`${API_URI}/items`);
                if(!response.ok){
                    throw new Error("Failed to fetch items");
                }
                const data= await response.json();
                setItems(data);
            }catch(error){
                setMessage(error.message);
            }
        };

        fetchItems();
    }, []);

    const handleDelete = async (itemId) =>{
        try{
            const response = await fetch(`${API_URI}/items/${itemId}`,{
                method: "DELETE",
            });
            if(!response.ok){
                throw new Error("Failed to delete item");
            }
            setItems(items.filter(item => item.id !== itemId));
            setMessage("Item deleted successfully!");
        }catch(error){
            setMessage(error.message);
        }
    };
    return (
        <div>
            <h2>Item List</h2>
            {message && <p>{message}</p>}
            {items.map((item) => (
                <Item key={item.id} item={item} onDelete={() => handleDelete(item.id)} />
            ))}
        </div>
    );
};

export default ItemList;
