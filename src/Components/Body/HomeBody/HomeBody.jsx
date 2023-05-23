import CardsHome from "./CardsHome/CardsHome";

import "./HomeBody.css";

import ImgNodejs from "../../../assets/ImgHome/ImgNodejs.png";
import ImgApi from "../../../assets/ImgHome/ImgApi.png";
import ImgDB from "../../../assets/ImgHome/ImgDB.png";

import ImgReact from "../../../assets/ImgHome/ImgReact.png";
import ImgProfile from "../../../assets/ImgHome/ImgProfile.png";
import ImgFeed from "../../../assets/ImgHome/ImgFeed.png";

const TextReact = `Front-end do projeto feito em React usando as bibliotecas, React-Router-Dom e Axios. Deploy feito na Vercel.`;
const TextProfile =
  "Crie sua conta, faça login e personalize seu perfil quantas vezes quiser. Nao precisa ser um email valido 😁";
const TextFeed =
  "Poste sobre oque você quiser, curta e deixe comentários em postagens de outras pessoas 👨‍💻";

const TextNodejs =
  "Back-end do projeto criado em Nodejs. Usufruindo do javascrypt tanto no front-end como no back-end ";
const TextApi =
  "API Rest em node utilizando JSON WebToken, Bcrypt-Generator, Express e Mongoose. Tambem com deploy feito na Vercel.";
const TextDB = "aaaa";

export default function HomeBody() {
  return (
    <div className="HomeBody">
      <div className="box2"></div>
      <div className="box1">
        <div className="subbox1">
          <CardsHome img={ImgReact} text={TextReact} />
          <CardsHome img={ImgProfile} text={TextProfile} />
          <CardsHome img={ImgFeed} text={TextFeed} />

          <CardsHome img={ImgNodejs} text={TextNodejs} />
          <CardsHome img={ImgApi} text={TextApi} />
          <CardsHome img={ImgDB} text={TextDB} />
        </div>
      </div>
    </div>
  );
}
