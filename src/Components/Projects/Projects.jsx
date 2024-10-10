import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiHtml5,
  SiMaterialui,
  SiReactrouter,
  SiCss3,
  SiJavascript,
  SiBootstrap
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import img1 from './Assests/react.png';
import img2 from './Assests/recipe.png';
import img3 from './Assests/Socialmedia.png';
import img4 from './Assests/e-commerce.png';

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right"><br></br>
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={img1}
                  alt="KryptoBuzz"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>React - API Explorer</h2>
              <p>
                KryptoBuzz is a website that helps you transfer the Ethereum from one wallet to another wallet. with the help of metamask you can carryout the successfull transaction.
              </p>
              <div>
                <FaReact />
                <SiMaterialui/>
                <SiReactrouter />
                <SiJavascript />
                <SiHtml5 />
                <SiCss3/>
              </div>
              <div>
                <a
                  href="https://nagasai-react-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Nagasai0612/React_Project1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={img2}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Recipe Finder</h2>
              <p>
                Chess Multiplayer is a website where you can play chess with your loved ones that are in any part of the world just by sharing a simple link. Also you can chat while playing chess.
              </p>
              <div>
                <FaReact />
                <SiBootstrap />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://nagasai-recipe-finder.netlify.app/"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Nagasai0612/Recipe_Finder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={img3}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Social media Website</h2>
              <p>
                Sudoku Solver is a Website that gives you the Solution of Every
                Sudoko Problem that you input and also you can visualize each
                step of how the sudoku is getting solved.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
                <SiReactrouter/>
                <SiJavascript />
                <VscJson />
              </div>
              <div>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Nagasai0612/Socialmedia-Frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={img4}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>E-commerce Website</h2>
              <p>
                Chat-application is an website where you can have live chatting with your loved ones and you can create your own custom room according to the requirement.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://nagasai-shopping-website.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Nagasai0612/E-Commerce_Website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
