<script lang="ts">
  import { afterNavigate, goto } from "$app/navigation";
  import { done, getTime, setup, emit } from "$lib/jsrp-nui";
  import { onMount } from "svelte";

  let firstname: string, lastname: string, sex: string;
  let age = 18;

  afterNavigate(() => {
    done();
  });

  const setSex = async (s: string) => {
    sex = s;
    await emit("sex", { sex: s });
  };
  const next = async () => {
    await emit("next", {});
  };

  $: check = () => {
    if (firstname && lastname && age > 0 && sex) return true;
    else return false;
  };

  let time: any = [];
  setInterval(() => {
    time = getTime();
  }, 100);

  const saveData = () => {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        firstname,
        lastname,
        age,
        sex,
      })
    );
  };
</script>

<div class="bg-gray-900 h-screen flex flex-col justify-center items-center space-y-2">
  <div>
    <h1 class="text-5xl mb-2 text-center font-bold"><span class="text-lg text-blue-500">js</span>RP</h1>
    <h3 class="text-center">Javascript powered FiveM Base 🔥</h3>
  </div>
  <div>
    <input type="text" bind:value={firstname} placeholder="Your first name" class="lg-input" />
  </div>
  <div>
    <input type="text" bind:value={lastname} placeholder="Your last name" class="lg-input" />
  </div>
  <div class="flex space-x-1">
    <button
      class="btn"
      on:click={() => {
        if (age > 13) age--;
      }}>-</button
    >
    <input type="number" min="13" max="99" bind:value={age} placeholder="Age" class="lg-input" />
    <button
      class="btn"
      on:click={() => {
        if (age < 99) age++;
      }}>+</button
    >
  </div>
  <div>
    <div class="form-control w-48">
      <label class="label cursor-pointer">
        <span class="label-text">Male</span>
        <input
          on:click={() => {
            setSex("m");
          }}
          type="radio"
          name="sex"
          class="radio checked:bg-red-500"
        />
      </label>
    </div>
    <div class="form-control w-48">
      <label class="label cursor-pointer">
        <span class="label-text">Female</span>
        <input
          on:click={() => {
            setSex("f");
          }}
          type="radio"
          name="sex"
          class="radio checked:bg-blue-500"
        />
      </label>
    </div>
  </div>
  {#if check()}
    <button
      class="btn btn-info"
      on:click={() => {
        saveData();
        goto("/nui/rules");
      }}>next</button
    >
  {/if}
</div>

<style>
  .lg-input {
    @apply text-center input input-ghost w-full max-w-xs outline-none focus:outline-none focus:border-info;
  }
</style>
