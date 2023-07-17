import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Gmail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o9gpdmb', 'template_uoqa23n', form.current, "Dy_BmQl6XmwcN6TYe")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder='Tu nombre y/o nombre de la empresa' />
            <textarea name="message" placeholder='Escribe aquí lo que quieras' />
            <input type="submit" value="Enviar" />
        </form>
    );
};