import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { selectHomeContact } from '../../../redux/home/home.selectors';
import { Columns } from './contact.styles';
import ContactEdit from './contactEdit.component';
const Contact = ({onEdit}) => {
  const data = useSelector(selectHomeContact)
    return(
    <div style={{padding:'80px 0px'}}>      
     { 
      data && 
      <Columns>
            <div>
              <img src='assets/images/logo-swn.png' alt='' width={'150px'}  />
            </div>
            <div>
              <h3>Telefoonnummer</h3>
              <p>{data.phone}</p>
              <h3>Email</h3>
              <p>{data.email}</p>
            </div>
            <div>
              <h3>Adres</h3>
              <p>{data.address}</p>
              <h3>Openingstijden</h3>
              <p>{data.hours}</p>
            </div>
            <div>
            <h3>Rekeningnummer</h3>
            <p>NL 53 INGB 0009 4533 65</p>
            <h3>Naam</h3>
            <p>Stg Wereldvriendschap in Nood</p>
            </div>
           
            {
              onEdit?<ContactEdit data={data}/>:null
            }
        
      </Columns>}
</div>

      
    )
}

export default Contact;