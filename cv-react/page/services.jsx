import "./page/bloc.css";
function Service(props) {
  return (
    <div class="col-md-6 col-lg-4 mb-5">
      <div class="bloc">
        <img src={props.img} alt="" />
        <h3>{props.titre}</h3>
        <p>{props.resumer}</p>
      </div>
    </div>
  );
}
export default function Services() {
  return (
    <div class="containeur">
      <div>
        <h2>MON OFFRE DE SERVICES</h2>
        <p>Voici les prestations sur lesquelles je peux intervenir.</p>
      </div>
      <div class="row justify-content-center">
        <Service
          img="img-use/.png"
          titre="UX DESIGN"
          resumer="L'UX Design ast una mithode da
                        canception cantrée sur l'utilisatour. Son but
                        ast d'offrir une expdrianca de navigation
                        optimale à l'intamaute."
        />
        <Service
          img="img-use/.png"
          titre="DÉVELOPPEMENT WEB"
          resumer="La dévoloppament da sitas web repasa sur
                            l'utilisation des langages HTML, CSS.
                            lavaSoript ot PHP."
        />

        <Service
          img="img-use/.png"
          titre="RÉFÉRENCEMENT"
          resumer="La rdsdeoncament natural d'un site, aussi
                            appalé SFO, consista à mottre das
                            tochniques en ocuvra pour amdlioror ca
                            pasition dans les rasuitats des moteurs de
                            nacherche."
        />
      </div>
    </div>
  );
}
