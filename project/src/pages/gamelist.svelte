<script>
  import Header from "../components/header.svelte";
</script>

<Header />

<div class="midBar">
  <div>게임 목록</div>
  <div><input class="searchBar" type="search" placeholder="게임 검색" /></div>
</div>

<div class="gameList">//게임 리스트 들어갈 자리</div>

<style>
  .midBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    padding: 5px;
  }
  .searchBar {
    height: 13px;
    border: none;
    border-bottom: 1px solid black;
  }
</style>
