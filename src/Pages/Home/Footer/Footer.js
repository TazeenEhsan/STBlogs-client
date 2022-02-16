import React from 'react';

const Footer = () => {

    // const date = new Date().toLocaleString();
    // console.log(date);
    return (
        <div className="mt-5" style={{ backgroundColor: 'black', color: '#DBE6FD' }}>
            <div className="row text-start p-5">
                <div className="col-lg-4 col-sm-4">
                    <h6>53/2, Sukrabad, DHanmondi</h6>
                    <h6>Phone:01752637788</h6>
                    <h6>Email: tazeenehsan73@gmail.com</h6>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <h6>Follow US On</h6>
                    <p><a href="https://github.com/TazeenEhsan" target="_blank" style={{ textDecoration: 'none', color: '#DBE6FD' }}><i className="fab fa-github"></i> Github</a></p>
                    <p><a href="https://www.linkedin.com/in/tazeen-ehsan-429930174/" target="_blank" style={{ textDecoration: 'none', color: '#DBE6FD' }}><i className="fab fa-linkedin"> LinkedIn</i></a></p>
                    <p><a href="https://www.facebook.com/tazeen.ehsan.7" target="blank" style={{ textDecoration: 'none', color: '#DBE6FD' }}><i className="fab fa-facebook"> Facebook</i></a></p>


                </div>
                <div className="col-lg-4 col-sm-4">

                </div>

            </div>
        </div>
    );
};

export default Footer;