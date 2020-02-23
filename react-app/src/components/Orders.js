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
  createData(0, 'Open', '003', 'ABC', 'backend dev', '2 months', 'Nodejs'),
  createData(1, 'Funded', '223', 'XYZ', '3d model dev', '2 months', 'Cry Engine'),
  createData(2, 'Community Project', '021', 'RDO', 'content writing', '2 months', 'creative writing'),
  createData(3, 'Open', '011', 'ISC', 'Event Photography', '3 months', 'Photography'),
  createData(4, 'Open', '031', 'MSK', 'Editing', '2 months', 'Video Editing'),
];

class Orders extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: null,
      };
    this.onLoad = this.onLoad.bind(this);
    }
    


  onLoad = (e) => {
    const docRef = db.collection('PendingJobs').doc('DSLPHxrmqYMnNx16ITD4');

    docRef.get().then((doc) => {
      if (doc.exists) {
        let data = doc.data();
        this.setState({data: data});
        console.log("document data : ", data);
      }
      else{
        this.setState({data: null});
        console.log("no such document!");
      }
    }).catch(function(error){
      this.setState({data: null});
      console.log("error parsing the document..", error);
    });
  }
  


  



  render(){

    // this.onLoad();
    // var x = this.state.data;
    // const rows = createData(0, x.Allocated, x.Client_ID, x.Current_Status, x.Description, x.deadline, x.Student_ID, x.tags);
    
    // let rows = this.state.data;
    console.log("the rows ", rows);
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
              <TableCell>Client Name</TableCell>
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