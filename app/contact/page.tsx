"use client";
import React from 'react';

export default function Contact() {
    return (
        <div>
            <style jsx>{`
                .main {
                    display: flex;
                    justify-content: center;
                }
                
                form {
                    display: flex;
                    flex-direction: column;
                    width: 30rem;
                    margin: 2rem;
                }
                input, textarea {
                    margin-bottom: 1rem;
                    padding: 0.5rem;
                    font-size: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                    
                .contactInfo {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    border-left: 1px solid #ccc;
                    padding: 2rem;
                }
                button {
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    width: 25%;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
                    .fonts{
                        margin-right: 0.5rem;
                        font-size: 1.5rem;
                        }
                .fa-fade {
                    margin-bottom: 1rem;
                    margin-right: 0.5rem;
                }
                a:hover {
                    color: #007bff;
                }
                

            `}</style>
            <div className='main'>
            <form action="">
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <textarea placeholder='Message'></textarea>
                <button>Submit</button>
            </form>
            <div className='contactInfo'>
                <p><i className="fas fa-phone fa-fade"></i>  123-456-7890</p>
                <p><i className="far fa-envelope fa-fade"></i> example@email.com</p>
                <a href="https://www.youtube.com/@JaiMaaKalkaTraders"><i className="fab fa-youtube fa-fade"></i> YouTube</a>
                <a href="https://www.instagram.com/_jmk_traders/"><i className="fab fa-instagram fa-fade"></i> Instagram</a>
                <a href=""><i className="fa-brands fa-facebook-f fa-fade"></i> Facebook</a>
                <a href=""><i className="fab fa-x-twitter fa-fade"></i> Twitter</a>
                <a href=""><i className="fa-brands fa-linkedin-in fa-fade"></i> LinkedIn</a>
            </div>
            </div>
        </div>
    );
}