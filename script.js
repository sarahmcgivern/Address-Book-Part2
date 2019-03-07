const section = document.querySelector('.list')
const addButton = document.querySelector('button');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const phoneInput = document.querySelector('.phone');
const relationInput = document.querySelector('.relation');


class AddressBook {
    constructor(contacts) {
      this.contacts = contacts;
    }

    add(contact) {
        this.contacts.push(contact);
            }

    deleteItem(index) {
        this.contacts.splice(index,1);
    }

    display() {
    section.innerHTML = '';
        for(let i =0; i < this.contacts.length; i++) { 
      const item = this.contacts[i];
      const div = document.createElement('div');
      const nameParagraph = document.createElement('p');
      const emailParagraph = document.createElement('p');
      const phoneParagraph = document.createElement('p');
      const relationParagraph = document.createElement('p');
      const deleteButton = document.createElement('deleteButton');
      nameParagraph.innerText = `Name: ${item.name}`;
      emailParagraph.innerText = `Email: ${item.email}`;
      phoneParagraph.innerText = `Phone: ${item.phone}`;
      relationParagraph.innerText = `Relation: ${item.relation}`;
      deleteButton.innerHTML = "<img src='trash.jpg' id='img'>";
      deleteButton.addEventListener('click', () => {
        this.deleteItem(i);
        this.display();
      });
      div.appendChild(nameParagraph);
      div.appendChild(emailParagraph);
      div.appendChild(phoneParagraph);
      div.appendChild(relationParagraph);
      div.appendChild(deleteButton);
      section.appendChild(div);
      }
    }
}

class Contact {
    constructor(name, email, phone, relation) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.relation = relation;
    }
}

    addButton.addEventListener('click', () => {
        const contact = new Contact(nameInput.value, emailInput.value, phoneInput.value, relationInput.value);
        myAddressBook.add(contact);
        myAddressBook.display();
    })      
   

const myAddressBook = new AddressBook ([new Contact('Ian', 'ian@gmail.com', '313-123-4568', 'family'), new Contact ('Kat','kat@gmail.com', '313-123-4577', 'family'), new Contact ('Caro', 'caro@gmail.com', '313-123-4569', 'friend' )]);
console.log(myAddressBook);

myAddressBook.display();

  