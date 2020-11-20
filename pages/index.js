import Head from "next/head";
import Link from "next/head";
import { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Home(props) {
  const [scrolling, setScrolling] = useState("150px");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hired, setHired] = useState(false);

  const injectGA = () => {
    if (typeof window == "undefined") {
      return;
    }
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-128392016-3");
  };
  if (process.browser) {
    window.onscroll = function () {
      scrollFunction();
    };
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      setScrolling("1px");
    } else {
      setScrolling("150px");
    }
  }
  setTimeout(() => {
    setHired(true);
  }, 100);
  return (
    <div className="container">
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=YUA-128392016-3"
        />
        <script>{injectGA()}</script>

        <meta name="title" content="Hamed Jenabi's Portfolio" />
        <meta
          name="description"
          content="this site is about Hamed Jenabi's Portfolio, frontend, backend and full-stack web developer"
        />
        <meta
          name="keywords"
          content="Hamed Jenabi Portfolio web developer frondend backend javascript react dance"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        <title>Hamed Jenabi's Portfolio</title>
        <link rel="icon" href="/smile.png" />
      </Head>

      <main>
        <div className="toggle">
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={50}
          />
        </div>
        <h2 className="title">
          hello, my name is <span style={{ color: "#125454" }}>hamed</span>.
        </h2>
        <h1 className="title">web developer, team-builder,</h1>
        <h3 className="title">and dancer.</h3>
        {/* dreaming when hovering on the picture */}
        <img className="myImage" src="/me.png" alt="my image" />
        <img className="hired" src="/hired.png" alt="my image" />
        <div
          className="arrowContainer"
          onClick={() =>
            window.scrollTo({
              top: 750,
              left: 750,
              behavior: "smooth",
            })
          }
        >
          <img
            className="arrow"
            src={isDarkMode ? "/darkmodearrow.gif" : "/arrowdown.gif"}
            alt="arrow gif"
          />
        </div>
        <section className="sectionContainer">
          <div>
            <h1 className="about">ABOUT</h1>
            <p>
              i’m a <em>passionate</em> web developer with a background in{" "}
              <em>event, marketing and social media management</em>, now
              specializing in <em>full-stack development.</em>
            </p>
            <p>
              i also have several years of experience <em>team building</em>,{" "}
              <em>project management</em> and also{" "}
              <em>bringing people together</em> with different ways of thinking.
            </p>
            <p>
              when i'm not coding, i'm a dancing and teaching blues and swing
              dance.
            </p>
            <p style={{ color: "#125454" }}>
              Oh btw, check out my App on AppStore:
            </p>

            <a href="https://play.google.com/store/apps/details?id=com.nativeApper.popword&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <img
                alt="Get it on Google Play"
                style={{ width: "250px" }}
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              />
            </a>
          </div>
        </section>
        <section className="sectionContainer">
          <h1>MY SKILLS</h1>
          <ul className="tags">
            <li>React</li>
            <li>React-Native</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>PostgreSQL</li>
            <li>SEO</li>
            <li>?</li>
          </ul>
          <div className="weatherSection">
            <div
              style={{
                justifyContent: "center",
                textAlign: "center",
                lineHeight: "35px",
              }}
            >
              <p>
                OOPS! forgot about
                <span
                  style={{
                    backgroundColor: "#15202d",
                    marginLeft: "5px",
                    borderRadius: "9px",
                    color: "#fff",
                    display: "inline",
                    fontSize: "0.8em",
                    padding: "2px",
                  }}
                >
                  RESTful APIs
                </span>
                {"  "}so while you're on my page,
              </p>
              <p>why not checking out how the weather is in Vienna:</p>
            </div>
            {!props.weatherMain ? (
              <p>oops, Weather not found!</p>
            ) : (
              <div className="weatherResponse">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p>{props.weatherSkys.description}</p>
                  <img
                    style={{ width: "60px" }}
                    src={`https://openweathermap.org/img/wn/${props.weatherSkys.icon}.png`}
                    alt="Icon depicting current weather"
                  />
                </div>
                <p
                  style={{ margin: "0", padding: "3px 0", textAlign: "center" }}
                >
                  {" "}
                  Current temperature: {props.weatherMain.temp}°C
                </p>
                <p
                  style={{ margin: "0", padding: "3px 0", textAlign: "center" }}
                >
                  {" "}
                  Feeling like: {props.weatherMain.feels_like} °C
                </p>
                <p
                  style={{ margin: "0", padding: "3px 0", textAlign: "center" }}
                >
                  {" "}
                  Highest temperature: {props.weatherMain.temp_max} °C
                </p>
                <p
                  style={{ margin: "0", padding: "3px 0", textAlign: "center" }}
                >
                  {" "}
                  Lowest temperature: {props.weatherMain.temp_min} °C
                </p>
              </div>
            )}
          </div>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            i enjoy solving riddles and problems
          </h1>
          <div>
            <img
              className="icon"
              src={isDarkMode ? "/lampDark.png" : "/lamp.gif"}
              alt="lamp gif"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <p>
              <em>my life-long dream</em> is to have a job with only one task:
            </p>
            <h4>riddle solving!</h4>
            <p>you see that developing is the perfect job for me!</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="socialMedia">
          <div>
            <a href="https://www.linkedin.com/in/hamed-jenabi/">
              <img className="logo" src="/in.png" alt="LinkedIn icon"></img>
            </a>
          </div>
          <div>
            <a href="https://github.com/hamedJenabi/">
              <img className="logo" src="/git.png" alt="github icon"></img>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/HamedJenabi_713">
              <img className="logo" src="/twitter.png" alt="Twitter icon"></img>
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: ${isDarkMode ? "black" : "white"};
          transition: 1000ms;
          color: ${isDarkMode ? "white" : "black"};
        }
        .sectionContainer {
          min-height: 50vh;
          max-width: 80vw;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 45px;
          align-items: center;
          background-color: ${isDarkMode ? "black" : "white"};
          color: ${isDarkMode ? "white" : "black"};
        }
        .myImage {
          border-radius: 50%;
          margin: 20px 0 30px 0;
          width: 300px;
        }
        .hired {
          transform: ${hired
            ? "translateY(-150%) translateX(-110%)"
            : "translateY(100%) translateX(-110%)"};
          transition: transform 2000ms;
        }

        .arrowContainer {
          display: flex;
        }
        .toggle {
          align-self: flex-end;
        }
        .arrow {
          max-width: ${scrolling};
          padding: 0;
          transition: 500ms;
          margin-top: -100px;
        }
        .arrow :hover {
          max-width: 200px;
          transition: 500ms;
        }
        .arrow ::after {
          display: "none";
          max-width: 200px;
          transition: 500ms;
        }
        .icon {
          max-width: 100px;
          justify-content: center;
        }

        .about {
          border-bottom: 1px solid #324659;
          max-width: 95px;
        }
        .tags {
          display: flex;
        }
        .tags li {
          background: ${isDarkMode ? "#b3ffff" : "#15202d"};
          margin-left: 5px;
          border-radius: 9px;
          color: ${isDarkMode ? "black " : "#b3ffff"};
          text-align: center;
          display: inline;
          font-size: 1em;
          text-align: center;
          padding: 4px 11px;
        }
        @media (max-width: 800px) {
          .myImage {
            border-radius: 50%;
            margin: 20px 0 30px 0;
            width: 200px;
          }

          .tags {
            display: grid;
            align-self: center;
            grid-template-columns: 1fr 1fr;
            grid-gap: 5px;
            margin-right: 20px;
          }
          .tags li {
            background: ${isDarkMode ? "#b3ffff" : "#15202d"};
            border-radius: 9px;
            color: ${isDarkMode ? "black " : "#b3ffff"};
            display: inline;
            font-size: 1.1em;
            padding: 10px 10px;
            text-align: center;
          }
        }
        .weatherSection {
          margin-top: 50px;
          justify-content: center;
          align-items: center;
          align-content: center;
        }
        .weatherResponse {
          display: flex;
          flex-direction: column;
          padding: 12px 8px 12px 40px;
          background: ${isDarkMode ? "#0000" : "#e6ffff"};
          border-radius: 2px;
          justify-content: center;
          margin-top: 50px;
          border: 1px solid #ffffff;
          box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1),
            0 2px 2px 0 rgba(0, 0, 0, 0.1);
        }
        .input {
          max-width: 500px;
          margin-right: 40px;
          padding: 15px 0;
          box-sizing: border-box;
          border-radius: 3px;
        }
        .button {
          background: "#125454";
          color: black;
          border: none;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.15em;
          text-align: center;
          display: inline-block;
          position: relative;
          width: 150px;
          height: 50px;
          border: 1px solid #c8d8d4cd;
        }
        .button :hover {
          transition: 400ms;
          color: #fff;
          cursor: pointer;
          background-color: rgb(77, 141, 198);
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 800px) {
          h1 {
            font-size: 1.2em;
            font-weight: 300;
            word-spacing: 3px;
            letter-spacing: 2px;
            padding-top: 0.5em;
            text-align: center;
          }
          h2 {
            font-size: 1.5em;
            font-weight: 300;
            word-spacing: 3px;
            letter-spacing: 2px;
            border-top: 1px solid #324659;
            padding-top: 0.5em;
          }
        }
        main h1 {
          font-size: 1.5em;
          font-weight: 400;
          word-spacing: 3px;
          letter-spacing: 2px;
          padding-top: 0.5em;
          text-align: center;
        }
        main h2 {
          font-size: 2em;
          font-weight: 400;
          word-spacing: 3px;
          letter-spacing: 2px;
          border-top: 1px solid #324659;
          padding-top: 0.5em;
        }
        main h3 {
          border-bottom: 1px solid #324659;
          font-size: 1.5em;
          font-weight: 300;
          word-spacing: 3px;
          letter-spacing: 2px;
          padding: 0.5em 0;
        }
        main h4 {
          font-size: 1.2em;
          font-weight: 300;
          letter-spacing: 2px;
        }
        main p {
          font-size: 1.1em;
          font-weight: 300;
          letter-spacing: 1px;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          box-shadow: 0px 2px 2px lightgray;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .socialMedia {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          max-width: 40px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps(context) {
  let weatherMain = {};
  let weatherSkys = {};
  const apiKey = process.env.REACT_APP_API_KEY;

  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Vienna&units=metric&APPID=${apiKey}`;
  await fetch(weatherURL)
    .then((res) => res.json())
    .then((result) => {
      weatherMain = result.main;
      weatherSkys = result.weather[0];
    })
    .catch((err) => {
      console.log("City not found!");
      return;
    });

  if (apiKey === undefined) {
    return { props: {} };
  }
  return {
    props: {
      weatherSkys,
      weatherMain,
    },
  };
}
