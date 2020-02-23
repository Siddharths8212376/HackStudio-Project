import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'Project Progression',
  description:
    "Interact directly with the client to better understand and refine the project specifications",
  
};

const featuredPosts = [
  {
    title: 'Ticket-1',
    date: 'Feb 25',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://www.medica-tradefair.com/medicacache/pica/2/3/5/6/8/5/240781540314729/icon_ticket.png',
    imageText: 'Image Text',
  },
  {
    title: 'Ticket-2',
    date: 'Feb 28',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://www.medica-tradefair.com/medicacache/pica/2/3/5/6/8/5/240781540314729/icon_ticket.png',
    imageText: 'Image Text',
  }
];

export default function Progression() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer title="75% done!" description="placeholder" />
    </React.Fragment>
  );
}

