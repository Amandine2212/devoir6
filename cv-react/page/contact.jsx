import "../css-page/bloc.css";
import "../css-page/apropos.css";
function Contact() {
  return (
    <div>
      <div>
        <img
          src="img-use/contact-bg.jpg"
          alt="ordinateur"
          width="100%"
          height=""
        />
      </div>

      <div class="containeur bloc centered2">
        <h2>ME CONTACTER</h2>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <div class=" row justify-content-center footer1">
          <div class="col-md-6  mb-12">
            <h3>CONTACT</h3>
            <hr />
            <label htmlFor="nom" style={{ marginBottom: "10px" }}>
              Votre Nom :
              <input type="text" name="nom" />
            </label>{" "}
            <br />
            <label htmlFor="email" style={{ marginBottom: "10px" }}>
              Votre adresse email :
              <input type="text" name="email" />
            </label>
            <br />
            <label htmlFor="tel" style={{ marginBottom: "10px" }}>
              Votre numero de telephone :
              <input type="text" name="tel" />
            </label>
            <br />
            <label htmlFor="sujet" style={{ marginBottom: "25px" }}>
              {" "}
              le sujet :
              <input type="text" name="sujet" />
            </label>
            <br />
            <label htmlFor="txt">
              <textarea
                type="text"
                name="txt"
                style={{ height: "100px", with: "200px" }}
                size="200px"
                placeholder=""
              />
            </label>
            <br />
            <button>Envoyer</button>
          </div>
          <div class="col-md-6  mb-12">
            <h3>coordonnée</h3>
            <hr />
            <address>
              40 Rue Laure Diebold, 69009 Lyon, France <br />
              06 20 30 40 50
            </address>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621725!2d4.796403976291238!3d45.77866197108095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1719137327334!5m2!1sfr!2sfr"
                width="400"
                height="300"
                style={{ marginRight: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
/*
  .centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
  */
