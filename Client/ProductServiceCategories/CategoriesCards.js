import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link, BrowserRouter } from 'react-router-dom';

const CategoriesCards = (props) => {
  return (
    <Grid>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="ProductOrService"
            height="160"
            image={props.categoryName === 'Category' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6o9PPkVCRB6GPp0EfTV774kZBDnXVdiBIw&usqp=CAU' : 'https://www.oshatrainingbootcamp.com/wp-content/uploads/2019/06/services.png' }
          />
          <CardContent>
            <Typography helvetica="true" variant="h5" component="h2">
              {props.categoryName}
            </Typography>
            {props.categoryTypes.map((categories, i) => (
              <Typography key={i} variant="body2" color="textSecondary" component="p">
                <BrowserRouter>
                  <Link to={`/category/${ categories.category }`}>
                    {categories.category}
                  </Link>
                </BrowserRouter>
              </Typography>
            ))}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CategoriesCards;
