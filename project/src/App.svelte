<script>
  import home from "./pages/home.svelte";
  import Router from "svelte-spa-router";

  const routes = {
    "/": home,
  };
</script>

<Router {routes} />
