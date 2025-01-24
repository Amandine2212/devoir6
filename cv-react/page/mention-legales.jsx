import "./page/bloc.css";
import "./page/mention.css";
function Mention() {
  return (
    <div class="containeur">
      <h2>Mention legales</h2>
      <div>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h3>John Doe</h3>
                <address>
                  9 40 Rue Laure Diebold 69009 Lyon, France
                  <br />
                  D 06 20 30 40 50
                  <br />
                  john.doe@gmail.com
                </address>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h3>Always Data</h3>
                <address>
                  91 rue du Faubourg Saint Honoré 75008 Paris
                  <br />
                  <a href="www.alwaysdata.com">www.alwaysdata.com</a>
                </address>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h3>Crédits </h3>
                Site développé par John Doe, étudiant du CEF. <br />
                Les images libres de droit sont issues du site Pixabay.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mention;

/*<tr>
                    <th>
                    <details>
                        <summary><h3>Éditeur du site</h3></summary>
                        <h3>John Doe</h3>
                        <address>
                        9 40 Rue Laure Diebold
                        69009 Lyon, France<br/>
                        D 06 20 30 40 50<br/>
                        john.doe@gmail.com
                        </address>
                    </details>
                    </th>
                </tr>
                <tr>
                    <th>
                    <details>
                        <summary><h3>Hébergeur</h3></summary>
                        <h3>Always Data</h3>
                        <address>
                            91 rue du Faubourg Saint Honoré
                            75008 Paris
                            <br/>
                            www.alwaysdata.com
                        </address>
                    </details>
                    </th>
                </tr>
                <tr>
                    <th>
                    <details>
                        <summary><h3>Crédits</h3></summary>
                        <h3>Crédits </h3>
                        Site développé par John Doe, étudiant du CEF. <br />

                        Les images libres de droit sont issues du site Pixabay.
                    </details>
                    </th>
                </tr>*/
