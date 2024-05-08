<script>
  import Gamelist from "./pages/gamelist.svelte";
  import Gamemaker from "./pages/gamemaker.svelte";
  import home from "./pages/home.svelte";
  import Router from "svelte-spa-router";

  const routes = {
    "/": home,
    "/gamemaker": Gamemaker,
    "/gamelist": Gamelist,
  };
</script>

<Router {routes} />
