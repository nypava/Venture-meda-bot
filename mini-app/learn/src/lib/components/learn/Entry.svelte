<script lang="ts">
  import ChapterSection from "$lib/components/ChapterSection.svelte";
  import { Card } from "$lib/components/ui/card";
  import * as Accordion from "$lib/components/ui/accordion";
  import { courses_data } from "$lib/store.svelte";
  import { type ICourses } from  "$lib/types/store"

  let data = courses_data.courses as ICourses;
  
</script>  

<div>
    <img class="w-[100%]" src="{data["cover_image"]}" alt="">
  </div>
  <div class="m-4">
    <p class="font-semibold text-base">{data["title"]}</p>
    <div class="flex justify-between mt-2 px-1">
      <div class="text-xs flex gap-2 mr-3">
        <img class="w-4 h-4" src="/enroll.svg" alt=""> 
        <p>100 enrolled</p>
      </div>
      <div class="text-xs flex gap-2 justify-center">
        <img class="w-[14px] h-[14px]" src="/time.svg" alt=""> 
        <p>{data["time"]}</p>
      </div>
    </div>
  </div>

  <div class="flex justify-center mt-5">
    <Card class="outline-0 border-0 w-[95%] rounded-xl px-5 py-2 shadow-[0]">
      <ChapterSection course_data={data["lessons"]}/>
    </Card>
  </div>

  <div class="mb-5">
    <Card class="pl-4 pr-4 rounded-[0] outline-0 border-0 mt-5 py-2 shadow-[0]">
      <Accordion.Root>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>About</Accordion.Trigger>
          <Accordion.Content>
            <div>
              {data["about"]}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Card>
  </div>

