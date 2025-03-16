<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion";
    import { learn, current_course } from "$lib/store.svelte.js";
    import { transformLessonDetailsToObject } from "$lib/helpers/objectManipulation";

    let { course_data } = $props();
      
    function changeContent(course: string) {
      console.log(course_data, course, "change contente is clicked")
      current_course.course = transformLessonDetailsToObject(course_data)[course]
      learn.active = true;
    };

</script>

{#each Object.keys(course_data) as chapter}
  <Accordion.Root class="p-0 m-0">
    <Accordion.Item value="item-1">
      <Accordion.Trigger>
        <div class="flex flex-col items-start">
          <p class="font-semibold text-[14px] break-all"> {chapter} </p>
          <p class="text-lightgrey font-normal text-[14px]"> {Object.keys(course_data[chapter]).length} lessons</p>
        </div>
      </Accordion.Trigger>
      <Accordion.Content>
        <div class="flex flex-col gap-1 justify-start">
          {#each Object.keys(course_data[chapter]) as lesson}
            <button class="flex pl-4 justify-start items-start text-left" onclick={() => changeContent(lesson)}>
              <img class="w-4 h-4 mt-2" src="/book.svg" alt="">
              <p class="pl-2 flex-1 text-wrap break-all p-1">{lesson}</p>
              <p class="ml-auto text-lightgrey">{course_data[chapter][lesson]["time"]}</p>
            </button>
          {/each}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
{/each}

<style>
</style>
