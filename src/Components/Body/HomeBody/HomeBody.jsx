import CardsHome from "./CardsHome/CardsHome";

import "./HomeBody.css";

import ImgLf from "../../../assets/ImgHome/Lf.png";
import author from "../../../assets/ImgHome/author.png";

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
  "Back-end do projeto criado em Nodejs. Usufruindo do javascrypt tanto no front-end quanto no back-end ";
const TextApi =
  "API Rest em node utilizando JSON WebToken, Bcrypt-Generator, Express e Mongoose. Tambem com deploy feito na Vercel.";
const TextDB =
  "Dados sendo salvos no MongoDB, banco de dados não-relacional orientado a documentos.";

export default function HomeBody() {
  return (
    <div className="HomeBody">
      <div className="boxHeaderHome">
        <div>
          <img src={author} />
          <p className="pAuthor">Dev Herico L.</p>
        </div>

        <div className="TextHome">
          <h1>Litle face</h1>
          <p>
            È um app que de forma simples demonstra o funcionamento basico de
            uma "mini" rede social
          </p>
          <p>
            App demonstrativo para meu Portifolio, demonstrando meus
            conhecimentos e também fixando o aprendizado
            sobre React-Hooks, Jeson-Wueb-Token, Mongo-Db, validações de token e
            permissões, e a utilização do Context-Api.
          </p>
        </div>
        <div>
          {" "}
          <img src={ImgLf} />
        </div>
      </div>
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
