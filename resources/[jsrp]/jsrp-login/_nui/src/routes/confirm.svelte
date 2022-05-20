<script lang="ts">
  import { goto, afterNavigate } from "$app/navigation";
  import { emit, closeNUI, done } from "$lib/jsrp-nui";
  import { onMount } from "svelte";
  let data: any = {};
  afterNavigate(() => {
    done();
  });
  onMount(() => {
    data = localStorage.getItem("userData");
    data = JSON.parse(data);
  });
</script>

<div class="bg-gray-900 bg-opacity-80 h-screen flex flex-col justify-center items-center space-y-2">
  <h1 class="text-xl uppercase font-bold mb-8 .np">Confirm information</h1>
  <div class="flex space-x-2 w-60 np">
    <span class="uppercase font-bold">First Name</span>
    <div class="np">{data.firstname}</div>
  </div>
  <div class="flex space-x-2 w-60 np">
    <span class="uppercase font-bold">Last Name</span>
    <div class="np">{data.lastname}</div>
  </div>
  <div class="flex space-x-2 w-60 np">
    <span class="uppercase font-bold">Age</span>
    <div class="np">{data.age}</div>
  </div>
  <div class="flex space-x-2 w-60 np">
    <span class="uppercase font-bold">Sex</span>
    <div class="np">{data.sex == "f" ? "Female" : "Male"}</div>
  </div>
  <div class="pt-8">
    <button
      class="btn btn-secondary"
      on:click={() => {
        goto("/nui/register");
      }}>restart</button
    >
    <button
      on:click={() => {
        emit("confirm", data);
      }}
      class="btn btn-info">let's go</button
    >
  </div>
</div>
