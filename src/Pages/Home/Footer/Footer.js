import React from 'react';

const Footer = () => {

    const date = new Date().toLocaleString();
    // console.log(date);
    return (
        <div className="mt-5" style={{ backgroundColor: 'black', color: 'gold' }}>
            <div className="row text-start p-5">
                <div className="col-lg-4 col-sm-4">
                    <h6>53/2, Sukrabad, DHanmondi</h6>
                    <h6>Phone:01752637789</h6>
                    <h6>Email: tazeenehsan73@gmail.com</h6>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <h6>Follow me on</h6>
                    <p><i className="fab fa-github"></i> Github</p>
                    <p><i className="fab fa-linkedin"> LinkedIn</i></p>
                    <p><i className="fab fa-facebook"> Facebook</i></p>
                </div>
                <div className="col-lg-4 col-sm-4">

                </div>

            </div>
        </div>
    );
};

export default Footer;