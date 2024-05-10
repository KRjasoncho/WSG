<script>
  import Header from "../components/header.svelte";

  //   게임판의 크기를 정하는 부분
  const Num = 14;
  const lineNum = [];
  let i = 0;
  for (i = 0; i < Num; i++) {
    lineNum.push(0);
  }

  const targetAlphabat = ["apple", "bat"];

  //   무작위 알파뱃을 만들어주는 함수
  const makeAlphabat = () => {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  };

  //단어의 시작지점을 랜덤으로 뽑아주는 함수
  const searchStartPoint = (Num) => {
    const pre1 = Math.floor(Math.random() * Num);
    const pre2 = Math.floor(Math.random() * Num);
    if (Number(pre1) < Num && Number(pre2) < Num) {
      const startPointItem = {
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
    if (startpoint.row + TargetWord.lenght > Num) {
      return console.log(false);
    } else {
      const wordStart = document.querySelector(`#${startpoint.id}`);

      for (let i = 0; i < TargetWord.lenght; i++) {
        let a = document.getElementById(
          `itme-${startpoint.column}-${startpoint.row + i}`
        );
        a.innerText = `${TargetWord[i]}`;
      }
    }
  };
  //게임을 실행해주는 함수
  const gameStart = () => {};
  //   정답 단어를 가져오는 함수
  const loadWord = () => {};
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
