import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const REPLICATE_API_URL = "https://api.replicate.com/v1/predictions";
const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;

export const generateThumbnails = async (req, res) => {
  const { text, template } = req.body;

  try {
    const response = await axios.post(
      REPLICATE_API_URL,
      {
        version: "fofr/expression-editor",
        input: { text, template },
      },
      {
        headers: {
          Authorization: `Token ${REPLICATE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json({ thumbnails: response.data.output });
  } catch (error) {
    console.error('Error calling Replicate API:', error.message);
    res.status(500).json({ error: 'Failed to generate thumbnails.' });
  }
};
