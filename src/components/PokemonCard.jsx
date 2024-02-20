import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";

const PokemonCard = ({ id, name, url, types, favorite }) => {
  const dispatch = useDispatch();
  const typesString = types.map((elemento) => elemento.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card
      title={name}
      cover={<img src={url} alt={name} extra={<StarButton />} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;
