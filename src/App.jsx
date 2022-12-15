import * as React from 'react';
import './App.css';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import DeviceList from './DeviceList';
import Transformer from './Transformer';
import Layout from './Layout';

import { DEVICES, TRANSFORMER, INITCART } from './constants';


function App() {

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDevices, setTotalDevices] = useState(0);
  const [cartList, setCartList] = useState(INITCART);
  const [carry, setCarry] = useState(0);
  const [totalEnergy, setTotalEnergy] = useState(0);


  function onAddItem(id, num) {
    let currItem = DEVICES.find(item => item.id === id);
    setTotalDevices(totalDevices + Number(num));

    let currCount = Number(num) + carry;
    if (currCount !== 0 && currCount % 2 === 0) {
      setCartList({...cartList, [currItem.name]: cartList[currItem.name] + Number(num),  "Transformer": cartList["Transformer"] + Number(currCount / 2)});
      setTotalPrice(totalPrice + (currItem.cost * num) + (currCount / 2) * TRANSFORMER[0].cost);
      setTotalEnergy(totalEnergy + (currItem.energy * num) + (currCount / 2) * TRANSFORMER[0].energy);
      setCarry(0);
    }
    else {
      setCartList({...cartList, [currItem.name]: cartList[currItem.name] + Number(num),  "Transformer": cartList["Transformer"] + Number(Math.floor(currCount / 2))});
      setTotalPrice(totalPrice + (currItem.cost * num) + (Math.floor(currCount / 2)) * TRANSFORMER[0].cost);
      setTotalEnergy(totalEnergy + (currItem.energy * num) + (Math.floor(currCount / 2)) * TRANSFORMER[0].energy);
      setCarry(1);
    }
  }

  return (
    <React.Fragment>
      <Box className="main" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <DeviceList items={DEVICES} onAddItem={onAddItem}></DeviceList>
            <Transformer />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h5" component="div" padding={1}>
              Total Price: $ {totalPrice.toLocaleString("en-US")}
            </Typography>
            <Typography variant="h5" component="div" padding={1}>
              Total Energy:{totalEnergy.toLocaleString("en-US")}MWh
            </Typography>
            <Grid item xs={12}>
              <Layout items={cartList}></Layout>
            </Grid>
          </Grid>

        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default App;
