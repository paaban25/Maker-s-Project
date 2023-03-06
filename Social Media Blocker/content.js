const generateHTMLforLimitingDuration = (pageName) => {   /*HTML page for the webpage that will appear when time limit exceds the permissible limit */
  return `<!DOCTYPE html>                                 
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Website Blocked</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      
      
     <div class="content">
      <div class="error">TimeOut</div>
      <div class="message">
           Use of this website Exceeded <br>
          Today you have reached your permissible duration of Usage of this website.
      </div>
      <div class="suggestion">
        <h2>You can now switch to the following websites for your productive use of time.</h2>   
        <ul>
            <li><a href="https://www.w3schools.com/">W3Schools</a></li>                          
            <li><a href="https://www.geeksforgeeks.org/">GeeksForGeeks</a></li>
            <li><a href="https://www.udemy.com/">Udemy</a></li>
            <li><a href="https://www.freecodecamp.org/">FreeCodeCamp</a></li>
            <li><a href="https://stackoverflow.com/">StackOverFlow</a></li>
            <li><a href="https://codeforces.com/">CodeForces</a></li>
            <li><a href="https://github.com/">GitHub</a></li>
        </ul>
      </div>
     </div>
     <div class="area" >
        <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
</div >
  </body>
  </html>`
}
const generateCSSforLimitingDuration = () => {  /*CSS design for the webpage that will appear when time limit exceds the permissible limit */
  return ` <style>@import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap');
  *{
    margin: 0px;
    padding: 0px;
  }
  .error{
      
      padding: 10px 25px;
      
      font-family: 'Climate Crisis', cursive;
      width:40%;
      margin: -50px auto ;
      text-align: center;
      font-size: 100px;
      text-shadow: 0 0 5px #fff,
                   0 0 10px #fff, 
                   0 0 20px rgb(109, 128, 0), 
                   0 0 30px rgb(119, 128, 0), 
                   0 0 40px rgb(241, 231, 81), 
                   0 0 55px rgb(208, 223, 77), 
                   0 0 70px green;
  
  }
  
    .content {
      position: fixed;
      bottom: 200px;
      
      color: #e00d0d;
      width: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      text-align: center;
  
    }
    .message{   
      width: 70%;
      margin:   50px auto;
      padding: 20px 20px;
      font-family: 'Tilt Warp', cursive;
      font-size: 25px;
      color: aliceblue;
      
    }
    .suggestion{
      font-family: 'Shantell Sans', cursive;
      font-size: 20px;
      font-weight:200;    
      margin: -29px auto;
      
    }
    .suggestion li a{
      text-decoration: none;
      cursor: pointer;
      color: rgb(224, 205, 205);
    }
    .suggestion li a:hover{
      font-size: 30px;
    }
    .area{
      background: #4e54c8;  
      background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
      width: 100%;
      height:100vh;
      
     
  }
  
  .circles{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
  }
  
  .circles li{
      position: absolute;
      display: block;
      list-style: none;
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0.2);
      animation: animate 25s linear infinite;
      bottom: -150px;
      
  }
  
  .circles li:nth-child(1){
      left: 25%;
      width: 80px;
      height: 80px;
      animation-delay: 0s;
  }
  
  
  .circles li:nth-child(2){
      left: 10%;
      width: 20px;
      height: 20px;
      animation-delay: 2s;
      animation-duration: 12s;
  }
  
  .circles li:nth-child(3){
      left: 70%;
      width: 20px;
      height: 20px;
      animation-delay: 4s;
  }
  
  .circles li:nth-child(4){
      left: 40%;
      width: 60px;
      height: 60px;
      animation-delay: 0s;
      animation-duration: 18s;
  }
  
  .circles li:nth-child(5){
      left: 65%;
      width: 20px;
      height: 20px;
      animation-delay: 0s;
  }
  
  .circles li:nth-child(6){
      left: 75%;
      width: 110px;
      height: 110px;
      animation-delay: 3s;
  }
  
  .circles li:nth-child(7){
      left: 35%;
      width: 150px;
      height: 150px;
      animation-delay: 7s;
  }
  
  .circles li:nth-child(8){
      left: 50%;
      width: 25px;
      height: 25px;
      animation-delay: 15s;
      animation-duration: 45s;
  }
  
  .circles li:nth-child(9){
      left: 20%;
      width: 15px;
      height: 15px;
      animation-delay: 2s;
      animation-duration: 35s;
  }
  
  .circles li:nth-child(10){
      left: 85%;
      width: 150px;
      height: 150px;
      animation-delay: 0s;
      animation-duration: 11s;
  }
  
  
  
  @keyframes animate {
  
      0%{
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
      }
  
      100%{
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
      }
  
  }
  
  
    </style>
  
  `
}

const generateHTMLforDeningAccess = (pageName) => { /*HTML page for the webpage that will appear when user opens a websites in the time when it is restricted to open at that time */
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Blocked</title>
      <link rel="stylesheet" href="blocked.css">
  </head>
  <body>
      
      <div class="backg">
          <div class="planet">
            <div class="r1"></div>
            <div class="r2"></div>
            <div class="r3"></div>
            <div class="r4"></div>
            <div class="r5"></div>
            <div class="r6"></div>
            <div class="r7"></div>
            <div class="r8"></div>
            <div class="shad"></div>
          </div>
          <div class="stars">
            <div class="s1"></div>
            <div class="s2"></div>
            <div class="s3"></div>
            <div class="s4"></div>
            <div class="s5"></div>
            <div class="s6"></div>
          </div>
          <div class="an">
            <div class="tank"></div>
            <div class="astro">
                
                <div class="helmet">
                  <div class="glass">
                    <div class="shine"></div>
                  </div>
                </div>
                <div class="dress">
                  <div class="c">
                    <div class="btn1"></div>
                    <div class="btn2"></div>
                    <div class="btn3"></div>
                    <div class="btn4"></div>
                  </div>
                </div>
                <div class="handl">
                  <div class="handl1">
                    <div class="glovel">
                      <div class="thumbl"></div>
                      <div class="b2"></div>
                    </div>
                  </div>
                </div>
                <div class="handr">
                  <div class="handr1">
                    <div class="glover">
                      <div class="thumbr"></div>
                      <div class="b1"></div>
                    </div>
                  </div>
                </div>
                <div class="legl">
                  <div class="bootl1">
                    <div class="bootl2"></div>
                  </div>
                </div>
                <div class="legr">
                  <div class="bootr1">
                    <div class="bootr2"></div>
                  </div>
                </div>
                <div class="pipe">
                  <div class="pipe2">
                    <div class="pipe3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      <div class="content">
          <div class="message">
              This website is blocked for now. 
          </div>
          <div class="visit"> Please visit this after sometimes.</div>
         </div>
  </body>
  </html>`
}
const generateCSSforDeningAccess = () => {       /*CSS design for the webpage that will appear when user opens a websites in the time when it is restricted to open at that time */
  return `
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap');
  
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  
  
  
    
    .content {
      position: fixed;
      bottom: 100px;
     
      color: #e00d0d;
      width: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      text-align: center;
  
    }
    .message{
      
      font-family: 'Shantell Sans', cursive;
      font-size: 80px;
      color: yellow;
      width: 90%;
      
      margin: 300px auto;
      text-shadow:
        0 0 7px #29ca31,
        0 0 10px #29d36a,
        0 0 21px #b6f06f,
        0 0 42px #0fa,
        0 0 82px rgb(216, 227, 164),
        0 0 92px rgb(226, 238, 59),
        0 0 102px rgb(21, 123, 207),
        0 0 151px rgb(190, 229, 72);
    }
    .visit{
      font-family: 'Lobster', cursive;
      font-size: 80px;
      
      width: 90%;
      
      margin: 0px auto;
      text-shadow:
        0 0 7px #e0e5e0,
        0 0 10px #ecf0ed,
        0 0 21px #adec5f,
        0 0 42px #0fa,
        0 0 82px rgb(238, 242, 219),
        0 0 92px rgb(228, 232, 168),
        0 0 102px rgb(163, 200, 230),
        0 0 151px rgb(225, 240, 182);
    }
    
    body{
      background-color: #004466;
      padding:0;
      margin:0;
      height:100vh;
      width:100vw;
      display:flex;
      align-items:center;
      justify-content:center;
    }
    .backg{
      position:relative;
      height:500px;
      width:500px;
      border-radius:50%;
      background-color:rgba(0,0,0,0.1);
      transform:scale(0.7);
      }
    .planet{
      height:200px;
      width:200px;
      border-radius: 50%;
      position: relative;
      background-color: #ff9933;
      top:45px;
      left:220px;
    }
    .r1{
      background-color: #ffbf80;
      height:20px;
      width:110px;
      border-radius:10px;
      position: relative;
      top:60px;
      left:85px;
    }
    .r2{
      background-color: #ffbf80;
      height: 15px;
      width:90px;
      border-radius:6.5px;
      position: relative;
      top:80px;
      left:110px;
    }
    .r3{
      background-color: #ffbf80;
      height:30px;
      width:120px;
      border-radius: 15px;
      position: relative;
      top:78px;
      left:50px;
    }
    .r4{
      background-color: #ffbf80;
      height:22px;
      width:90px;
      border-radius:11px;
      position: relative;
      top:70px;
      left:12px;
    }
    .r5{
      background-color: rgba(204, 102, 0,0.3);
      height:15px;
      width:40px;
      border-radius:7.5px;
      position: relative;
      bottom:50px;
      left:70px;
    }
    .r6{
      background-color: rgba(204, 102, 0,0.3);
      height:20px;
      width:60px;
      border-radius:11px;
      position: relative;
      bottom:25px;
      left:10px;
    }
    .r7{
      background-color: rgba(204, 102, 0,0.3);
      height:15px;
      width:45px;
      border-radius:7.5px;
      position: relative;
      top:40px;
      left:130px;
    }
    .r8{
      background-color: rgba(255,255,255,0.4);
      height:12px;
      width:30px;
      border-radius:7.5px;
      position: relative;
      top:7px;
      left:32px;
    }
    .shad{
      background-color: transparent;
      box-shadow: 15px 15px rgba(204, 102, 0,0.3);
      position: relative;
      height:200px;
      width:200px;
      border-radius: 50%;
      bottom: 164px;
      right:16px;
    }
    .astro{
      position: relative;
      left:131px;
      bottom: 250px;
      transform: rotate(-30deg);
    
    }
    .an{
      animation-name: flo;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      position: relative;
      bottom: 80px;
      left:20px;
    
    }
    @keyframes flo{
      50%{
        transform: translateY(30px);
      }
    }
    .tank{
      background-color: #a6a6a6;
      height:120px;
      width:120px;
      border-radius: 10px;
      position: relative;
      left:95px;
      top:50px;
      transform: rotate(-30deg);
    }
    .helmet{
      background-color: white;
      height:93px;
      width:100px;
      border-radius:45%;
      position: relative;
      left:20px;
      z-index: 5;
    }
    .glass{
      background-color: #666666;
      height:60px;
      width:80px;
      border-top-left-radius:60%;
      border-top-right-radius:60%;
      border-bottom-left-radius:40%;
      border-bottom-right-radius:40%;
      position: relative;
      left:10px;
      top:7px;
    }
    .shine{
      background-color: rgba(166, 166, 166,0.7);
      height:15px;
      width:15px;
      border-radius: 50%;
      position: relative;
      left:10px;
      top:15px;
    }
    .dress{
      background-color:#f2f2f2;
      height:100px;
      width: 100px;
      border-radius: 10%; 
      position: relative;
      bottom:5px;
      left:20px;
    
    }
    .handr{
      height: 26px;
      width:75px;
      background-color: #f2f2f2;
      border-radius:40px;
      position: relative;
      bottom:138px;
      left:95px;
      transform: rotate(-20deg);
    }
    .handl{
      height: 26px;
      width:75px;
      background-color: #f2f2f2;
      border-radius:40px;
      position: relative;
      bottom:111px;
      right:29px;
      transform: rotate(20deg);
    }
    .handr1{
      height: 26px;
      width:57px;
      background-color: #f2f2f2;
      border-radius:26px;
      position: relative;
      bottom: 18px;
      left:35px;
      transform: rotate(90deg);
    }
    .handl1{
      height: 26px;
      width:57px;
      background-color: #f2f2f2;
      border-radius:26px;
      position: relative;
      bottom: 17px;
      right:17px;
      transform: rotate(-90deg);
    }
    .glover{
      height:28px;
      width:26px;
      background-color: white;
      border-top-left-radius:50%; 
      border-top-right-radius:50%;
      transform: rotate(-90deg);
      position: relative;
      bottom: 1px;
      right:16px;
    }
    .glovel{
      height:28px;
      width:26px;
      background-color: white;
      border-top-left-radius:50%; 
      border-top-right-radius:50%;
      transform: rotate(90deg);
      position: relative;
      bottom: 1px;
      left:42px;
    }
    .thumbr{
      height: 10px;
      width:10px;
      border-radius: 50%;
      background-color: white;
      position: relative;
      right:7px;
      top:19px;
    }
    .thumbl{
      height: 10px;
      width:10px;
      border-radius: 50%;
      background-color: white;
      position: relative;
      left:21px;
      top:19px;
    }
    .b1{
      background-color: tomato;
      width:28px;
      height:5.5px;
      border-radius:13px;
      position: relative;
      top:18px;
      right: 1px;
    }
    .b2{
      background-color: tomato;
      width:28px;
      height:5.5px;
      border-radius:13px;
      position: relative;
      top:18px;
      right: 1px;
    }
    .c{
      background-color: white;
      width:55px;
      height:30px;
      border-radius:8px;
      position: relative;
      top:25px;
      left:23px;
    }
    .btn1{
      height:12px;
      width: 12px;
      border-radius: 50%;
      background-color: #4775ff;
      position: relative;
      left:5px;
      top:10px;
    }
    .btn2{
      height:12px;
      width: 12px;
      border-radius: 50%;
      background-color: #ffd147;
      position: relative;
      left:21px;
      bottom:2px;
    }
    .btn3{
      height:12px;
      width: 12px;
      border-radius: 50%;
      background-color: tomato;
      position: relative;
      bottom:14px;
      left:38px;
    }
    .btn4{
      height:20px;
      width:20px;
      border-radius: 50%;
      background-color: #a6a6a6;
      position: relative;
      left:19px;
      top:4px;
    }
    
    .legl{
      height:100px;
      width:40px;
      background-color: #f2f2f2;
      position: relative;
      bottom: 68px;
      left:5px;
      transform: rotate(20deg);
    }
    .legr{
      height:100px;
      width:40px;
      background-color: #f2f2f2;
      position: relative;
      bottom: 168px;
      left:96px;
      transform: rotate(-20deg);
    }
    .bootl1{
      background-color: white;
      width: 43px;
      height:35px;
      border-top-left-radius: 50%;
      border-top-right-radius:50%;
      position: relative;
      top:65px;
      right:1.5px;
    }
    .bootr1{
      background-color: white;
      width: 43px;
      height:35px;
      border-top-left-radius: 50%;
      border-top-right-radius:50%;
      position: relative;
      top:65px;
      right:1.5px;
    }
    .bootl2{
      background-color: tomato;
      width:45px;
      height: 5px;
      border-radius:21px;
      position: relative;
      top:30px;
      right: 1.5px;
    }
    .bootr2{
      background-color: tomato;
      width:45px;
      height: 5px;
      border-radius:21px;
      position: relative;
      top:30px;
      right: 1.5px;
    }
    .pipe{
      background-color:  transparent;
      height:80px;
      width:80px;
      border:10px solid #4775ff;
      border-radius:40px 0px 0px 70px;
      border-right: none;
      transform: rotate(180deg);
      position: relative;
      bottom: 330px;
      left:130px;
    }
    .pipe2{
      background-color:  transparent;
      height:90px;
      width:42px;
      border:10px solid #4775ff;
      border-radius:40px 0px 0px 0px;
      border-right: none;
      transform: rotate(90deg);
      position: relative;
      border-bottom: none;
      left:67px;
      bottom:34px;
    
    }
    .pipe3{
      height:10px;
      width: 10px;
      background-color: #4775ff;
      position: relative;
      border-radius: 65%;
      bottom:10px;
      left:37px;
    }
    .s1,.s2,.s3,.s4,.s5,.s6{
      background-color: white;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: relative;
    }
    .s1{
      bottom:150px;
      left:200px;
    }
    .s2{
      top:130px;
      left:254px;
    }
    .s3{
      bottom:98px;
      left:65px;
    }
    .s4{
      top: 216px;
      left:249px;
    }
    .s5{
      top: 139px;
      left:100px;
    }
    .s6{
      top:60px;
      left:370px;
    }
    </style>
    `
}

//Social Media Sites like Youtube, Facebook, Instagram, Discord are targetted in this Extension
let nowTime = new Date();
let nowHours = nowTime.getHours();      //Getting the hour value of current time which can be used to set condition of restricted time during a particular period of day.
switch (window.location.hostname) {
  case "www.youtube.com":
    if (nowHours >= 9 && nowHours < 16) {    //One can't open youtube between 9AM to 4PM.
      document.head.innerHTML = generateCSSforDeningAccess();       //At that time if one tries to open youtube then another restricting page will be loaded.
      document.body.innerHTML = generateHTMLforDeningAccess("YOUTUBE");
    }
    else {
      setTimeout(myFunction, 600000);
      function myFunction() {             //Function will automatically open a warning page when the user uses youtube for 10 minutes.

        document.head.innerHTML = generateCSSforLimitingDuration();
        document.body.innerHTML = generateHTMLforLimitingDuration("YOUTUBE");

      }
    }
    break;
  case "www.facebook.com":
    if (nowHours > 9 && nowHours < 16) {      //One can't open facebook between 9AM to 4PM.
      document.head.innerHTML = generateCSSforDeningAccess();         //At that time if one tries to open facebook then another restricting page will be loaded.
      document.body.innerHTML = generateHTMLforDeningAccess("FACEBOOK");
    }
    else {
      setTimeout(myFunction, 600000);
      function myFunction() {                 //Function will automatically open a warning page when the user uses facebook for 10 minutes.

        document.head.innerHTML = generateCSSforLimitingDuration();
        document.body.innerHTML = generateHTMLforLimitingDuration("FACEBOOK");
      }
    }
    break;
  case "www.instagram.com":
    if (nowHours > 9 && nowHours < 16) {        //One can't open instagram between 9AM to 4PM.
      document.head.innerHTML = generateCSSforDeningAccess();         //At that time if one tries to open instagram then another restricting page will be loaded.
      document.body.innerHTML = generateHTMLforDeningAccess("INSTAGRAM");
    }
    else {
      setTimeout(myFunction, 600000);
      function myFunction() {            //Function will automatically open a warning page when the user uses instagram for 10 minutes.

        document.head.innerHTML = generateCSSforLimitingDuration();
        document.body.innerHTML = generateHTMLforLimitingDuration("INSTAGRAM");

      }
    }
    break;

    case "discord.com":
    if (nowHours > 9 && nowHours < 16) {         //One can't open discord between 9AM to 4PM.
      document.head.innerHTML = generateCSSforDeningAccess();         //At that time if one tries to open discord then another restricting page will be loaded.
      document.body.innerHTML = generateHTMLforDeningAccess("DISCORD");
    }
    else {
      setTimeout(myFunction, 600000);
      function myFunction() {             //Function will automatically open a warning page when the user uses discord for 10 minutes.

        document.head.innerHTML = generateCSSforLimitingDuration();
        document.body.innerHTML = generateHTMLforLimitingDuration("DISCORD");

      }
    }
    break;

}


