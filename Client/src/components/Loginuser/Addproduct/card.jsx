import * as React from 'react';
import axios from 'axios'
import './Addproduct.css'
import { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import headphone from '../../../images/products/headphone-prod-1.webp'


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto', //Left : auto
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [newProductTitle, setNewProductTitle] = React.useState("")
  const [productList, setProductList] = React.useState([])

  useEffect(() => {
    axios.get('http://localhost:3040/read').then(
      (response) => {
        setProductList(response.data)
      }
    )
  }, [])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const updateProduct = (id) => {
    axios.put('http://localhost:3040/update', {
      id: id,
      newProductTitle: newProductTitle,
    })
  }

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3040/delete/${id}`)
  }

  return ( //345
    <div>
      {
        productList.map((val, key) => {
          return (
            <div key={key}>
              <Card sx={{ maxWidth: 300 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      // aria-label="recipe"
                      className="nud"
                    >
                      &#8360;{val.price}

                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <Select>
                        <Button
                            onClick={() =>
                            updateProduct(val._id)}
                         >
                          Edit
                        </Button>
                        <br />
                        <Button
                            onClick={() =>
                            deleteProduct(val._id)}
                         >
                          Delete
                        </Button>
                      </Select>
                    </IconButton>
                  }
                  title={val.productTitle}
                  subheader={val.createdOn}
                />
                <input type="text"
                  placeholder='newtitle'
                  onChange={(e) => { setNewProductTitle(e.target.value) }}
                  name="" id="" />

                {/* <CardMedia
        component="img"
        height="164"  //194
        image="/images/products/earbuds-prod-1.webp" //  /static/images/cards/paella.jpg
        alt="Paella dish"
      /> */}
                <CardMedia >
                  <img src={headphone}
                    height="164"
                    alt="" />
                </CardMedia>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {val.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                      aside for 10 minutes.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
              <br />
            </div>
          )
        })
      }
    </div>

  );
}
