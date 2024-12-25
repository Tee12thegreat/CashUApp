import { Fragment } from "react";
import { MouseEvent } from "react";


function ListGroup(){
let items = ['Zimbabwe', 'Poland', 'Canada'];

const handleClick = (event : MouseEvent) => console.log(event);
    
    return (
    <Fragment>
        <h1>List</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className = "list-group">
        {items.map((item, index) => (
            <li className="list-group-item bg-yellow-200 shadoe-md p-2" 
                key={item} 
                onClick={handleClick}>
                    {item}
                </li>
        ))}
            </ul>

    </Fragment>
    );
}

export default ListGroup;