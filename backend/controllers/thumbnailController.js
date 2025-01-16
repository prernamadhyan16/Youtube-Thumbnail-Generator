import axios from 'axios';
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();

const REPLICATE_API_URL = "https://api.replicate.com/v1/predictions";
const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;

// Multer setup for handling image uploads
const upload = multer({ storage: multer.memoryStorage() });

export const generateThumbnails = async (req, res) => {
  try {
    // Handle multipart/form-data
    upload.fields([{ name: 'image', maxCount: 1 }, { name: 'template', maxCount: 1 }])(req, res, async (err) => {
      if (err) {
        console.error('Multer error:', err.message);
        return res.status(500).json({ error: 'Failed to process uploaded files.' });
      }

      const { text } = req.body;
      const image = req.files?.image?.[0];
      const template = req.files?.template?.[0];

      // Validate inputs
      if (!text || !image || !template) {
        return res.status(400).json({ error: 'Missing required fields: text, image, or template.' });
      }

      // Convert both image and template to Base64
      const imageBase64 = image.buffer.toString('base64');
      const templateBase64 = template.buffer.toString('base64');

      // Replicate API payload
      const apiPayload = {
        version: "fofr/expression-editor",
        input: {
          main_image: imageBase64,  // Main image
          template_image: templateBase64, // Template image
          text: text,  // The text to overlay
          position: "center",  // Center text on the image
          font_size: 24,       // Customize font size
          text_color: "#FFFFFF" // Customize font color
        },
      };

      // Send request to Replicate API
      const response = await axios.post(
        REPLICATE_API_URL,
        apiPayload,
        {
          headers: {
            Authorization: `token ${REPLICATE_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Extract the generated images from the response
      const generatedThumbnails = response.data.output;

      if (generatedThumbnails && generatedThumbnails.length > 0) {
        // Send the thumbnails back to the frontend
        res.status(200).json({ thumbnails: generatedThumbnails });
      } else {
        throw new Error('No thumbnails generated from Replicate API.');
      }
    });
  } catch (error) {
    console.error('Error calling Replicate API:', error.message);
    res.status(500).json({ error: 'Failed to generate thumbnails.' });
  }
};
