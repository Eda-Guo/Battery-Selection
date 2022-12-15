import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function ListItem({
    item,
    onAddItem
}) {

    return (
        <Card sx={{ minWidth: 275, maxWidth: 500 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <br />
                    Floor Dimension: {item.width}FT * {item.height}FT
                    <br />
                    Energy: {item.energy} MWh
                    <br />
                    Release Date: {item.date}
                    <br />
                </Typography>
                <Typography variant="body2">
                    Cost: ${item.cost.toLocaleString("en-US")}
                </Typography>
            </CardContent>
            <CardActions>
                <Box component="form" onSubmit={(event) => {
                    event.preventDefault();
                    const data = new FormData(event.currentTarget);
                    const num = data.get('number');
                    onAddItem(item.id, num);
                    }} >
                    <TextField
                        id="number"
                        label="Number"
                        type="number"
                        name="number"
                        variant="filled"
                        fullWidth
                    />
                    <br />
                    <br />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                        Add to Cart
                    </Button>
                </Box>
                {/* <Button variant="contained" onClick={() => {onAddItem(item.id)}}>Add to Cart</Button> */}
            </CardActions>
        </Card>
    );
}

export default ListItem;