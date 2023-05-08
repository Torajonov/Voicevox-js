const openaiApiKey = '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';
const inputText = document.getElementById('input-text');
const submitButton = document.getElementById('submit-button');

openai.api_key = openaiApiKey;

async function chatGptResponse(prompt) {
    const response = await openai.Completion.create({
        engine: 'text-davinci-002',
        prompt: `[Yaponcha]${prompt}`,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.5,
    });

    return response.choices[0].text.trim();
}

function synthesizeTextToSpeech(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja';
    speechSynthesis.speak(utterance);
}

submitButton.addEventListener('click', async () => {
    const input = inputText.value;
    const chatGptOutput = await chatGptResponse(input);
    console.log(`ChatGPT yaponcha javobi: ${chatGptOutput}`);
    synthesizeTextToSpeech(chatGptOutput);
});
