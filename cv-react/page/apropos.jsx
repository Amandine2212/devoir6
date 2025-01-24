import "../css-page/a-propos.css"
import "../css-page/bloc.css"

function Apropos() {
    return (
    <div class="containeur bloc">
    <div class= "row justify-content-center">
        <div class="col-md-6 mb-12">
           <h2>A propos</h2>
           <hr />
           <p>Passionné par l'informatique et les nouvelles
                technologies, j'ai suivi une formation <strong>d'intégrateur-
                développeur web</strong> au CEF. Au cours de cette formation,
                j'ai pu acquérir des bases solides pour travailler dans le
                domaine du <strong>développement web</strong>. <br/>

                Basé à Lyon, je suis en recherche d'une alternance au
                sein d'une agence digitale pour consolider ma formation
                de <strong>développeur web full stack</strong>.<br/>

                J'accorde une attention particulière à la qualité du code
                que j'écris et je respecte les bonnes pratiques du web.</p>
        </div>
        <div class="col-md-6 mb-12">
            <img id="apropo" src="img-use/about.jpg" alt="" />
            <h3>competance</h3>
            <ul>
                <li>
                    <p>htmls 90%</p>
                    <img class="jauge" src="img-use/jaugeR.png" alt="" />
                </li>
                <li>
                    <p>css3 80%</p>
                    <img class="jauge" src="img-use/jaugeBC.png" alt="" />
                </li>
                <li>
                    <p>javascrip 70%</p>
                    <img class="jauge" src="img-use/jaugeJ.png" alt="" />
                </li>
                <li>
                    <p>php 60%</p>
                    <img class="jauge" src="img-use/jaugeV.png" alt="" />
                </li>
                <li>
                    <p>react 50%</p>
                    <img class="jauge" src="img-use/jaugeBF.png" alt="" />
                </li>
            </ul>

        </div>
    </div>
    </div>
    

    );
  }
  
  export default Apropos;
