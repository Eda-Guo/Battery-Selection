import { TRANSFORMER } from './constants';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Transformer() {
  return (
    <div className="content">
      <ul className="items">
        {Object.values(TRANSFORMER).map(item => (
          <li className="list_item" key={item.id}>
            <Card sx={{ minWidth: 275, maxWidth: 500 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color='#f44336'>
                  Every 2 industrial batteries need 1 transformer. It will be automatically added to cart.
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <br />
                  Floor Dimension: {item.width}FT * {item.height}FT
                  <br />
                  Energy: {item.energy} MWh
                  <br />
                </Typography>
                <Typography variant="body2">
                  Cost: ${item.cost.toLocaleString("en-US")}
                </Typography>
              </CardContent>
            </Card>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default Transformer;