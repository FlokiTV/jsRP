<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { setup } from "$lib/jsrp-nui";

  onMount(() => {
    setup({
      updateSpawn: (list: any) => {
        console.log(list);
        localStorage.setItem("spawnList", JSON.stringify(list));
      },
    });
    console.log("jsrp-nui:setup");
  });
</script>

<slot />
