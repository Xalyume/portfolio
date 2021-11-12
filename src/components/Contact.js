import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black" }}>
                        <span class="iconify" data-icon="bx:bxs-contact"></span>
                        <span> Contact Me</span>
                    </h1>
                    <div>
                        <div>
                            <div className="social-links" style={{ margin: "0 30%" }}>
                                <p className="fas fa-envelope-square" style={{ fontWeight: "normal" }}>: <a href="mailto:williamjang@gmail.com" rel="noopener noreferrer"
                                    style={{ fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif", color: 'black', fontWeight: "bold"}}>
                                    williamhjang@gmail.com
                                </a>
                                </p>
                                <br />
                                <p className="fab fa-github">: <a target="__blank" href="https://github.com/xalyume" rel="noopener noreferrer"
                                    style={{ fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif", fontWeight: "bold", color: 'black' }}>Github</a></p>
                                <br />
                                <p className="fab fa-linkedin">: <a target="__blank" href="https://www.linkedin.com/in/william-h-jang/" rel="noopener noreferrer"
                                    style={{ fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif", fontWeight: "bold", color: 'black' }}>LinkedIn</a></p>
                                <br />
                                <p className="fab fa-angellist">: <a target="__blank" href="https://angel.co/u/william-jang-1" rel="noopener noreferrer"
                                    style={{ fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif", fontWeight: "bold", color: 'black' }}>Angel List</a></p>
                            </div>
                        </div>
                    </div >
                </div >
            </section >
        )
    }
}

export default Contact;
