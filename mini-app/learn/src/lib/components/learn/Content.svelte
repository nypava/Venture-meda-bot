<script lang="ts">
  import Card from "$lib/components/ui/card/card.svelte";
  import ChapterSection from "$lib/components/ChapterSection.svelte";
  import * as Sheet from "$lib/components/ui/sheet";
  import * as Accordion from "$lib/components/ui/accordion";
  import { courses_data, current_course } from "$lib/store.svelte";
  import { type ICourses } from  "$lib/types/store"
  import SvelteMarkdown from 'svelte-markdown';
  import { findNextLesson, transformLessonDetailsToObject} from "$lib/helpers/objectManipulation"

  let data = courses_data.courses as ICourses;
  
  let messages = $state([
    { text: "Hey, how can I assist you today?", sender: "bot" },
  ]);

  let prompt: string = $state("");;
  let temp_prompt: string = $state("");

  let MarkdownContent = $state();
  
  function nextButtonHandler() {
    current_course.course =  findNextLesson(data["lessons"], current_course.course["chapter_title"])
  }

  async function sendToGemini() {
    messages.push({ text: prompt, sender: "user" }); 

    temp_prompt = prompt;
    prompt = "";
		const res = await fetch('/api/gemini', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ temp_prompt })
		});

    prompt = "";

		const data = await res.json();

    messages.push({ text: data.response, sender: "bot" }); 
  }  

  $effect(()=> {
    MarkdownContent = null;
    import(/* @vite-ignore */ current_course.course["dir"]).then((module) => {
      MarkdownContent = module.default;
    })
  })
  </script>

<div>
    <Card class="flex justify-between h-12 border-0 rounded-[0] items-center px-4" >
        <Sheet.Root>
          <Sheet.Trigger>
              <img class="w-5 h-5" src="/menu.svg" alt="">
          </Sheet.Trigger>
          <Sheet.Content side="left">
              <div class="mt-3">
                  <ChapterSection course_data={data["lessons"]}/>
              </div>
          </Sheet.Content>
        </Sheet.Root>
        <button onclick={() => {nextButtonHandler()}} class="flex justify-center items-center gap-1">
            <p class="text-[14px] text-lightgrey mr-[2px]">Next</p>
            <img class="w-3 h-3" src="/next.svg" alt="">
        </button>
    </Card>
</div>

<div class="m-4">
    <div>
        <p class="font-bold"> {current_course.course["chapter_title"]} </p>
    </div>
    <div class="flex justify-between">
        <div>
            <p class="font-light text-sm pt-[1px]"> {current_course.course["title"]}</p>
        </div>
        <div class="flex justify-center items-center">
            <img class="w-3 h-3 mr-1" src="/time.svg" alt="">
            <p class="text-xs font-normal"> {current_course.course["time"]} </p>
        </div>
    </div>
</div>

<Card class="flex justify-between border-0 rounded-[0] items-center px-3 py-2">
  <div>
    <div class="flex justify-center">
      <div class="prose prose-ol:my-[5px] prose-ul:my-[5px]  prose-headings:my-1 prose-headings:text-lg text-tg-text text-sm prose-p:my-1 prose-li:m-0 prose-code:m-0 p-3 prose-headings:text-tg-text prose-strong:text-tg-text">
        <MarkdownContent/>
      </div>
    </div> 
  </div>
</Card>

<div>
  <Card class="pl-4 pr-4 rounded-[0] outline-0 border-0 mt-5 py-2">
    <Accordion.Root>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Ask AI</Accordion.Trigger>
        <Accordion.Content>
          <div class="w-full max-w-md mx-auto rounded-lg py-2 ">
            {#each messages as message}
              <div class="flex mb-2 {message.sender === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="{message.sender === 'user' ? 'bg-[#2D4561] text-white' : 'bg-[#27323F] text-gray-300'} px-4 py-2 rounded-[5px] max-w-[80%]">
                  <div class="prose prose-ol:my-[5px] prose-ul:my-[5px]  prose-headings:my-1 prose-headings:text-lg text-tg-text text-sm prose-p:m-1 prose-li:m-0 prose-code:m-0 prose-headings:text-tg-text prose-strong:text-tg-text">
                    <SvelteMarkdown source={message.text} ></SvelteMarkdown>
                  </div>
                </div>
              </div>
            {/each}

            <div class="flex mt-4 items-center">
              <input type="text" bind:value={prompt} class="bg-background px-3 py-[8px] rounded outline-none flex-1" placeholder="Message">
              <button class="p-2" onclick={() => {sendToGemini()}}>
                <img src="/send.svg" alt="">
              </button>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </Card>
</div>

<style>
</style>
