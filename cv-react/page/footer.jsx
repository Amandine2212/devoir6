import "../css-page/footer.css";

import {
  Link,
  Route,
  Routes,
} from "react-router-dom"; /*style={{background: "#333"}}*/
function footer() {
  return (
    <div class="p">
      <div class="containeur">
        <div class=" row justify-content-center footer1">
          <div class="col-md-6 col-lg-3 mb-5">
            <h6>John Doe</h6>
            <p>
              40 Rue Laure Diebold <br />
              69009 Lyon, France
              <br />
              Téléphone : 06 20 30 40 50
            </p>
          </div>
          <div class="col-md-6 col-lg-3 mb-5">
            <h6>Liens utiles</h6>

            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/Apropos">A propos de</Link>
              </li>
              <li>
                <Link to="/Services">Prestations de service</Link>
              </li>
              <li>
                <Link to="/Contact">Me contacter</Link>
              </li>
              <li>
                <Link to="/Mention">Mentions légales</Link>
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-lg-3 mb-5">
            <h6>Mes dernières réalisations</h6>
            <ul>
              <li>Fresh food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
            </ul>
          </div>
          <div class="col-md-6 col-lg-3 mb-5">
            <h6>Mes derniers articles</h6>
            <ul>
              <li>Coder son site en HTML/CSS</li>
              <li>Vendre ses produits sur le web</li>
              <li>Se positionner sur Google</li>
            </ul>
          </div>
        </div>
        <div class="footer2">
          <p>Designed by John Doe</p>
        </div>
      </div>
    </div>
  );
}

export default footer;

/*<Routes>
            <Route path='/' element={ <Accueil/>}></Route>
            <Route path='/Apropos' element={<Apropos/>}></Route>
            <Route path='/Realisation' element={<Realisation/>}></Route>
            <Route path='/Blogs' element={<Blogs/>}></Route>
            <Route path='/Services' element={<Services/>}></Route>
            <Route path='/Mention' element={<Mention/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>*/
