import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "3em",
    height: "3em",
    boxShadow: "0px 0px 10px 1px #b2b2b28f",
  },
  root: {
    maxWidth: "800px",
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      padding: "20px",
      // padding: theme.spacing(1),
    },
  },
  blogBody: {
    textAlign: 'justify',
    "& p": {
      ...theme.typography.body1,
      fontFamily: "Cardo, serif",
      lineHeight: '2',
      marginBottom: '12px',
      fontSize: '18px'
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
    "& img": {
      height: "auto",
      // width: "100%",
      margin: "1em 0",
      display: "block",
    },
  },
}));

const BlogBody = ({ content }) => {
  const classes = useStyles();
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, fileName } = node.data.target.fields.file;
        return (
          <img
            src={url}
            alt={fileName}
            className={classes.image}
          />
        );
      },
      [INLINES.HYPERLINK]: (node) => {
        const { uri } = node.data;
        const { value } = node.content[0];
        return (
          <Link target="_blank" rel="noreferrer noopener" href={uri}>
            {value}
          </Link>
        );
      },
    },
  };

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.blogBody}>
          {documentToReactComponents(content, options)}
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogBody;
