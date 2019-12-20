import React from 'react';
import Navigation from '../pages/navigation'
function Contact(){
    return(
        <div>
          <Navigation/>
      <h2 className="form-header">Send me a Message</h2>    
      <h3 className="form-sub-header">Got a question? We'd love to hear from you. 
      <br/>Send us a message and we'll respond as soon as possible.</h3>    
        <div className="login-item">
          <div className="form-box">
            <form>
              {/* action="mailto:kirty2991@gmail.com" method="post" */}
                  <div className="form-login">
                      <label for="username"> Name</label><br/>
                      <input id="username" type="text" class="form-input"required/><br/>
                  </div>
                  <div className="form-login">
                      <label for="email"> Email</label><br/>
                      <input id="email" type="email" class="form-input"required/><br/>
                  </div>
      
                  <div className="form-login">
                      <label for="message"> Message</label><br/>
                      <textarea id="message" type="textarea" class="form-input"required/><br/>
                  </div>
                  <div className="form-login">
                <input type="submit" value="Send Message" />
            </div>
            
            </form>
            
          </div>
        </div>
      </div>
    )
}
export default Contact;