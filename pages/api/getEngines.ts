// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../utils/chatgpt";

interface Option {
    value: string;
    label: string;
}

interface Data  {
  modelOptions: Option[]
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 

  // ask chat gpt
    const models = await openai.listModels().then((res) => res.data.data);
    
  const modelOptions = models.map((model) => ({
    value:model.id,
    label:model.id
  }))

    
  res.status(200).json( {modelOptions} );
}
