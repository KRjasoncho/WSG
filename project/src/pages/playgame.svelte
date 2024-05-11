<script>
  import { onMount } from "svelte";
  import Header from "../components/header.svelte";

  //   게임판의 크기를 정하는 부분
  const Num = 14;
  const lineNum = [];
  let i = 0;
  for (i = 0; i < Num; i++) {
    lineNum.push(0);
  }
  //겹치는 단어 확인용
  let checkWordBox = [];
  let errorWord = [];

  const checkWord = (checkWordBox, startPoint, targetAlphabat, direction) => {
    for (let i = 0; i < targetAlphabat.length; i++) {
      let position;
      if (direction === "1") {
        position = `item-${startPoint.column}-${startPoint.row + i}`;
      } else if (direction === "2") {
        position = `item-${startPoint.column + i}-${startPoint.row + i}`;
      } else if (direction === "3") {
        position = `item-${startPoint.column + i}-${startPoint.row}`;
      }
      if (checkWordBox.includes(position)) {
        return false;
      }
    }
    return true;
  };

  const targetAlphabat = ["@@", "###", "$$$$", "%%%%%"];

  //   무작위 알파뱃을 만들어주는 함수
  const makeAlphabat = () => {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  };

  //단어의 시작지점을 랜덤으로 뽑아주는 함수
  const searchStartPoint = (Num) => {
    const pre1 = Math.floor(Math.random() * Num);
    const pre2 = Math.floor(Math.random() * Num);
    if (Number(pre1) < Num && Number(pre2) < Num) {
      let startPointItem = {
        id: `item-${Number(pre1)}-${Number(pre2)}`,
        row: pre2,
        column: pre1,
      };
      return startPointItem;
    }
  };

  //단어 배열 방향을 선택하는 함수 1=우측,2=좌하단(대각선),3=하단
  const selectDirection = () => {
    const pre = Math.floor(Math.random() * 3) + 1;
    return pre.toString();
  };

  //단어를 우측으로 배열하는 함수
  const rowInsert = (startpoint, TargetWord) => {
    const wordStart = document.querySelector(`#${startpoint.id}`);

    for (let i = 0; i < TargetWord.length; i++) {
      const position = `item-${startpoint.column}-${startpoint.row + i}`;
      let a = document.getElementById(position);
      a.innerText = `${TargetWord[i]}`;
      checkWordBox.push(position);
    }
  };

  //단어를 좌하측으로 배열하는 함수
  const diagonaInsert = (startpoint, TargetWord) => {
    const wordStart = document.querySelector(`#${startpoint.id}`);

    for (let i = 0; i < TargetWord.length; i++) {
      const position = `item-${startpoint.column + i}-${startpoint.row + i}`;
      let a = document.getElementById(position);
      a.innerText = `${TargetWord[i]}`;
      checkWordBox.push(position);
    }
  };
  //단어를 하단으로 배열하는 함수
  const columnInsert = (startpoint, TargetWord) => {
    const wordStart = document.querySelector(`#${startpoint.id}`);

    for (let i = 0; i < TargetWord.length; i++) {
      const position = `item-${startpoint.column + i}-${startpoint.row}`;
      let a = document.getElementById(position);
      a.innerText = `${TargetWord[i]}`;
      checkWordBox.push(position);
    }
  };

  //   정답 단어를 가져오는 함수
  const loadWord = () => {};

  const gameStart = (Num, targetAlphabet) => {
    for (let i = 0; i < targetAlphabet.length; i++) {
      let tries = 5;
      let inserted = false;

      while (!inserted && tries > 0) {
        let startPoint = searchStartPoint(Num);
        let direction = selectDirection();

        if (
          direction === "1" &&
          checkWord(checkWordBox, startPoint, targetAlphabet[i], direction)
        ) {
          if (startPoint.row + targetAlphabet[i].length <= Num) {
            rowInsert(startPoint, targetAlphabet[i]);
            inserted = true;
          }
        } else if (
          direction === "2" &&
          checkWord(checkWordBox, startPoint, targetAlphabet[i], direction)
        ) {
          if (
            startPoint.row + targetAlphabet[i].length <= Num &&
            startPoint.column + targetAlphabet[i].length <= Num
          ) {
            diagonaInsert(startPoint, targetAlphabet[i]);
            inserted = true;
          }
        } else if (
          direction === "3" &&
          checkWord(checkWordBox, startPoint, targetAlphabet[i], direction)
        ) {
          if (startPoint.column + targetAlphabet[i].length <= Num) {
            columnInsert(startPoint, targetAlphabet[i]);
            inserted = true;
          }
        }

        tries--;
      }

      if (!inserted) {
        console.log(`${targetAlphabet[i]} 삽입 실패`);
      }
    }
  };

  onMount(() => gameStart(Num, targetAlphabat));
</script>

<Header />
<div class="gameTopBar">
  <div>게임 제목</div>
  <div>타이머</div>
  <div>제작자</div>
</div>

<div>
  <div class="gameGrid">
    <div class="gameBored" id="GB">
      {#each lineNum as divs, k}
        <div class="itemBox">
          {#each lineNum as divs, i}
            <div class="innerItemBox" id={`item-${k}-${i}`}>
              {makeAlphabat()}
            </div>
          {/each}
        </div>
      {/each}
    </div>
    <div class="targetWord">
      <div>Target Word</div>
      {loadWord()}
    </div>
  </div>
</div>

<style>
  .gameGrid {
    margin-top: 20px;
    justify-content: center;
    align-items: start;
    display: flex;
  }
  .targetWord {
    margin-left: 20px;
  }
  .itemBox {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .innerItemBox {
    border: 1px solid black;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .gameTopBar {
    justify-content: space-around;
    align-items: center;
    display: flex;
    margin-top: 20px;
  }
</style>
