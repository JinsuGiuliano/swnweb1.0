import React from 'react'
import { useSelector } from 'react-redux';
import { selectHomeFooter } from '../../../../redux/home/home.selectors';
import FooterEdit from './footerEdit.component';
import { Columns } from '../contact/contact.styles';
const Footer = ({onEdit}) => {

    const data = useSelector(selectHomeFooter);

    return(
      <Columns styles={{marginTop:'40px'}}>
        <footer className="footer-container white-text-container px-5">
        <div className="container">
          <div className="row px-3">
            <div className="col-md-4">
              <h4>About us</h4>
              <p>{data.aboutUs}</p>
            </div>
            <div className="col-md-4">
              <h4>Do you like ? Share this !</h4>
              <div>
                <p>
                  <a href={`${data.instagram}`} className="fa-icon" title="">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                  <a href={`${data.facebook}`} className="fa-icon" title="">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </p>
              </div>
              <div>
                <p><small>© Untitled | Website created with <a href="http://www.mashup-template.com/" title="Create website with free html template">Mashup Template</a>/<a href="https://www.unsplash.com/" title="Beautiful Free Images">Unsplash</a></small></p>
              </div>
            </div>
            <div className="col-md-4">
              <h4>Subscribe to newsletter</h4>
              <div className="form-group">
                <div className="input-group">
                  <input type="text" className="form-control footer-input-text" />
                  <div className="input-group-btn">
                    <button type="button" className="btn btn-primary btn-newsletter ">OK</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {
        onEdit?<FooterEdit data={data}/>:null
      }
      </Columns>
      
    )
}

export default Footer;