import "./SectionPostFeed.css";

export default function SectionPostFeed() {
  return (
    <div className="SectionPostFeed">
      <div className="FuncionalitComponentsPostFeed">
        <p>Nova Postagem</p>
        <textarea />
        <button>Postar</button>
        <div className="BtnTopRefrech">
          <button>
            <a href="#Topo">⇧</a>
          </button>
          <button>↻</button>
        </div>
      </div>
    </div>
  );
}
