const {Configuration, OpenAIApi} = require("openai");
require("dotenv").config();
const TOKEN = process.env.OPENAI_TOKEN;

const configuration = new Configuration({
    apiKey: TOKEN
});
const openai = new OpenAIApi(configuration);

async function ask(prompt) {
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        max_tokens: 256,
        prompt
    });

    return response.data.choices[0].text;
}

module.exports = {
    ask
}
