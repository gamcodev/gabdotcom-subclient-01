import React from 'react'


const Robo = () => {
	return (
			<div>  
				  <html>
  <body>
  <div>
  <button id="startover" onclick= "startover()" href="javascript:location.reload(true)">Start Over</button>
  </div>
  <div id="askesg">
  <h2>Do you want to look at our ESG funds?</h2>
  <button id="esgyes" onclick="esgyes()">Yes</button>
  <button id="esgno" onclick="esgno()">No</button>
  </div>
  <div id="question1">
  <h2>Do your personal values affect your investment decisions?</h2>
  <button id="oneyes" onclick="oneyes()">Yes</button>
  <button id="oneno" onclick="oneno()">No</button>
  </div>
  <div id="risktolerance">
    <h2>What is your level of risk tolerance?</h2>
    <button id="riskone" onclick="riskone()">Low</button>
    <button id="risktwo" onclick="risktwo()">Medium</button>
    <button id="riskthree" onclick="riskthree()">High</button>
  </div>
  <div>
    <h2 id=hreturns>What level of returns do you want?</h2>
    <button id="returnsone" onclick="returnsone()">Low</button>
    <button id="returnstwo" onclick="returnstwo()">Medium</button>
    <button id="returnsthree" onclick="returnsthree()">High</button>
  </div>
  <h2 id="hnav">What level of NAV change are you looking for?</h2>
  <button id="navone" onclick="navone()">Low</button>
  <button id="navtwo" onclick="navtwo()">Medium</button>
  <button id="navthree" onclick="navthree()">High</button>
</div>
<div id="showwantedreturns1">
  <h2>Here are our low return funds:</h2>
</div>
<div id="showwantednav1">
  <h2>Here are our low NAV funds:</h2>
</div>
<div id="showwantedrisk1">
  <h2>Here are our low risk funds:</h2>
</div>
<div id="showwantedreturns2">
  <h2>Here are our medium return funds:</h2>
</div>
<div id="showwantednav2">
  <h2>Here are our medium NAV funds:</h2>
</div>
<div id="showwantedrisk2">
  <h2>Here are our medium risk funds:</h2>
</div>
<div id="showwantedreturns3">
  <h2>Here are our high return funds:</h2>
</div>
<div id="showwantednav3">
  <h2>Here are our high NAV funds:</h2>
</div>
<div id="showwantedrisk3">
  <h2>Here are our high risk funds:</h2>
</div>
  <style>
  body {

      background-color: lightblue;
      text-align: center;


  }
  #listesg {
      background-color: white;
      color: darkblue;
  }
  #listpet{
          background-color: white;
      color: darkblue;

  }
  #listvalue {
          background-color: white;
      color: darkblue;

  }

  #listgrowth {
          background-color: white;
      color: darkblue;

  }
  #startover {
  padding: 15px 32px;
      font-size: 16px;
      text-color: white;

  }
  button {
      background-color: darkblue;
      border-color: darkblue;
      color: white;
      align: center;
      margin: 0 auto;
  }
  </style>
  <div id="question2">
  <h2>Do you want to save for retirement or get fast returns?</h2>
  <button id="retire" onclick="retire()">Retire</button>
  <button id="returna" onclick="returna()">Get Fast Returns</button>
  </div>

  <div id="question3">
  <h2>Do you have pets?</h2>
  <button id="pets" onclick="pets()">Yes</button>
  <button id="nopets" onclick="nopets()">No</button>
  </div>

  <div id="question4">
  <h2>What kind of share class are you looking for?</h2>
  <button id="pickaaa" onclick="pickaaa()">Class AAA</button>
  <button id="pickaaa" onclick="picka()">Class A</button>
  <button id="pickaaa" onclick="pickc()">Class C</button>
  <button id="pickaaa" onclick="picki()">Class I</button>
  <button id="pickaaa" onclick="pickadv()">Class ADV</button>
  <button id="pickaaa" onclick="pickfund()">Class Fund</button>


  </div>

  <div id="listpet">
      <h3>Gabelli Pet Parents Fund</h3>
  </div>

  <div id="listclassaaa">
  <h3>The Gabelli ABC Fund</h3>
    <h3>The Gabelli Asset Fund</h3>
    <h3>The Gabelli Dividend Growth Fund</h3>
    <h3>The Gabelli Enterprise Mergers and Aquisitions Fund</h3>
    <h3>The Gabelli Equity Income Fund</h3>
    <h3>The Gabelli ESG Fund</h3>
    <h3>The Gabelli Focus Five Fund</h3>
    <h3>The Gabelli Global Financial Services Fund</h3>
    <h3>The Gabelli Global Mini Mites Fund</h3>
    <h3>The Gabelli Global Rising Income and Dividend Fund</h3>
    <h3>The Gabelli Global Content and Connectivity Fund</h3>
    <h3>The Gabelli GLobal Growth Fund</h3>
    <
  </div>

  <div id="listclassa">
  <h3>The Gabelli Asset Fund</h3>
    <h3>The Gabelli Dividend Growth Fund</h3>
    <h3>Gabelli Enterprise Mergers and Acquisitions Fund</h3>
    <h3>The Gabelli Equity Income Fund</h3>
    <h3>The Gabelli ESG Fund</h3>
    <h3>The Gabelli Focus Five Fund</h3>
    <h3>The Gabelli Global Financial Services Fund</h3>
    <h3>The Gabelli Global Mini Mites Fund</h3>
    <h3>The Gabelli Global Rising Income and Dividend Fund</h3>
    <h3>The Gabelli Global Content and Connectivity Fund</h3>
    <h3>The Gabelli Global Growth Fund</h3>
    <h3>The Gabelli Gold Fund, Inc.</h3>
    <h3>The Gabelli Growth Fund</h3>
    <h3>The Gabelli International Small Cap Fund</h3>
    <h3>Gabelli International Growth Fund, Inc.</h3>
    <h3>The Gabelli Small Cap Growth Fund</h3>
    <h3>The Gabelli Utilities Fund</h3>
    <h3>The Gabelli Value 25 Fund</h3>
    <h3>Comstock Capital Value Fund</h3>
  </div>

  <div id="listclassc">
  <h3>The Gabelli Asset Fund</h3>
    <h3>The Gabelli Dividend Growth Fund</h3>
    <h3>Gabelli Enterprise Mergers and Acquisitions Fund</h3>
    <h3>The Gabelli Equity Income Fund</h3>
    <h3>The Gabelli ESG Fund</h3>
    <h3>The Gabelli Focus Five Fund</h3>
    <h3>The Gabelli Global Financial Services Fund</h3>
    <h3>The Gabelli Global Mini Mites Fund</h3>
    <h3>The Gabelli Global Rising Income and Dividend Fund</h3>
    <h3>The Gabelli Global Content and Connectivity Fund</h3>
    <h3>The Gabelli Global Growth Fund</h3>
    <h3>The Gabelli Gold Fund, Inc.</h3>
    <h3>The Gabelli Growth Fund</h3>
    <h3>The Gabelli International Small Cap Fund</h3>
    <h3>Gabelli International Growth Fund, Inc.</h3>
    <h3>The Gabelli Small Cap Growth Fund</h3>
    <h3>The Gabelli Utilities Fund</h3>
    <h3>The Gabelli Value 25 Fund Inc.</h3>
    <h3>Comstock Capital Value Fund</h3>
  </div>

  <div id="listclassi">
<h3>The Gabelli Asset Fund</h3>
    <h3>The Gabelli Dividend Growth Fund</h3>
    <h3>The Gabelli Equity Income Fund</h3>
    <h3>The Gabelli ESG Fund</h3>
    <h3>The Gabelli Focus Five Fund</h3>
    <h3>The Gabelli Global Financial Services Fund</h3>
    <h3>The Gabelli Global Mini Mites Fund</h3>
    <h3>The Gabelli Global Rising Income and Dividend Fund</h3>
    <h3>The Gabelli Global Content and Connectivity Fund</h3>
    <h3>The Gabelli Global Growth Fund</h3>
    <h3>The Gabelli Gold Fund, Inc.</h3>
    <h3>The Gabelli Growth Fund</h3>
    <h3>The Gabelli International Small Cap Fund</h3>
    <h3>Gabelli International Growth Fund, Inc.</h3>
    <h3>Gabelli Media Mogul Fund</h3>
    <h3>Gabelli Pet Parents Fund</h3>
    <h3>The Gabelli Small Cap Growth Fund</h3>
    <h3>The Gabelli Utilities Fund</h3>
    <h3>The Gabelli Value 25 Fund Inc.</h3>
    <h3>Comstock Capital Value Fund</h3>
  </div>

  <div id="listclassadv">
  <h3>The Gabelli ABC Fund</h3>
  </div>

  <div id="listclassfund">
   <h3>Gabelli Enterprise Mergers and Acquisitions Fund</h3>
  </div>






  <div id="listvalue">
      <h3>Gabelli Capital Asset Fund</h3>
      <h3>Gabelli Media Mogul Fund</h3>
      <h3>The Gabelli Asset Fund</h3>
      <h3> The Gabelli Dividend Growth Fund</h3>
      <h3> The Gabelli Equity Income Fund</h3>
      <h3> The Gabelli Focus Five Fund</h3>
      <h3> The Gabelli Global Content and Connectivity Fund</h3>
      <h3> The Gabelli Global Financial Services Fund</h3>
      <h3> The Gabelli Global Mini Mites Fund</h3>
      <h3> The Gabelli Global Rising Income and Dividend Fund</h3>
      <h3> The Gabelli Small Cap Growth Fund</h3>
      <h3> The Gabelli Utilities Fund</h3>
      <h3> The Value 25 Fund Inc.</h3>
  </div>

  <div id="listgrowth">
      <h3>The Gabelli International Growth Fund, Inc.</h3>
      <h3>The Gabelli Global Growth Fund</h3>
      <h3>The Gabelli Growth Fund</h3>
      <h3>The Gabelli International Small Cap Fund</h3>
  </div>

  <div id="listesg">
      <h3>The Gabelli ESG Fund</h3>
  </div>


  <br>
  <!--<button id="getresults" onclick="getresults()">Get Results</button>-->
  <div id="petfund">
  <!--<h2>You should look into our Gabelli Pet Parents Fund!</h2>-->
  <button url=https://www.gabelli.com/funds/open_ends/2994>Take me there></button>
  </div>
  <div id="relevance">
  <h2>Do you want a pet-centric fund?</h2>
  <button id="relevanceyes" onclick= relevanceyes()>Yes</button>
  <button id="relevanceno" onclick= relevanceno()>No</button>
  </div>

  <div id="value">
  <!--<h2>Take a look at our high value funds.</h2>-->
  </div>
  <div id="returns">
  <!--<h2>Take a look at our high growth funds.</h2>-->
  </div>
  <br></br>
  <div id="petfundz">
  <h2>Check out our pet parent fund.</h2>
  </div>
  <p id="results"></p>
  <p id="results2"></p>
  <p id="results3"></p>

  <script>
  document.getElementById("relevance").style.display = "none";
  document.getElementById("petfund").style.display = "none";
  document.getElementById("value").style.display = "none";
  document.getElementById("returns").style.display = "none";
  document.getElementById("petfundz").style.display = "none";
  document.getElementById("askesg").style.display = "none";
  document.getElementById("listvalue").style.display = "none";
  document.getElementById("listpet").style.display = "none";
  document.getElementById("listgrowth").style.display = "none";
  document.getElementById("listesg").style.display = "none";
  document.getElementById("listclassaaa").style.display = "none";
  document.getElementById("listclassa").style.display = "none";
  document.getElementById("listclassc").style.display = "none";
  document.getElementById("listclassi").style.display = "none";
  document.getElementById("listclassfund").style.display = "none";
  document.getElementById("listclassadv").style.display = "none";
  document.getElementById("showwantedrisk1").style.display = "none";
  document.getElementById("showwantedrisk2").style.display = "none";
  document.getElementById("showwantedrisk3").style.display = "none";
  document.getElementById("showwantednav1").style.display = "none";
  document.getElementById("showwantednav2").style.display = "none";
  document.getElementById("showwantednav3").style.display = "none";
  document.getElementById("showwantedrisk1").style.display = "none";
  document.getElementById("showwantedrisk2").style.display = "none";
  document.getElementById("showwantedrisk3").style.display = "none";
  document.getElementById("showwantedreturns3").style.display = "none";
  document.getElementById("showwantedreturns2").style.display = "none";
  document.getElementById("showwantedreturns1").style.display = "none";


  var user = {question1: null, question2: null, question3: null, navwanted: null, resultswanted: null, returnswanted: null};

  var question1;


  function oneyes() {
      question1 = 6;
      document.getElementById("askesg").style.display = "block";
          document.getElementById("question1").style.display = "none";
      return question1;


  }
  function oneno() {
      question1 = 5;
      document.getElementById("question1").style.display = "none";
      return question1;

  }

  var question2 = 0;



  function retire() {
      question2 = 6;
      document.getElementById("value").style.display = "block";
      document.getElementById("question2").style.display = "none";
      document.getElementById("listvalue").style.display = "block";
      return question2;


  }
  function returna() {
      question2 = 5;
       document.getElementById("question2").style.display = "none";

      document.getElementById("returns").style.display = "block";
          document.getElementById("listgrowth").style.display = "block";
      return question2;


  }

  var question3 = 0;



  function pets() {
      question3 = 6;
      document.getElementById("question3").style.display = "none";
      document.getElementById("relevance").style.display = "block";
      return question3;



  function relevance(){
      document.getElementById("relevance").style.display = "block";
      document.getElementById("listpet").style.display = "yes";

  }
  }
  function nopets() {
      question3 = 5;
      document.getElementById("question3").style.display = "none";
      return question3;

  }

  function relevanceyes() {
      document.getElementById("relevance").style.display = "none";

       document.getElementById("listpet").style.display = "block";



  }

  function esgyes() {
      document.getElementById("listesg").style.display = "block";
      document.getElementById("question1").style.display = "none";
          document.getElementById("askesg").style.display = "none";


  }

  function esgno() {
      document.getElementById("question1").style.display = "none";
      document.getElementById("askesg").style.display = "none";


  }

  function startover() {
      location.reload(true);
      document.getElementById("question1").style.display = "block";
      document.getElementById("question2").style.display = "block";
      document.getElementById("question3").style.display = "block";
      document.getElementById("question1").style.display = "none";
      document.getElementById("askesg").style.display = "none";
      document.getElementById("relevance").style.display = "none";
      document.getElementById("listpet").style.display = "none";
      document.getElementById("listgrowth").style.display = "none";
      document.getElementById("listvalue").style.display = "none";


  }

  function relevanceno() {
          document.getElementById("relevance").style.display = "none";

  }
  function picka() {
       document.getElementById("listclassa").style.display = "block";
       document.getElementById("listclassaaa").style.display = "none";
       document.getElementById("listclassc").style.display = "none";
       document.getElementById("listclassi").style.display = "none";
       document.getElementById("listclassadv").style.display = "none";
       document.getElementById("listclassfund").style.display = "none";


  }
  
  function pickaaa() {
       document.getElementById("listclassaaa").style.display = "block";
       document.getElementById("listclassa").style.display = "none";
       document.getElementById("listclassc").style.display = "none";
       document.getElementById("listclassi").style.display = "none";
       document.getElementById("listclassadv").style.display = "none";
       document.getElementById("listclassfund").style.display = "none";


  }
  function pickc() {
       document.getElementById("listclassc").style.display = "block";
       document.getElementById("listclassa").style.display = "none";
       document.getElementById("listclassaaa").style.display = "none";
       document.getElementById("listclassi").style.display = "none";
       document.getElementById("listclassadv").style.display = "none";
       document.getElementById("listclassfund").style.display = "none";

  }
  function picki() {
       document.getElementById("listclassi").style.display = "block";
       document.getElementById("listclassc").style.display = "none";
       document.getElementById("listclassaaa").style.display = "none";
       document.getElementById("listclassa").style.display = "none";
       document.getElementById("listclassfund").style.display = "none";
       document.getElementById("listclassadv").style.display = "none";


  }
  function pickadv() {
       document.getElementById("listclassadv").style.display = "block";
     document.getElementById("listclassi").style.display = "none";
       document.getElementById("listclassc").style.display = "none";
       document.getElementById("listclassaaa").style.display = "none";
       document.getElementById("listclassa").style.display = "none";
       document.getElementById("listclassfund").style.display = "none";
  }
  function pickfund() {
       document.getElementById("listclassadv").style.display = "none";
     document.getElementById("listclassi").style.display = "none";
       document.getElementById("listclassc").style.display = "none";
       document.getElementById("listclassaaa").style.display = "none";
       document.getElementById("listclassa").style.display = "none";
       document.getElementById("listclassfund").style.display = "block";
  }
  var navwanted = 0;
  var resultswanted = 0;
  var returnswanted= 0;
  function navone() {
    navwanted = 1;
  document.getElementById("showwantedrisk1").style.display = "none";
  document.getElementById("showwantedrisk2").style.display = "none";
  document.getElementById("showwantedrisk3").style.display = "none";
  document.getElementById("showwantednav1").style.display = "block";
  document.getElementById("showwantednav2").style.display = "none";
  document.getElementById("showwantednav3").style.display = "none";
  document.getElementById("showwantedreturns1").style.display = "none";
  document.getElementById("showwantedreturns2").style.display = "none";
  document.getElementById("showwantedreturns3").style.display = "none";
  return navwanted;
  }

  function navtwo() {
    navwanted = 2;
  document.getElementById("showwantedrisk1").style.display = "none";
  document.getElementById("showwantedrisk2").style.display = "none";
  document.getElementById("showwantedrisk3").style.display = "none";
  document.getElementById("showwantednav1").style.display = "none";
  document.getElementById("showwantednav2").style.display = "block";
  document.getElementById("showwantednav3").style.display = "none";
  document.getElementById("showwantedreturns1").style.display = "none";
  document.getElementById("showwantedreturns2").style.display = "none";
  document.getElementById("showwantedreturns3").style.display = "none";
    return navwanted;

  }
  function navthree() {
    navwanted = 3;
  document.getElementById("showwantedrisk1").style.display = "none";
  document.getElementById("showwantedrisk2").style.display = "none";
  document.getElementById("showwantedrisk3").style.display = "none";
  document.getElementById("showwantednav1").style.display = "none";
  document.getElementById("showwantednav2").style.display = "none";
  document.getElementById("showwantednav3").style.display = "block";
  document.getElementById("showwantedreturns1").style.display = "none";
  document.getElementById("showwantedreturns2").style.display = "none";
  document.getElementById("showwantedreturns3").style.display = "none";
    return navwanted;

  }
  function riskone() {
    riskwanted = 1;
  document.getElementById("showwantedrisk1").style.display = "block";
  document.getElementById("showwantedrisk2").style.display = "none";
  document.getElementById("showwantedrisk3").style.display = "none";
  document.getElementById("showwantednav1").style.display = "none";
  document.getElementById("showwantednav2").style.display = "none";
  document.getElementById("showwantednav3").style.display = "none";
  document.getElementById("showwantedreturns1").style.display = "none";
  document.getElementById("showwantedreturns2").style.display = "none";
  document.getElementById("showwantedreturns3").style.display = "none";
  return riskwanted;
  }
  function risktwo() {
    riskwanted = 2;
  document.getElementById("showwantedrisk1").style.display = "none";
  document.getElementById("showwantedrisk2").style.display = "block";
  document.getElementById("showwantedrisk3").style.display = "none";
  document.getElementById("showwantednav1").style.display = "none";
  document.getElementById("showwantednav2").style.display = "none";
  document.getElementById("showwantednav3").style.display = "none";
  document.getElementById("showwantedreturns1").style.display = "none";
  document.getElementById("showwantedreturns2").style.display = "none";
  document.getElementById("showwantedreturns3").style.display = "none";
  return riskwanted;
  }
  function riskthree() {
    riskwanted = 3;
  document.getElementById("showwantedrisk1").style.display = "none";
  document.getElementById("showwantedrisk2").style.display = "none";
  document.getElementById("showwantedrisk3").style.display = "block";
  document.getElementById("showwantednav1").style.display = "none";
  document.getElementById("showwantednav2").style.display = "none";
  document.getElementById("showwantednav3").style.display = "none";
  document.getElementById("showwantedreturns1").style.display = "none";
  document.getElementById("showwantedreturns2").style.display = "none";
  document.getElementById("showwantedreturns3").style.display = "none";
    return riskwanted;

  }
  function returnsone() {
    returnswanted = 1;
  document.getElementById("showwantedrisk1").style.display = "none";
  document.getElementById("showwantedrisk2").style.display = "none";
  document.getElementById("showwantedrisk3").style.display = "none";
  document.getElementById("showwantednav1").style.display = "none";
  document.getElementById("showwantednav2").style.display = "none";
  document.getElementById("showwantednav3").style.display = "none";
  document.getElementById("showwantedreturns1").style.display = "block";
  document.getElementById("showwantedreturns2").style.display = "none";
  document.getElementById("showwantedreturns3").style.display = "none";
  return returnswanted;
  }
  function returnstwo() {
    returnswanted = 2;
  document.getElementById("showwantedrisk1").style.display = "none";
  document.getElementById("showwantedrisk2").style.display = "none";
  document.getElementById("showwantedrisk3").style.display = "none";
  document.getElementById("showwantednav1").style.display = "none";
  document.getElementById("showwantednav2").style.display = "none";
  document.getElementById("showwantednav3").style.display = "none";
  document.getElementById("showwantedreturns1").style.display = "none";
  document.getElementById("showwantedreturns2").style.display = "block";
  document.getElementById("showwantedreturns3").style.display = "none";
  return returnswanted;
  }
  function returnsthree() {
    returnswanted = 3;
  document.getElementById("showwantedrisk1").style.display = "none";
  document.getElementById("showwantedrisk2").style.display = "none";
  document.getElementById("showwantedrisk3").style.display = "none";
  document.getElementById("showwantednav1").style.display = "none";
  document.getElementById("showwantednav2").style.display = "none";
  document.getElementById("showwantednav3").style.display = "none";
  document.getElementById("showwantedreturns1").style.display = "none";
  document.getElementById("showwantedreturns2").style.display = "none";
  document.getElementById("showwantedreturns3").style.display = "block";
  return returnswanted;
  }
  </script>
  <body>
  </html>





</div>
	)
}

export default Robo