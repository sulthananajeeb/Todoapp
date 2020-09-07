import React, { Component } from 'react'
import  './TodoApp.css';




export default class TodoApp extends Component {
    state ={
        input :" ",
        items :[ ],
        edited: ""
    };
    
    handleChange = event =>{
    this.setState({
        input:event.target.value
    });

    };

storeItems = event => {
    event.preventDefault();
     const{input} = this.state;
    //  const allItems= this.state.items;//allitems get all the things in items 
     


    //  allItems.push(input);
    
     this.setState({
         //items:allItems;
        items:[...this.state.items,input],
        input: " "
    });
};
popUp = () =>{
 alert("ho");
};

deleteItem = key =>{
 //const allItems = this.state.items;
 //allItems.splice(key,1);//1 for etra items aanu delete cheyendath enu
 //this.setState({
  //  items:allItems 
//});

//another simple method
this.setState({
    items:this.state.items.filter((data,index)=> index !== key)
    
});
}; 

  render() {
        //oru 50 input indel.exhuthan kashtapad aa.appol js le oru 
        //concept aa destructuring.ath render nte ullila ezhuthunath
        const {input,items} =this.state;
        console.log(items);
        return (
                <div className="todo-container">
                
                <form className="input-block" onSubmit={this.storeItems}>
                <h1>Todo App</h1>
                    <input type="text"
                    value={input} 
                    onChange={this.handleChange} 
                    placeholder="enter items ..."/>
                    </form> 
                        
                      
 <ul>
{items.map((data,index)=>(
  <li key={index}>
    {data} <i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i> 
    <button onClick={this.popUp}>edits</button> </li>
    ))}
         </ul>
            </div>
        )
    }
}
