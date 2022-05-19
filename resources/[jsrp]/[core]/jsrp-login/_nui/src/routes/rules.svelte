<script>
  import { goto, afterNavigate } from "$app/navigation";
  import { emit, done } from "$lib/jsrp-nui";

  afterNavigate(() => {
    done();
  });
</script>

<div class="bg-gray-900 bg-opacity-80 h-screen flex flex-col justify-center items-center space-y-2">
  <h1 class="mb-40">Rules</h1>
  <div>
    <button
      class="btn"
      on:click={() => {
        goto("/nui/register");
      }}>back</button
    >
    <button
      on:click={() => {
        emit("next", {});
      }}
      class="btn btn-primary">let's go</button
    >
  </div>
</div>
