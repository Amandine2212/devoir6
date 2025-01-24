/*<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  */
import "../css-page/bloc.css"
function Blog(props){
    return (
        <div class="col-md-6 col-lg-4 mb-5 ">
        <div class ="blocB">
            <img src={props.img} alt="" />
            <h3>{props.titre}</h3>
            <p>{props.resumer}</p>
            <button>
            Lire la suite
            </button>
            <p>Publié le {props.txt}</p>
        </div>
            
        </div>
        )
}

export default function Blogs() {
    return (
        <div class="containeur">
            <div>
                <h2>BLOG</h2>
                <p>Retrouvez ici quelques articles sur le développement web.</p>
            </div>
            <div class= "row justify-content-center">
                <Blog  img="img-use/prj1.png" titre="Coder son site en HTML/CSS" 
                    resumer="Some quick example text to build on the
                            card title and make up the bulk of the
                            card's content."
                    txt="22 août 2022" />
                <Blog  img="img-use/pjt2.png" titre=" Vendre ses produits sur le web" 
                    resumer="Some quick example text to build on the
                            card title and make up the bulk of the
                            card's content." 
                    txt="20 août 2022" />
                <Blog  img="img-use/pjt3.png" titre="Se positionner sur Google" 
                    resumer="Some quick example text to build on the
                            card title and make up the bulk of the
                            card's content." 
                    txt="1 août 2022" />
                <Blog  img="img-use/ptj4.png" titre="Coder en responsive design" 
                    resumer="Some quick example text to build on the
                            card title and make up the bulk of the
                            card's content." 
                    txt="31 juillet 2022" />
                <Blog  img="img-use/pjt5.png" titre="Techniques de référencement" 
                    resumer="Some quick example text to build on the
                            card title and make up the bulk of the
                            card's content." 
                    txt="12 juillet 2022" />
                <Blog  img="img-use/pjt6.png" titre="Apprendre à coder" 
                    resumer="Some quick example text to build on the
                            card title and make up the bulk of the
                            card's content." 
                    txt="30 juillet 2022" />
            </div>
        </div>
    );
}