<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { setup } from "$lib/jsrp-nui";

  onMount(() => {
    setup();
    goto("/nui/");
  });
</script>
