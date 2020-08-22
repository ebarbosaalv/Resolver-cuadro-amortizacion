/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var messages = [{  
  id: 1,
  text: "8080",
  author: "MI IP"
}];



messages.push({  
  id: 2,
  text: "8282",
  author: "otro dato"
});

var aux=messages[1];


//console.log(Object.keys(messages));

function getFullName(item,index) {
    var fullname = [item.id,item.text,item.author].join(" ");
    return fullname;
    
}



console.log(messages.map(getFullName));

//console.log(Object.elements(messages));
