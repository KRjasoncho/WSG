<script>
  import Header from "../components/header.svelte";
  import Gamemaker from "./gamemaker.svelte";

  const moveToMakePage = () => {
    window.location.hash = "/gamemaker";
  };

  const moveToListPage = () => {
    window.location.hash = "/gamelist";
  };
</script>

<Header />
<main id="app">
  <div class="home">
    <div class="info">
      <div class="info__img">
        <img
          class="info__img__img"
          src="https://play-lh.googleusercontent.com/buGx7Qx6e_M9DUqiwABScUWx-xgiUSJBURBhivVel8OdVVzqOB2F5V3Nt60Ov8Qudw"
          alt=""
        />
      </div>
      <div class="info__title">WSG(Word Search Game)</div>
      <div class="info_description">
        WSG는 판에 무작위로 배열된 알파벳 중에서 좌측에 있는 'Target'단어를 찾는
        간단한 게임입니다. 'Make Game'에서 직접 'Target' 단어를 설정해 게임을
        만들 수 있습니다.
      </div>
    </div>
    <div class="btns">
      <button
        style="pointer: cursor"
        class="startBtn"
        on:click={moveToListPage}
      >
        <span class="text">Game Start!</span>
      </button>
      <button style="pointer: cursor" class="makeBtn" on:click={moveToMakePage}>
        <span class="text">Make Game!</span>
      </button>
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Dongle&family=Stylish&display=swap");
  .btns {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;
  }

  .home {
    background-color: rgb(255, 241, 223);
    width: 100vw;
    height: 100vh;
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 10px 10px 10px;
    margin: 0 60px 0 60px;
  }
  .info__img {
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .info__img__img {
    border: thick double black;
    width: 60%;
  }
  .info__title {
    margin: 20px 0 20px 0;
    font-weight: bold;
    border: dashed black;
    padding: 5px;
    font-family: "Stylish", serif;
    font-weight: 400;
    font-style: normal;
  }
  .info_description {
    width: 400px;
    font-size: 16px;
    border: solid 1px black;
    padding: 3px;
    font-family: "Dongle", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  button {
    font: inherit;
    background-color: #f0f0f0;
    border: 0;
    color: #242424;
    border-radius: 0.5em;
    font-size: 1.3rem;
    padding: 0.375em 1em;
    font-weight: 600;
    text-shadow: 0 0.0625em 0 #fff;
    box-shadow:
      inset 0 0.0625em 0 0 #f4f4f4,
      0 0.0625em 0 0 #efefef,
      0 0.125em 0 0 #ececec,
      0 0.25em 0 0 #e0e0e0,
      0 0.3125em 0 0 #dedede,
      0 0.375em 0 0 #dcdcdc,
      0 0.425em 0 0 #cacaca,
      0 0.425em 0.5em 0 #cecece;
    transition: 0.15s ease;
  }
  button:active,
  button:hover {
    translate: 0 0.225em;
    box-shadow:
      inset 0 0.03em 0 0 #f4f4f4,
      0 0.03em 0 0 #efefef,
      0 0.0625em 0 0 #ececec,
      0 0.125em 0 0 #e0e0e0,
      0 0.125em 0 0 #dedede,
      0 0.2em 0 0 #dcdcdc,
      0 0.225em 0 0 #cacaca,
      0 0.225em 0.375em 0 #cecece;
    cursor: pointer;
  }
</style>
