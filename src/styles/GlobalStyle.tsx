import { createGlobalStyle } from "styled-components";
import rectangle from "../assets/images/Rectangle.png";
import ghostWhiteRectangle from "../assets/images/ghost-white-rectangle.png";

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html {
      scroll-behavior: smooth;
   }

   ul {
      list-style: none;
   }

   a {
      text-decoration: none;
      color: inherit;
   }

   /*************
   * HERO IMAGE *
   *************/
   .hero {
      position: absolute;
      top: 454px;
      left: 52%;
      transform: translateX(-384px);
      width: 767px;
      height: 441px;
      z-index: 2;
   }

   /********************
   * HERO IMAGE TABLET *
   ********************/
   @media (max-width: 1200px) {
      .hero {
         width: 514px;
         height: 296px;
         transform: translateX(-247px);
         top: 391px;
      }
   }
   /********************
   * HERO IMAGE MOBILE *
   ********************/
   @media (max-width: 740px) {
      .hero {
         width: 320px;
         height: 184px;
         transform: translateX(-160px);
         top: 389px;
      }
   }
   /*********
   * HEADER *
   *********/
   header {
      height: 730px;
      background-image: url(${rectangle});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: bottom center;
      background-color: #fcf8ff;
      color: #ffffff;
      padding: 56px 165px 0;
      position: relative;
      overflow-x: hidden;
   }
   header nav {
      height: 35px;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   header nav a {
      display: block;
      height: 100%;
      font-family: "Manrope", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      font-weight: 700;
      letter-spacing: 0.18px;
      border-bottom: 3px solid #44ffa1;
      transition: 0.5s;
   }
   header nav a:hover {
      color: #44ffa1;
   }
   header h1 {
      width: 635px;
      margin: 55px auto 37px;
      text-align: center;
      font-family: "Fraunces", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 80px;
      line-height: 80px;
      font-size: 70px;
   }
   header h1 span {
      position: relative;
   }
   header h1 span::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #44ffa1;
      left: 0;
      bottom: 0;
   }
   header button {
      display: block;
      width: 161px;
      height: 61px;
      margin: auto;
      background-color: #44ffa1;
      color: #24053e;
      border: none;
      outline: none;
      text-align: center;
      font-family: "Manrope", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      font-weight: 700;
      letter-spacing: -0.18px;
      cursor: pointer;
      transition: 0.4s;
   }
   header button:hover {
      background-color: #24053e;
      color: #44ffa1;
      border: 2px solid #44ffa1;
   }

   .pattern1 {
      position: absolute;
      top: 120px;
      left: -140px;
      z-index: 2;
   }

   .pattern2 {
      position: absolute;
      top: 315px;
      right: -50px;
   }

   /****************
   * HEADER Tablet *
   ****************/
   @media (max-width: 1200px) {
      header {
         height: 538px;
         padding: 32px 39.5px 0;
      }
      header nav a {
         font-size: 16px;
      }
      header h1 {
         width: 573px;
         font-size: 50px;
         line-height: 60px;
      }
      header button {
         width: 133px;
         height: 55px;
      }
      .pattern1 {
         top: 72px;
         left: -226px;
      }
      .pattern2 {
         top: 253px;
         right: -95px;
      }
   }
   /****************
   * HEADER Mobile *
   ****************/
   @media (max-width: 740px) {
      header {
         height: 481px;
         padding: 32px 16px 0;
      }
      header h1 {
         width: 343px;
         font-size: 42px;
         line-height: 50px;
         margin: 64px auto 40px;
      }
      .pattern1,
      .pattern2 {
         display: none;
      }
   }
   /*******
   * Grid *
   *******/
   .grid {
      height: 734px;
      background-image: url(${ghostWhiteRectangle});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: bottom center;
      padding-top: 255px;
   }
   .grid .container {
      width: 1114px;
      height: 308px;
      margin: auto;
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(3, 1fr);
   }

   .card {
      text-align: center;
      color: #24053e;
   }
   .card span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 56px;
      margin: 0 auto 56px;
      border-radius: 30.5px;
      border: 1px solid #584d62;
   }
   .card span p {
      font-family: "Fraunces", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 25px;
      line-height: 40px;
   }
   .card .text {
      height: 196px;
   }
   .card .text h2 {
      font-family: "Fraunces", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 25px;
      line-height: 40px;
      margin-bottom: 28px;
   }
   .card .text > p {
      font-family: "Manrope", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
   }

   /**************
   * Grid Tablet *
   **************/
   @media (max-width: 1200px) {
      .grid {
         padding-top: 203px;
         height: 785px;
      }
      .grid .container {
         width: 573px;
         height: 476px;
         gap: 48px;
         grid-template-columns: 1fr;
         grid-template-rows: 108px repeat(2, 136px);
      }
      .card {
         display: flex;
         justify-content: space-between;
         align-items: center;
         gap: 32px;
      }
      .card:first-of-type .text p {
         height: 56px;
      }
      .card span {
         width: 48px;
         height: 46px;
         margin: 0;
      }
      .card span p {
         font-size: 20px;
         line-height: 36px;
      }
      .card .text {
         height: 100%;
         width: 497px;
         text-align: left;
         gap: 16px;
      }
      .card .text h2 {
         width: 100%;
         height: 36px;
         font-size: 23px;
         line-height: 36px;
      }
      .card .text p {
         font-size: 16px;
         line-height: 28px;
         height: 84px;
      }
   }
   /**************
   * Grid Mobile *
   **************/
   @media (max-width: 740px) {
      .grid {
         height: 982px;
         padding-top: 155px;
      }
      .grid .container {
         width: 343px;
         height: 754px;
         gap: 40px;
         grid-template-rows: 206px repeat(2, 234px);
      }
      .card {
         display: block;
      }
      .card:first-of-type .text {
         height: 136px;
      }
      .card:first-of-type .text p {
         height: 84px;
      }
      .card span {
         margin: 0 auto 24px;
      }
      .card .text {
         height: 164px;
         width: 100%;
         text-align: center;
      }
      .card .text h2 {
         margin-bottom: 16px;
      }
   }
   /*********
   * Access *
   *********/
   #access {
      height: 758px;
      padding-top: 110px;
   }
   #access .container {
      width: 1112px;
      height: 648px;
      margin: auto;
      position: relative;
   }
   #access .container .founder {
      display: block;
      width: 477px;
   }

   .access-box {
      position: absolute;
      right: 0;
      top: 173px;
      width: 730px;
      height: 413px;
      background-color: #24053e;
      color: #ffffff;
      padding: 64px;
   }
   .access-box h2 {
      font-family: "Fraunces", serif;
      font-style: normal;
      font-weight: 600;
      font-size: 46px;
      line-height: 64px;
   }
   .access-box p {
      font-family: "Manrope", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      margin: 32px 0;
   }
   .access-box button {
      font-family: "Manrope", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      font-weight: 700;
      display: block;
      background-color: #44ffa1;
      color: #24053e;
      width: 190px;
      height: 61px;
      letter-spacing: -0.18px;
      text-align: center;
      border: none;
      cursor: pointer;
      transition: 0.4s;
   }
   .access-box button:hover {
      background-color: #24053e;
      color: #44ffa1;
      border: 2px solid #44ffa1;
   }
   .access-box .patter3 {
      display: block;
      position: absolute;
      bottom: -60px;
      right: 70px;
      z-index: 3;
   }

   /****************
   * Access Tablet *
   ****************/
   @media (max-width: 1200px) {
      #access {
         height: 647px;
         padding-top: 100px;
      }
      #access .container {
         width: 689px;
         height: 526px;
      }
      #access .container .founder {
         width: 281px;
      }
      .access-box {
         width: 514px;
         height: 375px;
         padding: 48px 56px 56px;
         top: 151px;
      }
      .access-box h2 {
         font-size: 40px;
         line-height: 56px;
      }
      .access-box p {
         margin: 24px 0;
         font-size: 16px;
         line-height: 28px;
      }
      .access-box button {
         width: 172px;
         height: 55px;
         font-size: 16px;
      }
      .access-box .patter3 {
         bottom: -106px;
         right: 12px;
      }
   }
   /****************
   * Access Mobile *
   ****************/
   @media (max-width: 740px) {
      #access {
         height: 703px;
      }
      #access .container {
         width: 343px;
         height: 603px;
      }
      #access .container .founder {
         margin: auto;
      }
      .access-box {
         width: 100%;
         top: 228px;
         padding: 32px;
         text-align: center;
      }
      .access-box h2 {
         font-size: 26px;
         line-height: 48px;
      }
      .access-box p {
         margin: 16px 0 24px;
         font-size: 15.7px;
      }
      .access-box button {
         margin: auto;
      }
      .access-box .patter3 {
         display: none;
      }
   }
   /*********
   * Footer *
   *********/
   footer {
      height: 272px;
      padding-top: 60px;
   }
   footer .container {
      width: 116px;
      height: 102px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
   }
   footer .container .socials {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   footer .container .socials a svg:hover path {
      fill: #24053e;
   }
   footer .container .socials a svg path {
      fill: #584d62;
      transition: 0.5s;
   }

   /****************
   * Footer Mobile *
   ****************/
   @media (max-width: 740px) {
      footer {
         height: 239px;
         padding-top: 76px;
      }
   }
`;
