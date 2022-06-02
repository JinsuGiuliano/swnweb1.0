import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { checkUserSession } from './redux/user/user.actions';
import MainHome from './components/home/main.component';
import cdnScripts from './assets/scripts/main';
import scrollScript from './assets/scripts/scroll';
import { fetchProjectsStart } from './redux/project/project.actions';
//import { fetchValueStart } from './redux/values/values.actions';
import { fetchHomeStart } from './redux/home/home.actions';
//import { addCollectionAndDocuments } from './firebase/firebase.utils';
//import { selectValuesValues } from './redux/values/values.selectors'
//import SECTIONS_DATA from './redux/project/SECTIONS_DATA'

const App = () => {
  const dispatch = useDispatch();
 //const values = useSelector(selectValuesValues);
  useEffect( () => {
      dispatch(checkUserSession())
      // // addCollectionAndDocuments('values',values);
      dispatch(fetchProjectsStart())
      dispatch(fetchHomeStart())
      cdnScripts();
      scrollScript();
  },[]);
    return(
        <Routes>
            <Route index element={<MainHome />} />
            <Route path='/signin' element={<SignInAndSignUpPage />} />
        </Routes>
    );
  }


export default App;
