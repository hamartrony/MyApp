import { CardsDiv } from "./style";

function Cards({ tittleStr, list }) {
  
  return (
    <CardsDiv tittleStr={tittleStr}>
      <h2>{tittleStr}</h2>
       <div className="list">
        {list.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="imagem"></img>
            <h3>{item.sub}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </CardsDiv>
  );
}

export default Cards;
