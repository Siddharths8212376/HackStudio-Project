import React, {Component} from 'react';
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

// var rows = []

// db.collection("PendingJobs").get()
//   .then(querySnapshot => {
//     const data_ = querySnapshot.docs.map(doc => doc.data());
//     console.log(data_[0]);
//     console.log(data_[1]);
//     var x = data_[0];
//     rows.push(createData(0, x.Allocated, x.Client_ID, x.Current_Status, x.Description, x.deadline, x.Student_ID, x.tags));
//     x = data_[1];
//     rows.push(createData(1, x.Allocated, x.Client_ID, x.Current_Status, x.Description, x.deadline, x.Student_ID, x.tags));
//   }).then(function() {
//     console.log(rows);
      
//   });


// rows.push(createData(1, 'true', '11', 'Open', 'Work Required', '15/05/2018', 'react'));
const rows = [
  createData(0, 'Going On', '044', 'Going On', 'frontend Dev', '1 month', 'React, JS'),
  createData(1, 'Not Started', '221', 'Going On', 'game Dev', '2 months', 'Unity'),
  // createData(2, 'XX', 'XX', 'XX', 'XX', 'XX'),
  // createData(3, 'XX', 'XX', 'XX', 'XX', 'XX'),
  // createData(4, 'XX', 'XX', 'XX', 'XX', 'XX'),
];


// for( let i = 0 ; i < json[0].length; i += 1){

//   var data = createData(i, ...json[0][i]);
//   rows.push(data);
// 


function preventDefault(event) {
  event.preventDefault();
}


class Orders2 extends Component {
  constructor(){
    super();
    this.state = {
      rows: [],
    }
  }
  
  render() {
    const classes = makeStyles(theme => ({
      seeMore: {
        marginTop: theme.spacing(3),
      },
    }));
  return (
    <React.Fragment>
      <Title>Pending Projects</Title>
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
              <TableCell><Link to='/progress'>{row.currentStatus}</Link></TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.deadline}</TableCell>
              <TableCell align="right">{row.studentID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See all projects
        </Link>
      </div>
    </React.Fragment>
  );
  }
}

export default Orders2;