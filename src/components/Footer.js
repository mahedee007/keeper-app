import React from 'react';

const currenYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <p>Copyright @ {currenYear} </p>
        </footer>
    );
};

export default Footer;