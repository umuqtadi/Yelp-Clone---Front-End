import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render(){
        return(
            <footer>
                <section class="ft-main">
                    <div class="ft-main-item">
                    <h2 class="ft-title">About</h2>
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                    </div>
                    <div class="ft-main-item">
                    <h2 class="ft-title">Resources</h2>
                    <ul>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    </div>
                    <div class="ft-main-item">
                    <h2 class="ft-title">Contact</h2>
                    <ul>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Advertise</a></li>
                    </ul>
                    </div>
                    <div class="ft-main-item">
                    <h2 class="ft-title">Stay Updated</h2>
                    <p>Subscribe to our newsletter to get our latest news.</p>
                    <form>
                        <input type="email" name="email" placeholder="Enter email address"/>
                        <input type="submit" value="Subscribe"/>
                    </form>
                    </div>
                </section>

                <section class="ft-social">
                    <ul class="ft-social-list">
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-github"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </section>

                <section class="ft-legal">
                    <ul class="ft-legal-list">
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li>&copy; 2020 Umar B inc.</li>
                    </ul>
                </section>
            </footer>
        )
    }
}

export default Footer