import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'react-chat-widget/lib/styles.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { checkUserSession } from './redux/user/user.actions';
import MainHome from './components/home/sections/main.component';
import cdnScripts from './assets/scripts/main';
import { fetchProjectsStart } from './redux/directory/projects.actions';
import { fetchValueStart } from './redux/values/values.actions';
//import { addCollectionAndDocuments } from './firebase/firebase.utils';
//import { selectValuesValues } from './redux/values/values.selectors'
//import SECTIONS_DATA from './redux/directory/SECTIONS_DATA'

const App = () => {
  const dispatch = useDispatch();
 //const values = useSelector(selectValuesValues);
  useEffect(() => {
    cdnScripts();
   // addCollectionAndDocuments('values',values);
    dispatch(fetchProjectsStart());
    dispatch(fetchValueStart());
    dispatch(checkUserSession());
  });
    return(
        <Routes>
            <Route index element={<MainHome />} />
            <Route path='signin' element={<SignInAndSignUpPage />} />
        </Routes>
    );
  }


export default App;
