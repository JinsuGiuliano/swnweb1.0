import React from 'react'
import { useSelector } from 'react-redux';
import { selectHomeContact } from '../../../redux/home/home.selectors';
import { Columns } from './contact.styles';
import ContactEdit from './contactEdit.component';
const Contact = ({onEdit}) => {
  const data = useSelector(selectHomeContact)
    return(
    <div>      
        <Columns>
                <div>
                  <img src='assets/images/logo-swn.png' alt='' width={'150px'}  />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>{data.phone}</p>
                  <h3>E-mail</h3>
                  <p>{data.email}</p>
                </div>
                <div>
                  <h3>Address</h3>
                  <p>{data.address}</p>
                  <h3>Open hours</h3>
                  <p>{data.hours}</p>
                </div>
{
  onEdit?<ContactEdit data={data}/>:null
}
        
        </Columns>
</div>

      
    )
}

export default Contact;