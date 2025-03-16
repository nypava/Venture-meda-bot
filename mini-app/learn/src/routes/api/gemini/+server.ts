import { gemini_api_key } from '$env/static/private'; // Securely get API key.
import { json, type RequestHandler } from '@sveltejs/kit';


interface GeminiResponse {
	candidates?: { content?: { parts?: { text?: string }[] } }[];
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { temp_prompt }: { temp_prompt: string } = await request.json();

		if (!temp_prompt || typeof temp_prompt !== 'string') {
			return json({ error: 'Invalid prompt' }, { status: 400 });
		}

		const url: string = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${gemini_api_key}`;

		const requestBody = {
			contents: [{ parts: [{ text: temp_prompt }] }]
		};

		const response: Response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(requestBody)
		});

		if (!response.ok) {
			const errorText = await response.text(); 
			throw new Error(`API Error: ${response.status} - ${errorText}`);
		}

		const data: GeminiResponse = await response.json();
		const aiResponse: string =
			data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';

		return json({ response: aiResponse });
	} catch (error: unknown) {
		console.error('Error:', error);
		return json(
			{ error: (error as Error).message || 'Failed to fetch response from Gemini API' },
			{ status: 500 }
		);
	}
};

