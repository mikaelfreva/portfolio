import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const TestForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rqo05ka', 'template_e9yqtvb', form.current, 'Cz1tMhwbchQ-coFfP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
     <br /><br /> <br /><br />
    <form ref={form} onSubmit={sendEmail}>
       
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>    
    </>

  );
};