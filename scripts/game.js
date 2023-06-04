/*
$(document).ready(function() {
  var score = 0;
  var gameStarted = false;
  var gameOver = false;


  

  function getRandomSpeed() {
    var speeds = [1000, 1200, 1400, 1600, 1800, 2000];
    return speeds[Math.floor(Math.random() * speeds.length)];
  }

  function createBox(spawnPoint) {
    var box = $("<div class='box'></div>");
    var speed = getRandomSpeed();
    var duration = speed === 2000 ? 3000 : 2000; // Adjust duration for speed 2000

    box.css({
      left: spawnPoint.x + "px",
      top: spawnPoint.y + "px",
      backgroundColor: speed === 2000 ? "red" : (speed === 1800 ? "orange" : "blue")
    });

    $("#game-container").append(box);

    box.animate({ left: $("#game-container").width() }, duration, function() {
      if (!gameOver) {
        gameOver = true;
        showGameOverMenu();
      }
      box.remove();
    });

    box.on("click", function() {
      if (!gameOver) {
        if (speed === 2000) {
          score += 3;
        } else if (speed === 1800) {
          score += 2;
        } else {
          score += 1;
        }
        $("#score-count").text(score);

        box.stop().fadeOut("slow", function() {
          box.remove();
        });
      }
    });
  }

  function startGame() {
    gameStarted = true;
    $("#play-btn").hide();
    $("#ins-btn").hide();
    spawnObjects();
  }

  function spawnObjects() {
    var spawnPoints = [
      { x: 0, y: 50 },
      { x: 0, y: 140 },
      { x: 0, y: 230 },
      { x: 0, y: 320 }
    ];

    var spawnInterval = 800;
    var spawnTimeout;

    function spawnBox() {
      if (gameOver) {
        clearTimeout(spawnTimeout);
        return;
      }

      var randomSpawnPoint = spawnPoints[Math.floor(Math.random() * spawnPoints.length)];
      createBox(randomSpawnPoint);

      spawnTimeout = setTimeout(spawnBox, spawnInterval);
    }

    spawnTimeout = setTimeout(spawnBox, spawnInterval);
  }

  function showGameOverMenu() {
    $("#game-over-menu").show();
    stopMusic();
    $("#replay-btn").on("click", function() {
      $("#game-over-menu").hide();
      resetGame();
      startGame();
      playMusic();
    });
    $("#exit-btn").on("click", function() {
      $("#game-over-menu").hide();
      $("#play-btn").show();
      $("#ins-btn").show();
      resetGame();
      stopMusic();
    });
  }

  function resetGame() {
    score = 0;
    gameOver = false;
    $("#score-count").text(score);
    $(".box").remove();
  }

  function playMusic() {
    var audio = new Audio("Waves.wav");
    audio.loop = true;
    audio.play();
    $("#play-btn").data("audio", audio);
  }

  function stopMusic() {
    var audio = $("#play-btn").data("audio");
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  $("#play-btn").on("click", function() {
    startGame();
    playMusic();
  });

  $("#ins-btn").on("click", function() {
    showInstructions();
  });

  function showInstructions() {
    $("#start-menu").hide();
    var instructionsWindow = $("<div id='instructions-window'></div>");
    var instructionsText = $("<div class='instructions'></div>").text("How to Play: There are 4 spawning points on the left side of our game window which will spawn fast objects. Your goal is to click on them before they reach the rightmost side. Red ones are worth 3 points, Orange ones are worth 2 points, and Blue ones are worth 1 point. However, Orange and Red ones are faster. Good Luck and ENJOY! :)");
    var closeButton = $("<button id='close-btn'>Close</button>");

    instructionsWindow.append(instructionsText);
    instructionsWindow.append(closeButton);
    $("#game-container").append(instructionsWindow);

    closeButton.on("click", function() {
      instructionsWindow.remove();
      $("#start-menu").show();
    });
  }

  $("#exit-btn").on("click", function() {
    $("#game-over-menu").hide();
    $("#start-menu").show();
    resetGame();
    stopMusic();
  });
}); */


$(document).ready(function() {
  var score = 0;
  var gameStarted = false;
  var gameOver = false;


  

  function getRandomSpeed() {
    var speeds = [1000, 1200, 1400, 1600, 1800, 2000];
    return speeds[Math.floor(Math.random() * speeds.length)];
  }

  function createBox(spawnPoint) {
    var box = $("<div class='box'></div>");
    var speed = getRandomSpeed();
    var duration = speed === 2000 ? 3000 : 2000; // Adjust duration for speed 2000

    box.css({
      left: spawnPoint.x + "px",
      top: spawnPoint.y + "px",
      backgroundColor: speed === 2000 ? "red" : (speed === 1800 ? "orange" : "blue")
    });

    $("#game-container").append(box);

    box.animate({ left: $("#game-container").width() }, duration, function() {
      if (!gameOver) {
        gameOver = true;
        showGameOverMenu();
      }
      box.remove();
    });

    box.on("click", function() {
      if (!gameOver) {
        if (speed === 2000) {
          score += 3;
        } else if (speed === 1800) {
          score += 2;
        } else {
          score += 1;
        }
        $("#score-count").text(score);

        box.stop().fadeOut("slow", function() {
          box.remove();
        });
      }
    });
  }

  function startGame() {
    gameStarted = true;
    $("#play-btn").hide();
    $("#ins-btn").hide();
    spawnObjects();
  }

  function spawnObjects() {
    var spawnPoints = [
      { x: 0, y: 50 },
      { x: 0, y: 140 },
      { x: 0, y: 230 },
      { x: 0, y: 320 }
    ];

    var spawnInterval = 800;
    var spawnTimeout;

    function spawnBox() {
      if (gameOver) {
        clearTimeout(spawnTimeout);
        return;
      }

      var randomSpawnPoint = spawnPoints[Math.floor(Math.random() * spawnPoints.length)];
      createBox(randomSpawnPoint);

      spawnTimeout = setTimeout(spawnBox, spawnInterval);
    }

    spawnTimeout = setTimeout(spawnBox, spawnInterval);
  }

  function showGameOverMenu() {
    $("#game-over-menu").show();
    stopMusic();
    $("#replay-btn").on("click", function() {
      $("#game-over-menu").hide();
      resetGame();
      startGame();
      playMusic();
    });
    $("#exit-btn").on("click", function() {
      $("#game-over-menu").hide();
      $("#play-btn").show();
      $("#ins-btn").show();
      resetGame();
      stopMusic();
    });
  }

  function resetGame() {
    score = 0;
    gameOver = false;
    $("#score-count").text(score);
    $(".box").remove();
  }

  function playMusic() {
    var audio = new Audio("Waves.wav");
    audio.loop = true;
    audio.play();
    $("#play-btn").data("audio", audio);
  }

  function stopMusic() {
    var audio = $("#play-btn").data("audio");
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  $("#play-btn").on("click", function() {
    startGame();
    playMusic();
  });

  $("#ins-btn").on("click", function() {
    showInstructions();
  });

  function showInstructions() {
    $("#start-menu").hide();
    var instructionsWindow = $("<div id='instructions-window'></div>");
    var instructionsText = $("<div class='instructions'></div>").text("How to Play: There are 4 spawning points on the left side of our game window which will spawn fast objects. Your goal is to click on them before they reach the rightmost side. Red ones are worth 3 points, Orange ones are worth 2 points, and Blue ones are worth 1 point. However, Orange and Red ones are faster. Good Luck and ENJOY! :)");
    var closeButton = $("<button id='close-btn'>Close</button>");

    instructionsWindow.append(instructionsText);
    instructionsWindow.append(closeButton);
    $("#game-container").append(instructionsWindow);

    closeButton.on("click", function() {
      instructionsWindow.remove();
      $("#start-menu").show();
    });
  }

  $("#exit-btn").on("click", function() {
    $("#game-over-menu").hide();
    $("#start-menu").show();
    resetGame();
    stopMusic();
  });
});

