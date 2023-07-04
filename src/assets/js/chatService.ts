import axios from 'axios';

const apiUrl = 'https://api.openai.com/v1/chat/completions';

export async function sendMessage(message: string) {
    try {
        const response = await axios.post(apiUrl, {
            prompt: message,
            model: "gpt-3.5-turbo",
        }, {
            headers: {
                'Authorization': 'Bearer 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', // Replace YOUR_API_KEY with your actual API key
                'Content-Type': 'application/json',
            },
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error sending message to ChatGPT:', error);
        throw error;
    }
}