
const Item = ({ item, onDelete, onEdit }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <span>{item.name}</span>
            <div>
                <button onClick={() => onEdit(item)} style={{ marginRight: '10px' }}>Edit</button>
                <button onClick={() => onDelete(item.id)} style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
            </div>
        </div>
    );
};

export default Item;