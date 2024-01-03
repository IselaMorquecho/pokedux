import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = ({ name, url, types }) => {
  const typesString = types.map((elemento) => elemento.type.name).join(", ");
  return (
    <Card
      title={name}
      cover={<img src={url} alt={name} extra={<StarOutlined />} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;
