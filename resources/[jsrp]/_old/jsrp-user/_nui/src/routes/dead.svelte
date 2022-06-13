<script lang="ts">
  import { onMount } from "svelte";
  let time: any;
  onMount(() => {
    setInterval(() => {
      time = localStorage.getItem("updateDead") || "00:00:00";
    }, 200);
  });
</script>

<div class="h-screen bg-black bg-opacity-70 flex flex-col justify-center items-center space-y-2">
  <h1 class="uppercase font-bold text-5xl">Desacordado</h1>
  <h2>{time}</h2>
</div>
