import "./page/bloc.css";
function Site(props) {
  return (
    <div class="col-md-6 col-lg-4 mb-5 ">
      <div class="blocB">
        <img src={props.img} alt="" />
        <h3>{props.titre}</h3>
        <p>{props.resumer}</p>
        <button>voir</button>
        <p>site realiser avec {props.langue}</p>
      </div>
    </div>
  );
}

export default function Realisation() {
  return (
    <div class="containeur">
      <div>
        <h2>PORTFOLIO</h2>
        <p>Voici quelques-unes de mes réalisations.</p>
      </div>
      <div class="row justify-content-center">
        <Site
          img="img-use/legume.png"
          titre="Fresh food"
          resumer="Réalisation d'un site avec commande en ligne. "
          langue=" PHP et MySQL"
        />
        <Site
          img="img-use/sushi.png"
          titre="Restaurant Akira"
          resumer="Réalisation d'un site vitrine."
          langue="WordPress"
        />
        <Site
          img="img-use/bien-etre.png"
          titre="Espace bien-être"
          resumer="Réalisation d'un site vitrine pour un patricien de bien-être."
          langue="HTML/CSS"
        />
      </div>
    </div>
  );
}
