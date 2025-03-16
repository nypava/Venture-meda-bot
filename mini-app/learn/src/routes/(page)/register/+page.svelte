<script lang="ts">
  import { Card } from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import * as Select from "$lib/components/ui/select";
  import * as Avatar from "$lib/components/ui/avatar";
  import { onMount } from "svelte";
  import { createTitleObject } from "$lib/helpers/objectManipulation";
  import { createTitleValueObject } from "$lib/helpers/objectManipulation";
  import { countNoneEmptyValues } from "$lib/helpers/objectManipulation";
  import { countRequiredFields } from "$lib/helpers/objectManipulation";
  
  let { data } = $props();
  
  let unsafe_data = $state({});
  let loaded = $state(false);
  let submit = $state(false);
  let registered_user = false;
  let telegram: any;
  
  let values: Record<string, string> = $state(
    createTitleObject(data)
  );
  
  let user_id = $state("");
  
  async function getUserData() {
    const response = await fetch(`/api/user/${user_id}`);
    const data = await response.json();
    console.log(data);
    if (data) {
      values = data.user.info;
      registered_user = true;
    }
  }
  
  async function sendTelegramUpdate() {
    let caption: string = "";
    let title_value_object = createTitleValueObject(data);
  
    Object.keys(title_value_object).forEach((key) => {
      caption += `<b>${title_value_object[key]}</b>: ${values[key]} \n`
    })
  
    console.log(caption);
  
    await fetch(`/api/telegram/send_photo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          "chat_id": user_id,
          "photo": "https://i.imgur.com/lJNlKeO.png",
          "caption": caption
        }
      )
    });
  }
  async function submitFunction() {
    submit = true;
  
    if (countNoneEmptyValues(values) >= countRequiredFields(data)){
      let method = "add";
      if (registered_user){
        method = "update"
      };
      console.log(JSON.stringify(
        {
          "user_id": user_id.toString(),
          "info": JSON.stringify(values)
        }
      )
      )
      await fetch(`/api/user/${method}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          {
            "user_id": user_id.toString(),
            "info": JSON.stringify(values)
          }
        )
      });
      await sendTelegramUpdate();
      telegram.close();
    }
  };
  onMount(() => {
    telegram = Telegram.WebApp;
    unsafe_data = telegram.initDataUnsafe;
    loaded = true;
    telegram.MainButton.setParams({text: 'Submit'});
    telegram.MainButton.onClick(() => submitFunction());
    telegram.MainButton.show();
    telegram.requestContact((t: any) => {t? "": telegram.close()});
    user_id = unsafe_data.user.id;
    getUserData()
  });
</script>

<Card class="h-14 flex items-center justify-between rounded-[0] outline-none border-[0] shadow-none">
  <div class="ml-1">
    <Avatar.Root class="m-3 w-8 h-8">
      <Avatar.Image src="/logo.png" alt="@shadcn" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root>
  </div>
  <div class="flex mr-4 items-center">
    <Avatar.Root class="w-8 h-8">
      {#if loaded}
        <Avatar.Image src={unsafe_data.user.photo_url} alt="@shadcn" />
      {/if}
      <Avatar.Image src="" alt="@shadcn" />
      <Avatar.Fallback>VM</Avatar.Fallback>
    </Avatar.Root>
    <div class="flex-row  pl-2">
      <p class="text-xs">
        {#if loaded}
          {unsafe_data.user.first_name}
        {:else}
          Name
        {/if}
      </p>
      <p class="text-xs">
        {#if loaded}
          @{unsafe_data.user.username}
        {:else}
          Username
        {/if}
      </p>
    </div>
  </div>
</Card>

<div class="mt-2 ml-2 ">
  <p class="text-tg-hint font-light">Profile setup</p>
</div>

{#each Object.keys(data) as label}
  <Card class="flex flex-col rounded-[0] items-center mt-1 pb-7 outline-none border-[0] shadow-none">
    {#each data[label] as item}
      <div class="pt-3">
        <div class="flex flex-row pl-5">
          <p class="pt-2 pb-2 text-sm font-medium"> {item.title} </p>
          {#if item.required}
            <p class="pt-2 pb-2 text-sm font-medium pl-1 text-red-500"> * </p>
          {/if}
        </div>
        {#if item.field == "input"}
          <div class="w-[96vw] flex flex-col items-center">
            <Input bind:value={values[item.value]}
              placeholder="type here"
              class=" rounded w-[90%] {(item.required && submit && !values[item.value]) ? "border-[#C20F0F]": "border-tg-hint"} placeholder-tg-hint"
            > </Input>
            {#if (item.required && submit && !values[item.value])}
              <p class="items-start self-start pl-5 text-[#AE1213] text-xs pt-1">This field is required </p>
            {/if}
          </div>
        {:else if item.field == "select"}
          <div class="w-[96vw] flex justify-center">
            <Select.Root  selected={values[item.value]} onSelectedChange={(v) => {values[item.value] = v?.value }}>
              {#if submit && item.required && !values[item.value]}
                <div class="flex flex-col w-[100%] items-center">
                  <Select.Trigger class="rounded w-[90%] border-[#C20F0F] ">
                    <Select.Value placeholder="select" />
                  </Select.Trigger>

                  <p class="items-start self-start pl-5 text-[#AE1213] text-xs pt-1">This field is required </p>
                </div>
              {:else}
                <Select.Trigger class="rounded w-[90%]">
                  <Select.Value placeholder="select" />
                </Select.Trigger>
              {/if}
              <Select.Content class="border-tg-hint rounded">
                {#if item.options}
                  {#each item.options as option}
                    <Select.Item value={option.name}>{option.name}   </Select.Item>
                  {/each}
                {/if}
              </Select.Content>
            </Select.Root>
          </div>
        {/if}
      </div>
    {/each}
  </Card>
  <div class="p-1">
  </div>
{/each}

<style>
</style>
