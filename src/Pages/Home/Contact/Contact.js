import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4s5ggjf', 'template_1zs0j74', e.target, 'user_OQGxhxqt55IFndx9VkYyC')
            .then((result) => {
                alert('Message sent successfully.');
                e.target.reset();
            }, (error) => {
                // console.log(error.text);
            });

    }



    return (
        <div>
            <h1>Send Email for contact</h1>
            <form ref={form} onSubmit={sendEmail}>

                <input style={{ width: '340px', margin: '10px' }} type="text" name="user_name" placeholder="Your Name" required /><br />

                <input style={{ width: '340px', margin: '10px' }} type="email" name="user_email" placeholder="Your Email" required /> <br />

                <textarea style={{ width: '340px', margin: '10px' }} name="message" placeholder="Message" /><br />
                {/* <input type="submit" value="Send" /> */}
                <button type="submit" style={{ padding: '10px', border: "2px solid blue", borderRadius: "15px", backgroundColor: "green" }}> Send</button>
            </form>
        </div>
    );
};

export default Contact;