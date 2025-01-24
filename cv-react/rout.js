import Acceuil from './page/accueil';
import Apropos from './page/apropos';
import Realisation from './page/realisation';
import Blogs from './page/blog';
import Mention from './page/mention-legales';
import Services from './page/services';
import Contact from './page/contact';
import { Link ,Route, Routes} from "react-router-dom";/*style={{background: "#333"}}*/
export default function Routt() {
    return(
    <Routes>
        <Route path='/' element={ <Accueil/>}></Route>
        <Route path='/Apropos' element={<Apropos/>}></Route>
        <Route path='/Realisation' element={<Realisation/>}></Route>
        <Route path='/Blogs' element={<Blogs/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Mention' element={<Mention/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>)
}