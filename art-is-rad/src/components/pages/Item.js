import React from "react";

class Item extends Component {
   render() {
       return (
           <div>
               <h1>{item.name}</h1>
               <br />
               <div>
                   {item.description}
               </div>
               <div>
                   <div>
                      <h3>Comments</h3>
                   </div>
                   <div>
                      {item.comments.map(
                          comment=> 
                          <hr />
                          <p>{comment}</p> 
                      )
                      }
                   </div>
               </div>
           </div>
       )
   }
};
export default Item;