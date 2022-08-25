import { useContext } from "react";
import { ModuleContext } from "../../context/modules";
import { CardsDiv } from "./style";

function ProjHome({ tittleStr, list }) {
  const { handlePage } = useContext(ModuleContext);


  return (
    <CardsDiv tittleStr={tittleStr}>
      <h2>{tittleStr}</h2>
       <div className="list">
        {list.map((item) => (
          <div className="item" key={item.id}>
            <a href={item.link} target="blank">

            <img src={item.img} alt={item.alt}></img>
            <h3>{item.a}</h3>
            </a>
       
          </div>
        ))}
        <div className="divButton">

        <button onClick={() => handlePage("projetos")}>Ir projetos</button>
        </div>
      </div>
    </CardsDiv>
  );
}

export default ProjHome;
