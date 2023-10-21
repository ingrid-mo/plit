
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import { FaDisease } from "react-icons/fa";

function MyCard({img,description,title,nota}) {

    const imgUrl ="https://image.tmdb.org/t/p/original"

    
  return (
    <Card className="bg-dark text-white">
        <div className='hover_color'>
        <Badge className="badge" bg="warning" text="dark">
          <FaDisease/>
        {nota}
      </Badge>
    <Card.Img  className='hover_img' src={`${imgUrl}${img}`} alt="Card image" />
    <Card.ImgOverlay>
        <div className='card_text'>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {description}
      </Card.Text>

      </div>
      
    </Card.ImgOverlay>
    </div>
  </Card>
  );
}

export default MyCard;