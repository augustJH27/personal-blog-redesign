import Post from '../components/Post';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/PageHeader';

import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid } from "@material-ui/core";

import { getAllPosts } from '../lib/index';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '120px',
    marginBottom: '160px',
    [theme.breakpoints.down("sm")]: {
      marginBottom: "80px",
      marginTop: '20px',
    },
  },
}));

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { revalidate: 1, props: { posts } };
}

export default function Index({ posts }) {
  const classes = useStyles();
  return (
    <>
      <Layout
        // type your page title and page description.
        title="Joy Agustian | Blog"
        description="Blog"
      >
        <Container maxWidth="lg" className={classes.container}>
          {/* you can delete this component or you can use this for your page header. */}
          <PageHeader />
          {/* blog post */}
          <Grid container spacing={4}>
            {posts?.map(({ fields }) => (
              <Grid item key={fields.slug} xs={12} sm={6} md={4}>
                <Grid container>
                  <Post
                    title={fields.title}
                    subtitle={fields.subTitle}
                    authorName={fields.author.fields.name}
                    authorImage={fields.author.fields.image}
                    // authorImage={fields.author.fields.image.fields.file.url}
                    slug={fields.slug}
                    date={fields.date}
                    coverImage={fields.coverImage.fields.file.url}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Layout>
    </>
  );
}