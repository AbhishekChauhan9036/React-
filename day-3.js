import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div>


    <div ClassName="form">
      fname <input type="text"/>
      </div>
 
      <div>
      lname <input type="text"/>
      </div>
      
 <div>
      gender
       male< input type="radio" name ="gender" id = "male" value = "male"/>
       female< input type="radio" name ="gender" id = "female" value = "female" />
       others< input type="radio" name ="gender" id = "others" value = "others" />
 
       </div>
 
      <div>
        <label for = "country" 
          choose country/>
 
          <select name = "country" id = "mary">
            <option value = "India">India</option>
            <option value = "Pakistan">Pakistan</option>
            <option value = "USA">USA</option>
            <option value = "Israel">Israel</option>

          </select>
      </div>

<div>
     user wants to recieving marketing emails:   <br/> 
     <input  type = "radio" name="bsdk"/>yes 
     <input  type = "radio" name="bsdk"/>no

     </div>
<div>

        <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
  
        </div>
  
    

</div>


    
    
   
       </div>
  
  );
}



