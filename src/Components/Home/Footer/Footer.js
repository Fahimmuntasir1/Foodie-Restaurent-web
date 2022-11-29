/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

const Footer = () => {
  // const year = getFullYear ()
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <h2 className="text-3xl font-bold">Foodie</h2>
          <p>
            Foodie Restaurant.
            <br />
            &copy; All Right Reserved by Foodie Restaurant{" "}
            {new Date().getFullYear()}
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="underline-effect-footer">Branding</a>
          <a className="underline-effect-footer">Design</a>
          <a className="underline-effect-footer">Marketing</a>
          <a className="underline-effect-footer">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="underline-effect-footer">About us</a>
          <a className="underline-effect-footer">Contact</a>
          <a className="underline-effect-footer">Jobs</a>
          <a className="underline-effect-footer">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="underline-effect-footer">Terms of use</a>
          <a className="underline-effect-footer">Privacy policy</a>
          <a className="underline-effect-footer">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
