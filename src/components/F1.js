import "./style.css"
import { useState } from "react";


function F1() {
    const [count, setCount] = useState(0)

    const updateCount = () => {
        setCount(document.getElementById('address').value.trim().split(/\s+/).length);       
    }


    return(
        <div class="shadow-lg p-2 mb-2 bg-body rounded ">
            <h1 class="text">Responsive Paragraph Word Count</h1>
            <textarea id="address" rows="6" class="textarea" onChange={updateCount}></textarea>
            <p class="countText">Word Count: {count}</p>
        </div>
    )
}

export default F1;