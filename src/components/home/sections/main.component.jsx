import React from 'react'
import { useSelector } from 'react-redux';
import Menu from '../sections/menu/menu.component'
import Hero from '../sections/hero/hero.component';
import MisionVision from '../sections/Mision&Vision/misionVision.component';
import Inspiration from '../sections/Inspiration/inpiration.component';
import Contact from '../sections/contact/contact.component';
import Footer from '../sections/footer/footer.component';
import Directory from '../directory/directory.component.jsx';
import FloatingWhatsApp from 'react-floating-whatsapp';
import { selectHomeOnEdit } from '../../../redux/home/home.selectors';
import "../sections/main.97292821.css";
import '../../editMode/styles.scss'
import ErrorBoundary from '../../../ErrorBoundary'

const MainHome = ()=> {
  const onEdit = useSelector(selectHomeOnEdit)

        return(
        <ErrorBoundary>  
          <div>
              <Menu  onEdit={onEdit}/>
              <Hero onEdit={onEdit}/>
              <MisionVision onEdit={onEdit}/>
              <Inspiration onEdit={onEdit}/>
              <Directory onEdit={onEdit}/>
              <Contact onEdit={onEdit}/>
              <Footer onEdit={onEdit}/>
              <FloatingWhatsApp
                phoneNumber="123456789"
                avatar='assets/images/logo-swn.png'
                accountName="SWN"
                allowClickAway
                notification
                notificationDelay={60000} // 1 minute
                styles={{zIndex:'99999999'}}
              />
          </div>
        </ErrorBoundary>
        );
}

export default MainHome;