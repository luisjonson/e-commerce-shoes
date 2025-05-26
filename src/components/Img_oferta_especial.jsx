import styled from 'styled-components';

const Img_oferta_especialStaled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;

  & .ciclo {
    width: 220px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(to bottom, rgba(217, 195, 238, 0.6) 40%, transparent 80%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .oferta_especial_img {
    z-index: 1;
  }
  
  & .oferta_especial_img img {
    height: 12rem;
    object-fit: contain;
  }
`;

const Img_oferta_especial = (
  { 
    img,
    alt,
    style 
  }) => {

  return (
    <Img_oferta_especialStaled className={style}>
      <div className="ciclo">
        <div className="oferta_especial_img">
          <img src={img} alt={alt} />
        </div>
      </div>
    </Img_oferta_especialStaled>
  );
};

export default Img_oferta_especial;
