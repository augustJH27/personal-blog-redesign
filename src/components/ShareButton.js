import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LineShareButton,
  LineIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const ShareButton = ({ url }) => (
  <>
    <FacebookShareButton url={url} style={{ outline: "none" }}>
      {/* <span style={{ fontSize: `22px`, color: `#fff` }}>SHARE</span>{" "} */}
      <FacebookIcon size="32px" round />
    </FacebookShareButton>
    <TwitterShareButton
      url={url}
      style={{ marginLeft: `15px`, outline: "none" }}
    >
      <TwitterIcon size="32px" round />
    </TwitterShareButton>
    <WhatsappShareButton
      url={url}
      style={{ marginLeft: `15px`, outline: "none" }}
    >
      <WhatsappIcon size="32px" round />
    </WhatsappShareButton>
    <TelegramShareButton
      url={url}
      style={{ marginLeft: `15px`, outline: "none" }}
    >
      <TelegramIcon size="32px" round />
    </TelegramShareButton>
    <LineShareButton url={url} style={{ marginLeft: `15px`, outline: "none" }}>
      <LineIcon size="32px" round />
    </LineShareButton>
  </>
);

export default ShareButton;
