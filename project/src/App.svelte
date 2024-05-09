<script>
  import Gamelist from "./pages/gamelist.svelte";
  import Gamemaker from "./pages/gamemaker.svelte";
  import home from "./pages/home.svelte";
  import Router from "svelte-spa-router";
  import Mypage from "./pages/mypage.svelte";
  import Playgame from "./pages/playgame.svelte";

  const routes = {
    "/": home,
    "/gamemaker": Gamemaker,
    "/gamelist": Gamelist,
    "/mypage": Mypage,
    "/playgame": Playgame,
  };
</script>

<Router {routes} />
