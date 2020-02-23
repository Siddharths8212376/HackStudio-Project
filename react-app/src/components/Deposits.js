import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import React, { PureComponent } from 'react';
import PieChart from 'react-minimal-pie-chart';
 

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});


const data02 = [
  { name: 'Positive Reviews', value: 70, color: '#0000CC'},
  { name: 'Negative Reviews', value: 10, color: '#0066CC'},
  { name: 'Neutral', value: 20, color: '#CCCCCC' },

];

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Client Reviews</Title>
      <PieChart 
      data = {data02}
      radius = {25}
      />
    </React.Fragment>
  );
}