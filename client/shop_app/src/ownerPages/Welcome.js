import React from "react";
import '../App.css'

export const WelcomePage = (props) => {
  return (
    <div>
      <div className="homeImage">
        <h1 className="imageText">Welcome To My Shop</h1>
        <button className="shopNow" onClick={()=>{props.history.push("/products")}}> Shop Now</button>
      </div>
      <div className="contact_us">
        <section className="contact-section bg-black">
            <div className="row">
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fa fa-map-marked-alt text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Address</h4>
                    <hr className="my-4"/>
                    <div className="small text-black-50">VANCOUVER - BC</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fa fa-envelope text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Email</h4>
                    <hr className="my-4"/>
                    <div className="small text-black-50">
                      <a href="#">myShop@goraya.gmail.ca</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fa fa-mobile-alt text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Phone</h4>
                    <hr className="my-4"/>
                    <div className="small text-black-50">+1 (778) 123-1234</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="social d-flex justify-content-center">
              <a href="#" className="mx-2">
                <i href="http://www.google.com" className="fa fa-instagram"></i>
              </a>
              <a href="#" className="mx-2">
                <i className="fa fa-facebook-f"></i>
              </a>
            </div>
        </section>
          <footer className="bg-black small text-center text-white-50">
            <div className="container">
              Copyright &copy; My Shop
            </div>
          </footer>
        </div>
    </div>
  );
};