import { bot_token } from "$env/static/private";
import { url } from "$env/static/private";
import { json } from "@sveltejs/kit";

export async function POST({ request }: { request: Request }) {
  const data = await request.json();

  return await sendTelegramMessage(data.photo, data.caption, data.chat_id);
}

async function sendTelegramMessage(photo: string, caption: string, chat_id: string) {
  try {
    const telegram_url = `https://api.telegram.org/bot${bot_token}/sendPhoto`;

    const formData = new FormData();
    formData.append('chat_id', chat_id);
    formData.append('photo', photo);
    formData.append('caption', caption);
    formData.append('parse_mode', "HTML");
    formData.append("reply_markup", JSON.stringify({
      inline_keyboard: [
        [
          {
            text: '✏️ Edit',
            web_app: {
              url: `${url}/register`,
            }
          },
        ],
        [
          {
            text: "✅ Done",
            callback_data: "done",
          },
        ]
      ]
    }));

    const response = await fetch(telegram_url, {
      method: "POST",
      body: formData,
    });

    const json_data = await response.json();
    if (!response.ok) {
      console.error("Telegram API error:", json_data);
      return json({ success: "false", error: json_data });
    }

    return json({ success: "true", result: JSON.stringify(json_data) });
  } catch (e) {
    console.error("Error sending Telegram message:", e);
    return json({ success: "false", error: e.message || e });
  }
}
