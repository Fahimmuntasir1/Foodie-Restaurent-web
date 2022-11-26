/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

const Footer = () => {
  // const year = getFullYear ()
  return (
    <div>
      <footer class="footer p-10 bg-base-200 text-base-content">
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
          <span class="footer-title">Services</span>
          <a class="underline-effect-footer">Branding</a>
          <a class="underline-effect-footer">Design</a>
          <a class="underline-effect-footer">Marketing</a>
          <a class="underline-effect-footer">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="underline-effect-footer">About us</a>
          <a class="underline-effect-footer">Contact</a>
          <a class="underline-effect-footer">Jobs</a>
          <a class="underline-effect-footer">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="underline-effect-footer">Terms of use</a>
          <a class="underline-effect-footer">Privacy policy</a>
          <a class="underline-effect-footer">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
