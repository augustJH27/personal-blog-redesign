import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SEO from '../data/SEO';
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
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      padding: "20px",
    },
  },
  blogBody: {
    textAlign: "justify",
    "& p": {
      ...theme.typography.body1,
      fontFamily: "Cardo, serif",
      lineHeight: "2",
      fontSize: "18px",
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
      margin: "1em 0",
      display: "block",
    },
  },
}));

const BlogBody = ({ content }) => {
  const classes = useStyles();
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        const content = node.content.map((child) => child.value).join("").trim();
        const isEmpty = content === "";
        const hasBreaks = node.content.some((child) => child.value?.includes("\n"));
  
        return (
          <p
            style={{
              marginBottom: isEmpty || hasBreaks ? "40px" : "8px",
              lineHeight: hasBreaks ? "1.5" : "2",
            }}
          >
            {children}
          </p>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, fileName } = node.data.target.fields.file;
        return <img src={url} alt={fileName} className={classes.image} />;
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