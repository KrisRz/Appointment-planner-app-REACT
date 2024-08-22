import React, { useState, useEffect } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";

const ContactsPage = ({ contacts, addContact }) => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // State variable for duplicate name detection
  const [isDuplicate, setIsDuplicate] = useState(false);

  // useEffect to check for duplicate names
  useEffect(() => {
    const duplicate = contacts.some((contact) => contact.name === name);
    setIsDuplicate(duplicate);
  }, [name, contacts]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate) {
      addContact(name, phone, email);
      setName(''); // Clear the form
      setPhone('');
      setEmail('');
    }
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <ContactForm 
        name={name} 
        setName={setName} 
        phone={phone} 
        setPhone={setPhone} 
        email={email} 
        setEmail={setEmail} 
        handleSubmit={handleSubmit} 
        isDuplicate={isDuplicate} 
      />
      <h2>Contacts</h2>
      <TileList tiles={contacts} />
    </div>
  );
};

export default ContactsPage;
