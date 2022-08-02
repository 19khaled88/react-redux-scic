import React from 'react'
import '../css/footer.css'
const Footer = () => {
  return (
    <div>
      {' '}
      <footer class="bg-white">
        <div class=" py-5">
          <div class="row">
            <div class="sub-row one">
              <p class="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <ul class="list-inline mt-4">
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="pinterest">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="vimeo">
                    <i class="fa fa-vimeo"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="sub-row two">
              <h6 class="text-uppercase font-weight-bold mb-4">Brand</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Oppo
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Samsung
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Iphone
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Xiaomi
                  </a>
                </li>
              </ul>
            </div>
            <div class="sub-row three">
              <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Login
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Register
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Wishlist
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Our Products
                  </a>
                </li>
              </ul>
            </div>
            <div class="sub-row four">
              <h6 class="text-uppercase font-weight-bold mb-4">Newsletter</h6>
              <p class="text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                itaque temporibus.
              </p>
            </div>
          </div>
        </div>
        <div className="message">
          {' '}
          <div class="p-1 rounded border">
            <div class="input-group">
              <input
                type="text"
                placeholder="Write your message......."
                aria-describedby="button-addon1"
                class="form-control border-0 shadow-0"
              />
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link">
                  <i class="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-light py-4">
          <div class=" text-center">
            <p class="text-muted mb-0 py-2">
              © 2022 Online-Shop All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
