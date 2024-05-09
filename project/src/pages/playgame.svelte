<script>
  import Header from "../components/header.svelte";
  const pre = Math.random().toString().substr(2, 2);
  const ranA = String.fromCharCode(Number(pre));
  const lineNum = [];
  const Num = 9;
  let i = 0;
  for (i = 0; i < Num; i++) {
    lineNum.push(0);
  }
</script>

<Header />

<div>{ranA}</div>
<div>게임 제목</div>

<div>
  <div class="gameGrid">
    <div class="gameBored" id="GB">
      {#each lineNum as divs}
        <div class="itemBox">
          {#each lineNum as divs}
            <div class="innerItemBox"></div>
          {/each}
        </div>
      {/each}
    </div>
    <div class="targetWord"></div>
  </div>
</div>

<style>
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
</style>
