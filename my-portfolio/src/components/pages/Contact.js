import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <input type='text' placeholder='Name' required/>
        <br/><input type='email' name='email' placeholder='Email' required />
        <br/><input type='text' placeholder='Message' required/>
        <br/><input type='submit'/>
      </form>
    </div>
  );
}
