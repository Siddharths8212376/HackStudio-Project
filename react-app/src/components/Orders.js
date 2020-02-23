import React, { Component } from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { db } from './fire';
import { Link } from 'react-router-dom';
// Generate Order Data
function createData(id, allocated, clientID, currentStatus, description, deadline, studentID, tags) {
  return {id, allocated, clientID, currentStatus, description, deadline, studentID, tags};
}
// var jobs = [];
// db.collection("PendingJobs").get()
//   .then(querySnapshot => {
//     const data = querySnapshot.docs.map(doc => doc.data());
//     // console.log(data);
//     jobs.push(data);
//   })

// console.log(jobs);
// for( let i = 0 ; i < jobs.length; i += 1){
//   console.log(jobs[i]);
//   var data = createData(i, ...jobs[i]);
//   rows.push(data);
// }

function preventDefault(event) {
  event.preventDefault();
}

const rows = [
  createData(0, 'XX', 'XX', 'XX', 'XX', 'XX'),
  createData(1, 'XX', 'XX', 'XX', 'XX', 'XX'),
  createData(2, 'XX', 'XX', 'XX', 'XX', 'XX'),
  createData(3, 'XX', 'XX', 'XX', 'XX', 'XX'),
  createData(4, 'XX', 'XX', 'XX', 'XX', 'XX'),
];

class Orders extends Component{

  constructor(props){
    super(props);
    this.state = {
      PendingJobs: {

      }
    }
  }
  render(){

    const classes = makeStyles(theme => ({
      seeMore: {
        marginTop: theme.spacing(3),
      },
    }));
    return (
      <React.Fragment>
        <Title>Recommended Projects</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Current Status</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Time Frame</TableCell>
              <TableCell align="right">Tags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map(row => (
            <TableRow key={row.allocated}>
              <TableCell>{row.clientID}</TableCell>
              <TableCell>{row.currentStatus}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.deadline}</TableCell>
              <TableCell align="right">{row.studentID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Link color="primary" href="#" onClick={preventDefault}>
            See more orders
          </Link>
        </div>
      </React.Fragment>
    );
            }

}
export default Orders;