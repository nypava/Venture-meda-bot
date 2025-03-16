<script lang="ts">
  import { learn, courses_data } from "$lib/store.svelte";
  import Content from "$lib/components/learn/Content.svelte";
  import Entry from "$lib/components/learn/Entry.svelte";
	import type { PageProps } from './$types';

  let { data }: PageProps = $props()
  courses_data.courses = data;

</script>


{#if !learn.active}
  <Entry/>
{:else}
  <Content/>
{/if} 
