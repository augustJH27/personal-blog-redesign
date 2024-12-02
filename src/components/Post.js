import styled from "styled-components";
import Link from './Link';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import moment from "moment";

const StyledCard = styled(Card)`
  transition: all 0.3s;
  &:hover {
    box-shadow: 1px 0px 20px -1px rgba(0, 0, 0, 0.2),
                0px 0px 20px 5px rgba(0, 0, 0, 0.14),
                0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transform: translateY(-3px);
  }
  color: blue;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%; /* 16:9 aspect ratio */
`;

const ParagraphText = styled(Typography)`
  font-family: "Cardo";
  font-size: 18px;
  line-height: 2;
  color: black;
  font-weight: 400;
`;

const AvatarImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export default function Post({
  title,
  subtitle,
  authorName,
  authorImage,
  slug,
  date,
  coverImage,
}) {
  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <StyledCard>
        {/* Commented out the CardHeader, this can be re-enabled if needed */}
        {/* <CardHeader
          avatar={
            <AvatarImage
              style={{ backgroundImage: `url(${authorImage})` }}
            />
          }
          title={authorName}
          subheader={moment(date).format("MMMM Do YYYY")}
        /> */}
        <StyledCardMedia image={coverImage} title={title} />
        <CardContent>
          <Typography variant="h2" gutterBottom>
            {title.length > 25 ? title.substr(0, 25) + "..." : title}
          </Typography>
          <ParagraphText>
            {subtitle.length > 72 ? subtitle.substr(0, 72) + "..." : subtitle}
          </ParagraphText>
        </CardContent>
      </StyledCard>
    </Link>
  );
}