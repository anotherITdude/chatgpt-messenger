import openai from "./chatgpt";

interface Props {
  prompt: string;
  model: string;
}

const query = async ({ prompt, model }: Props) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.8,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatAPT is currently not able to answer this - (Error: ${err.message})`
  );
    
    return res;
};

export default query;
