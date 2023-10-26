import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Header, Footer } from '../../components';
import './index.css' 
import { useAuth } from '../../../AuthContext';


const Infos = () => {

  const { userName } = useAuth();

  return (
    <div>
      <Header userName={userName}/>
      <div className="pageTitle">
        <div className="pageTitleText">
          <p className="title">Commencez à donner, c'est très simple.</p>
          <p className="subTitle">Donnez une seconde vie à votre garde-robe. Donnez vos vieux vetements pour acheter ce que vous voulez.</p>
          <a href="/faire-un-don"><button>Donner maintenant</button></a>
        </div>
      </div>
      <div className="pageInfos">
        <div >
          <img className="infosImg" src='https://eu-images.contentstack.com/v3/assets/blt82432b0782155fc9/bltc2995e4d3e45623c/6527f344cace7a5510845a6d/SELLER_2_0013.jpg?quality=70&fit=bounds&format=webp&dpr=1&disable=upscale&width=1246&height=910'></img>
        </div>
        <div className="infos">
          <p className="titleInfos">Comment ça marche ?</p>
          <p className="titleText">1. Trouvez des vetements a donner</p>
          <p className="text">Trouvez et pesez vos vetements a donner. Plus il y en a mieux c'est !</p>
          <p className="titleText">2. Expédiez-le</p>
          <p className="text">Si vous recoltez plus de 5kg nous vous fournirons une étiquette prépayée - c'est gratuit, facile et assuré.</p>
          <p className="titleText">3. Gagnez une reduction</p>
          <p className="text">Recevez jusqu'à 40 % de reduction sur votre prochain achat.</p>
          <a href="/faire-un-don" className="text"><button>Commencez à donner</button></a>
        </div>
      </div>
      <p className="title">Gagner plus en aidant la planète.</p>
      <div className="pageInfos">
        <div className="infosBis">
          <p className="titleText first">Travail mérite salaire</p>
          <p className="text">Gagnez une partie des revenus lié a votre design. Nous trouvons des acheteurs pour vous !</p>
          <p className="titleText">Mettez en avant votre talent</p>
          <p className="text">Faitez vous connaitre et gagnez des abonnés. Creez un vetement premium.</p>
          <p className="titleText">Sauvez la planete</p>
          <p className="text">Vous êtes assuré que vos produits seront fait a 100% en matières recyclées et respecteront les employés le long de la chaine de production</p>
          <a href="/design" className="text"><button>Commencez à designer</button></a>
        </div>
        <div>
          <img className="infosImg" src='https://eu-images.contentstack.com/v3/assets/blt82432b0782155fc9/blt54f722c6c5e9cfef/6527f35fd6faa5598dfddd8b/SELLER_4_0051.jpg?quality=70&fit=bounds&format=webp&dpr=1&disable=upscale&width=1246&height=910'></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Infos;
