<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { setup } from "$lib/jsrp-nui";

  onMount(() => {
    setup({
      updateDead: (time: any) => {
        localStorage.setItem("updateDead", time);
      },
    });
    console.log("jsrp-user:setup");
  });
</script>

<slot />
