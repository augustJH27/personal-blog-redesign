import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import moment from "moment";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "3em",
    height: "3em",
    boxShadow: "0px 0px 10px 1px #b2b2b28f",
  },
  root: {
    maxWidth: "800px",
    padding: "20px",
    marginTop: "64px",
  },
  dateText: {
    fontFamily: "Raleway, sans-serif",
    fontSize: '16px',
  },
  blogBody: {
    textAlign: 'justify',
    "& p": {
      ...theme.typography.body1,
      marginTop: '8px',
      fontFamily: "Raleway, sans-serif",
      marginBottom: '12px'
    },
    "& h1, h2, h3, h4, h5": {
      fontFamily: "Raleway, sans-serif",
      fontSize: "1.5rem",
      marginBottom: "12px",
      marginTop: "2rem",
    },
    "& a": {
      color: theme.palette.info.main,
      fontFamily: "Raleway, sans-serif",
    },
  },
}));

const BlogHeader = ({
  title,
  subtitle,
  authorName,
  authorImage,
  date,
  coverImage,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid item container wrap="nowrap" alignItems="center" spacing={3}>
          <Grid item>
            <Avatar
              aria-label="avator image"
              className={classes.avatar}
              src={authorImage}
            />
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography className={classes.blogBody} variant="h2">{authorName}</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.dateText} color="textPrimary">
                {moment(date).format("MMMM Do YYYY")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img src={coverImage} style={{ height: "auto", width: "100%" }} />
        </Grid>
        <Grid item>
          <Typography variant="body1">{subtitle}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogHeader;
