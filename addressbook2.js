"use strict";
//Here's my contact class
class Contact {
  constructor(name, email, phone, relation){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

//Here's my address book class
class AddressBook {
    constructor() {
    this.contacts = [];   
    }
    
//Method
add(info){
    let newContact = new Contact(info.name, info.email, info.phone, info.relation);
    this.contacts.push(newContact);
    console.log(this.contacts);
}
    
//Method
removeAt(index) {
 this.contacts.splice(index, 1);
    }
    
//Method
  print() {
     console.log(this.contacts);
  }
}

const address = new AddressBook();

{
    let info = {
      name: document.getElementById("name").value,
      email: document.getElementById("emailAddress").value,
      phone: document.getElementById("number").value,
      relation: document.getElementById("relation").value
    };
    
      document.getElementsByClassName("addButton").onclick = address.add(info);
  }
    
  /*if (greeting === "remove") {
      let removeGreeting = prompt ("Which number would you like to delete?");
      address.removeAt(removeGreeting);
  }
    
  if (greeting === "print") {
    address.print();
  }
    
  if (greeting === "quit") {
    console.log ("Byeeeee");
      break;
  }*/
//}