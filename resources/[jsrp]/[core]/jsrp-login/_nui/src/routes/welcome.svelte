<script lang="ts">
  import { emit } from "$lib/jsrp-nui";
  import { onMount } from "svelte";
  let list: any = {};

  onMount(() => {
    list = localStorage.getItem("spawnList");
    console.log(list);
  });
</script>

<div class="bg-gray-900 bg-opacity-80 h-screen flex flex-col justify-center items-center space-y-2">
  <div class="np">
    <h3 class="text-center text-xs">welcome to</h3>
    <h1 class="text-9xl mb-2 text-center font-bold"><span class="text-3xl text-blue-500">js</span>RP</h1>
  </div>
  <div class="pt-8">
    <button
      class="btn btn-secondary"
      on:click={() => {
        emit("spawn", "last");
      }}>last location</button
    >
    <button
      on:click={() => {
        emit("spawn", "safe");
      }}
      class="btn btn-info">safezone</button
    >
  </div>
</div>
