const levels = [
  { answer: "bulbasaur", video: "video (3).mp4" },
  { answer: "pikachu", video: "video (2).mp4" },
  { answer: "charmander", video: "video (4).mp4" },
  { answer: "squlrtle", video: "video (4).mp4" },
];

function check(event) {
  event.preventDefault();
  let score = document.getElementById("score");
  let level = document.getElementById("level");
  const inputValue = event.target.userAnswer.value;
  const video = document.getElementById("videoPlayer");
  const currentLevel = Number(level.value) - 1;
  console.log(levels[currentLevel], inputValue == levels[currentLevel].answer);
  if (
    currentLevel < levels.length &&
    inputValue == levels[currentLevel].answer
  ) {
    alert("Answer correct :]");
    score.value = Number(score.value) + 1;
    level.value = Number(level.value) + 1; // Move to next level

    if (levels[currentLevel].video) {
      video.children[0].src = levels[currentLevel].video;
      video.load();
    }
  } else {
    score.value = Number(score.value) - 1;
    alert("Answer incorrect :[");
  }

  return false;
}
