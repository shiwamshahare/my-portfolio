import React from "react";
import Socials from "./Socials";
import {
  EmailSvg,
  FacebookSvg,
  GithubSocial,
  InstagramSvg,
  LinkedInSvg,
  SnapchatSvg,
  StarmeSvg,
  TwitterSvg,
  WhatsappSvg,
} from "../Svg/Socials/SvgSocial";
import CopyRight from "./CopyRight";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-4 py-4 pt-12 md:px-20">
      <div className="mx-auto flex h-auto w-full  flex-col gap-6 ring-1 rounded-2xl p-2  sm:p-8 md:gap-6 lg:p-3 ">
        <div className="text-center text-4xl">
          <h1 className="inline-block rounded-full text-accent1 px-3 py-1 uppercase text-blue-500 transition-all ease-in-out duration-300 hover:tracking-wide">
            Socials
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 ">
          <Socials
            media="E-mail"
            socialLink={"mailto:com.shahare@gmail.com"}
            mediaSvg={<EmailSvg />}
          />
          <Socials
            media="Github"
            socialLink={"https://github.com/shiwamshahare"}
            mediaSvg={<GithubSocial />}
          />
          <Socials
            media="LinkedIn"
            socialLink={"https://www.linkedin.com/in/shiwamshahare"}
            mediaSvg={<LinkedInSvg />}
          />
          <Socials
            media="Instagram"
            socialLink={
              "https://www.instagram.com/shiwamshahare?igsh=MzRlODBiNWFlZA=="
            }
            mediaSvg={<InstagramSvg />}
          />
          <Socials
            media="Facebook"
            socialLink={"https://m.facebook.com/profile.php?id=100006761589818"}
            mediaSvg={<FacebookSvg />}
          />
          <Socials
            media="Snapchat"
            socialLink={
              "https://www.snapchat.com/add/shiwam_shahare?share_id=XqBZW9Q3oWM&locale=en-GB"
            }
            mediaSvg={<SnapchatSvg />}
          />
          <Socials
            media="Twitter"
            socialLink={
              "https://x.com/ShiwamShahare?t=T30gTwUf8ORzXM4snobtJQ&s=09"
            }
            mediaSvg={<TwitterSvg />}
          />
          <Socials
            media="WhatsApp"
            socialLink={"https://wa.me/+918412908901"}
            mediaSvg={<WhatsappSvg />}
          />
        </div>
        <div className="flex justify-center pointer-events-none">
          <button
            type="button"
            className="flex shadow-2xl backdrop-blur-md justify-center "
          >
            <Link
              target="_blank"
              to="https://github.com/shiwamshahare"
              className="flex h-12 w-auto p-4 items-center justify-center
            gap-x-3 rounded-2xl rounded-tr-none ring-2 font-semibold duration-500 "
            >
              <span className=" pointer-events-auto flex">
                <StarmeSvg />
                <span className="text-zinc-600 text-bold flex flex-row pl-4 items-center justify-center transition-all ease-in-out duration-300   hover:tracking-widest">
                  Star me on <span className="text-blue-500 pl-2">Github</span>
                </span>
              </span>
            </Link>
          </button>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
};

export default Footer;
