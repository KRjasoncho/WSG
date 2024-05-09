<script>
  import Header from "../components/header.svelte";
</script>

<Header />

<div class="makerInfo">10~30개의 단어를 사용하여 게임을 만들 수 있습니다!</div>

<form class="submitForm">
  <div>게임 제목</div>
  <input type="text" />
  <div>게임 설명</div>
  <input type="text" />
  <div>정답 단어</div>
  <div class="inputBox">
    <div class="inputBox__cul">
      <input type="text" class="inputBoxItem" data-key="00" />
      <input type="text" class="inputBoxItem" data-key="01" />
      <input type="text" class="inputBoxItem" data-key="02" />
      <input type="text" class="inputBoxItem" data-key="03" />
      <input type="text" class="inputBoxItem" data-key="04" />
    </div>
    <div class="inputBox__cul">
      <input type="text" class="inputBoxItem" data-key="10" />
      <input type="text" class="inputBoxItem" data-key="11" />
      <input type="text" class="inputBoxItem" data-key="12" />
      <input type="text" class="inputBoxItem" data-key="13" />
      <input type="text" class="inputBoxItem" data-key="14" />
    </div>
    <div class="inputBox__cul">
      <input type="text" class="inputBoxItem" data-key="20" />
      <input type="text" class="inputBoxItem" data-key="21" />
      <input type="text" class="inputBoxItem" data-key="22" />
      <input type="text" class="inputBoxItem" data-key="23" />
      <input type="text" class="inputBoxItem" data-key="24" />
    </div>
    <div class="inputBox__cul">
      <input type="text" class="inputBoxItem" data-key="30" />
      <input type="text" class="inputBoxItem" data-key="31" />
      <input type="text" class="inputBoxItem" data-key="32" />
      <input type="text" class="inputBoxItem" data-key="33" />
      <input type="text" class="inputBoxItem" data-key="34" />
    </div>
    <div class="inputBox__cul">
      <input type="text" class="inputBoxItem" data-key="40" />
      <input type="text" class="inputBoxItem" data-key="41" />
      <input type="text" class="inputBoxItem" data-key="42" />
      <input type="text" class="inputBoxItem" data-key="43" />
      <input type="text" class="inputBoxItem" data-key="44" />
    </div>
    <div class="inputBox__cul">
      <input type="text" class="inputBoxItem" data-key="50" />
      <input type="text" class="inputBoxItem" data-key="51" />
      <input type="text" class="inputBoxItem" data-key="52" />
      <input type="text" class="inputBoxItem" data-key="53" />
      <input type="text" class="inputBoxItem" data-key="54" />
    </div>
  </div>
  <button type="submit">게임 생성</button>
</form>

<style>
  .makerInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
</style>
