import "./LoginBody.css";

export default function LoguinBody() {
  return (
    <div className="LoginBody">
      <form>
        <input type="text" placeholder="Usuario ou Email"></input>
        <input type="text" placeholder="Sua Senha"></input>
        <button>Entrar</button>
      </form>
      <div>
        <p>Nao tem cadastro ?</p>
        <button>Cadastrar</button>
      </div>
    </div>
  );
}
