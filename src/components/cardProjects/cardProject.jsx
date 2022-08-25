import { CardsProjDiv } from "./style";


export const CardProjects = ({ handleSaiba, ...rest }) => {
  

  return (
    <CardsProjDiv>
      <div className="attr">
        <a href={rest.link} target="blank">
          <img src={rest.img} alt={rest.alt}></img>
        </a>
        <a className="txt2" href={rest.link} target="blank">
          {rest.a}
        </a>
        <p className="txt1">{rest.p}</p>

        <button className={rest.id} onClick={() => handleSaiba(rest.id)}>
          Saiba Mais
        </button>
      </div>
    </CardsProjDiv>
  );
};
