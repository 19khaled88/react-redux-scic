import React from 'react'
import '../css/footer.css'
const Footer = () => {
  return (
    <div>
      {' '}
      <footer className="bg-white">
        <div className=" py-5">
          <div className="row">
            <div className="sub-row one">
              <p className="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <ul className="list-inline mt-4">
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="vimeo">
                    <i className="fa fa-vimeo"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sub-row two">
              <h6 className="text-uppercase font-weight-bold mb-4">Brand</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Oppo
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Samsung
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Iphone
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Xiaomi
                  </a>
                </li>
              </ul>
            </div>
            <div className="sub-row three">
              <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Login
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Register
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Wishlist
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Our Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="sub-row four">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Newsletter
              </h6>
              <p className="text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                itaque temporibus.
              </p>
            </div>
          </div>
        </div>
        <div className="message">
          {' '}
          <div className="p-1 rounded border">
            <div className="input-group">
              <input
                type="text"
                placeholder="Write your message......."
                aria-describedby="button-addon1"
                className="form-control border-0 shadow-0"
              />
              <div className="input-group-append">
                <button
                  id="button-addon1"
                  type="submit"
                  className="btn btn-link"
                >
                  <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light py-4">
          <div className=" text-center">
            <p className="text-muted mb-0 py-2">
              © 2022 Online-Shop All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
