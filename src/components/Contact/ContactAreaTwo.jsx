import Link from "next/link";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactAreaTwo = (event) => {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const data = {
        company_name: event.target.company_name.value,
        name: event.target.name.value,
        city: event.target.city.value,
        country: event.target.country.value,
        phone: event.target.phone.value,
        email: event.target.email.value,
        message: event.target.message.value,
        product: event.target.product.value,
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/form'
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      
      const optionstoast = {
        position: toast.POSITION.BOTTOM_RIGHT,
    };

      if(result = "success"){
      toast.success("Contact form send successfully !", optionstoast);
      }
    }

    return (
    <>
    
      <section className="contact__area-2">
        <div className="container">
          <div className="contact__form">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section__wrapper mb-45">
                    <h4 className="section__title"> 
                 
                     </h4>
                
                  
                    <div className="r-text">
                      <span> </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="contact-filed contact-icon-office mb-20">
                          <input
                            type="text"
                            name="company_name"
                            placeholder="Company Name"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-filed mb-20">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-filed contact-icon-city mb-20">
                          <input
                            type="text"
                            name="city"
                            placeholder="City"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-filed contact-icon-flag mb-20">
                          <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-filed contact-icon-phone mb-20">
                          <input
                            type="number"
                            name="phone"
                            placeholder="Phone Number"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-filed contact-icon-mail mb-20">
                          
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required={true}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="contact-filed contact-icon-message mb-25">
                      <textarea
                        placeholder="Message"
                        name="message"
                        required={true}
                      ></textarea>
                       <input type="file" accept="image/png, image/jpeg, image/jpg" name="image" className="box" required={true}></input>
                      <div className="col-lg-6">
                        <div className="contact-filed contact-icon-product mb-20">
                          
                          <input
                            email="text"
                            name="product"
                            placeholder="Product"
                            required={true}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="contact__form-agree  d-flex align-items-center mb-20">
                      <input
                        name="checkbox"
                        className="e-check-input"
                        type="checkbox"
                        id="e-agree"
                        required={true}
                        title="You must accept Terms and Conditions"
                      />
                      <label className="e-check-label" htmlFor="e-agree">
                        I agree to the
                        <Link href="/contact">Terms &amp; Conditions</Link>
                      </label>
                    </div>
                    <div className="form-submit text-center">
                      <button className="tp-btn" type="submit">
                        Submit Request
                      </button>
                      <ToastContainer
                      theme="colored" />
                    </div>
                    <p className="ajax-response"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactAreaTwo;
