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
  { name: 'Positive Reviews', value: 70, color: '#E38627'},
  { name: 'Negative Reviews', value: 10, color: '#C13C37'},
  { name: 'Neutral', value: 20, color: '#6A2135' },

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