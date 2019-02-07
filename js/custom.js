$(document).ready(() => {

  function randomiseQuotes() {
    var quotes_array = [
      `Toto, I've got a feeling we're not in Kansas anymore.`,
      `Gentlemen, you can't fight in here! This is the War Room!`,
      `I believe you have my stapler.`,
      `Build her a cake or something.`,
      `It's just a flesh wound.`,
      `The numbers all go to eleven. Look, right across the board, eleven, eleven, eleven and...`
    ];

    var random_quote = quotes_array[Math.floor(Math.random() * quotes_array.length)];

    $('#footer-quote').text(random_quote);
  }

  randomiseQuotes();

});