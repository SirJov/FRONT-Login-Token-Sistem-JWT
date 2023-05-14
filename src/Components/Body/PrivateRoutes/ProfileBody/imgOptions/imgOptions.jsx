import "./imgOptions.css";

const {
  ArrayImgs,
} = require("../../../../Header/ConfigHeader/ProfileHeader/imgProfileConfig");

export default function ImgOptions() {
  return (
    <div className="ImgOptions">
      <div className="ImgOptionsIcon">
        {ArrayImgs.map((iten) => {
          return <img src={iten.img} key={iten.nameImg} />;
        })}
      </div>
      <div className="ImgOptionsImput">
        <button>Salvar</button>
      </div>
    </div>
  );
}
