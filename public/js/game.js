// write script for game!
$(document).ready(function () {
  const scoreElement = document.getElementById("score");
  const timeElement = document.getElementById("time");

  const settingsButton = document.getElementById("settings-btn");
  const settings = document.getElementById("settings");

  const startButton = document.getElementById("start-btn");
  const typeArea = document.getElementById("typeArea");

  const difficultyForm = document.getElementById("difficulty-form");
  const difficultyArea = document.getElementById("difficultyArea");
  const difficulty = document.getElementById("difficulty");

  const enterInitialsForm = document.getElementById("enter-initials-form");
  const enterInitialsArea = document.getElementById("enterInitialsArea");
  const initialsHeader = document.getElementById("enterInitialsHeader");

  const hsArea = document.getElementById("highScoresArea");
  const hsList = document.getElementById("high-score-list");
  const hsModalButton = document.getElementById("btn-hs-modal");
  const hsListModal = document.getElementById("modal-high-scores-list");

  const word = document.getElementById("word");
  const text = document.getElementById("text");

  let diffculty_level;
  let randomWord;
  let score = 0;
  let time = 10;
  let wordsArray = [];
  
  // Initialize Function will thide the other elements upon page load
  function initialize() {
    $(typeArea).css("display", "none");
    $(difficultyArea).css("display", "none");
    $(enterInitialsArea).css("display", "none");
    $(hsArea).css("display", "none");
    $("select").formSelect();
  }

  initialize();

  // "Start" button listener for user to choose difficulty level
  startButton.addEventListener("click", start);

  function start() {
    $(difficultyArea).css("display", "block");
    $(startButton).css("display", "none");
  }

  // Add event listener when user selects difficulty level
  difficultyForm.addEventListener("submit", function test(e) {
    e.preventDefault();

    // Get difficulty level
    diffculty_level = $(difficulty).val();

    queryWords(diffculty_level);
  });

  function queryWords(game_difficulty) {
    $.ajax({
      method: "GET",
      url: "/api/words/difficulty/" + game_difficulty
    }).then(data => {
      // Initiate Main Game Function by passing words sorted by difficulty level
      collectWords(data);
      startGame(data);
    });
  }

  function collectWords(words) {
    words.forEach(data => {
      wordsArray.push(data.words);
    });
  }

  function getRandomWord() {
    return wordsArray[Math.floor(Math.random() * wordsArray.length)];
  }

  function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
  }

  function updateScore() {
    score++;
    scoreElement.innerHTML = score;
  }

  function startGame() {
    $(difficultyArea).css("display", "none");
    $(typeArea).css("display", "block");
    $(text).focus();

    const timeInterval = setInterval(updateTime, 1000);

    function updateTime() {
      time--;
      timeElement.innerHTML = time + "s";

      if (time === 0) {
        clearInterval(timeInterval);
        enterInitials();
      }
    }

    // Event Listener for user's input for the typing game
    text.addEventListener("input", e => {
      const insertedText = e.target.value;

      if (insertedText === randomWord) {
        addWordToDOM();
        updateScore();
        e.target.value = "";

        if (diffculty_level === "hard") {
          time += 2;
        } else if (diffculty_level === "medium") {
          time += 3;
        } else {
          time += 5;
        }

        updateTime();
      }
    });

    // Get the random word and place it in the DOM
    addWordToDOM();
  }

  function enterInitials() {
    initialsHeader.innerHTML = `
    <h1>Your time ran out!</h1>
    <br>
    <p>Your final score is ${score}</p>
    <br>
    `;
    $(enterInitialsArea).css("display", "block");
  }

  enterInitialsForm.addEventListener("submit", function test(e) {
    e.preventDefault();
    const player = $("#initials").val();
    submitScore(player, score);
  });

  function submitScore(player, score) {
    const userData = {
      player: player,
      score: score
    };

    $.ajax({
      method: "POST",
      url: "/api/player",
      data: userData
    }).then(response => {
      getHighScores();
    });
  }

  function getHighScores() {
    $.ajax({
      method: "GET",
      url: "/api/player/scores"
    }).then(response => {
      displayHighScores(response);
    });
  }

  function displayHighScores(highscores) {
    $(enterInitialsArea).css("display", "none");
    $(typeArea).css("display", "none");
    $(hsArea).css("display", "block");

    let html = "";

    highscores.forEach((highscore, c) => {
      html += `
            <li class="collection-item">${highscore.player} - ${
        highscore.score
      }</li>
      `;
    });

    hsList.innerHTML = html;
  }

  settingsButton.addEventListener("click", () => {
    settings.classList.toggle("hide");
  });

  // Restart Button reloads webpage
  $(".restart").on("click", function () {
    window.location.reload();
  });

  // GET Player scores
  $(hsModalButton).on("click", function () {

    $.ajax({
      method: "GET",
      url: "/api/player/scores"
    }).then(response => {
      let html = "";

      response.forEach((highscore, c) => {
        html += `
              <li class="collection-item">${highscore.player} - ${
          highscore.score
        }</li>
        `;
      });
      hsListModal.innerHTML = html;
    });
  });
});