window.onload = function(){

  console.log('linked');

  //variables
  var googleSF = "https://www.google.com.sg/maps/place/San+Francisco,+CA,+USA/@37.7576793,-122.5076399,12z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155?hl=en";
  var googleNY = "https://www.google.com.sg/maps/place/New+York,+NY,+USA/@40.6971494,-74.2598632,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en";
  var googleSonoma = "https://www.google.com.sg/maps/place/Sonoma,+CA+95476,+USA/@38.291092,-122.4666091,14z/data=!3m1!4b1!4m5!3m4!1s0x8085ac43817b9d77:0x380ed210ee6e045!8m2!3d38.291859!4d-122.4580356?hl=en";
  var googleNapa = "https://www.google.com.sg/maps/place/Napa,+CA,+USA/@38.2859417,-122.3599983,12z/data=!3m1!4b1!4m8!1m2!2m1!1sNapa!3m4!1s0x8084ffe7f8f2deef:0xd6629f3a3384c725!8m2!3d38.2975381!4d-122.286865?hl=en";
  var googleLondon = "https://www.google.com.sg/maps/place/London,+UK/@51.5285582,-0.2416806,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583?hl=en";


  //function
  var featureNotReady = function(event){

    alert( event.target.title + " feature isn't done yet.");
    console.log(event);
    console.log(event.target.title);
  }

  var openURL = function(url){
    window.open(url);
  }

  // target elements
  var btnGuidebook = document.getElementById('see-guidebooks');
  var btnDestinations = document.getElementById('see-destinations');

  var guidebookSF = document.querySelector('#SF');
  var guidebookNY = document.querySelector('#NY');
  var guidebookLondon = document.querySelector('#London');

  var destinationNapa = document.querySelector('#Napa');
  var destinationSonoma = document.querySelector('#Sonoma');
  var destinationSF = document.querySelector('#SF2');

  //add event listener
  btnGuidebook.addEventListener('click', function(){
    featureNotReady(event);
  });
  btnDestinations.addEventListener('click', function(){
    featureNotReady(event);
  });

  guidebookSF.addEventListener('click', function(){
    openURL(googleSF);
  });

  guidebookNY.addEventListener('click', function(){
    openURL(googleNY);
  });

  guidebookLondon.addEventListener('click', function(){
    openURL(googleLondon);
  });

  destinationNapa.addEventListener('click', function(){
    openURL(googleNapa);
  });

  destinationSonoma.addEventListener('click', function(){
    openURL(googleSonoma);
  });

  destinationSF.addEventListener('click', function(){
    openURL(googleSF);
  });

}
