import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Menu from './menu/menu.component'
import Hero from './hero/hero.component';
import MisionVision from './Mision&Vision/misionVision.component';
import Inspiration from './Inspiration/inpiration.component';
import Contact from './contact/contact.component';
import Footer from './footer/footer.component';
import Projects from './projects/projects.component.jsx';
import FloatingWhatsApp from 'react-floating-whatsapp';
import { selectHomeOnEdit, selectHomeValues, selectHomeBalance } from '../../redux/home/home.selectors';
import "./main.97292821.css";
import './styles.scss'
import ErrorBoundary from '../../ErrorBoundary'

import { changeEditMode } from '../../redux/home/home.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// <Footer onEdit={onEdit}/>
const MainHome = ()=> {
      const currentUser = useSelector(selectCurrentUser)
      const dispatch = useDispatch()
      const onEdit = useSelector(selectHomeOnEdit)
      const ourValues = useSelector(selectHomeValues)
      const ourBalances = useSelector(selectHomeBalance)
        return(
        <ErrorBoundary>  
          <div>
       
              <Menu ourBalances={ourBalances} onEdit={onEdit}/>
          
              {
                currentUser ?
                 onEdit?
                <button onClick={()=> dispatch(changeEditMode(false))} style={{zIndex:'999999999999999999',position:'fixed',top:'5px', right:'5px'}}>Back to Normal</button>
                    :
                <button onClick={()=> dispatch(changeEditMode(true))} style={{zIndex:'999999999999999999',position:'fixed',top:'5px', right:'5px'}}>Go to Edit Mode</button>
                : null
              }
              <Hero onEdit={onEdit}/>
              <MisionVision ourValues={ourValues} onEdit={onEdit}/>
              <Inspiration onEdit={onEdit}/>
              <Projects onEdit={onEdit}/>
              <Contact onEdit={onEdit}/>
              
          </div>
        </ErrorBoundary>
        );
}

export default MainHome;