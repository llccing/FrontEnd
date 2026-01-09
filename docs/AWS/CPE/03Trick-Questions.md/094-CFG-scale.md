A company is using Retrieval Augmented Generation （RAG） with Amazon 
Bedrock and Stable Diffusion to generate product images based on text descriptions. 
The results are often random and lack specific details. The company wants to 
increase the specificity of the generated images Which solution meets these 
requirements? 
A.Increase the number of generation steps. 
B.Use the MASK_IMAGE_BLACK mask source option. 
C.Increase the classifier-free guidance （CFG） scale. 
D.Increase the prompt strength. 

The correct answer is C. Increase the classifier-free guidance (CFG) scale.

In generative AI models like Stable Diffusion (available via Amazon Bedrock), the CFG scale (or Guidance Scale) is the primary parameter used to control the trade-off between the model’s "creativity" and its "adherence to the prompt."

How the CFG Scale Works

The CFG scale determines how much weight the model gives to your text description during the image generation process.

- Low CFG Scale (e.g., 1–6): The model has more creative freedom. It may ignore parts of your prompt, leading to images that are more "random" or artistic but lack specific details requested.

- High CFG Scale (e.g., 7–15): The model is forced to follow the text prompt more strictly. Increasing this value is the direct solution for a company that wants to ensure the specific details in their text description (like product features or colors) are accurately reflected in the output.

- Extremely High CFG Scale (>15): While this makes the model follow the prompt very closely, it can sometimes lead to "burnt" or overly saturated images with artifacts.

Why the other options are incorrect:

Option,Reason
A. Increase generation steps,"Increasing steps (e.g., from 30 to 50) improves the visual quality and sharpness of the image by giving the model more time to denoise. However, if the CFG scale is low, the model will simply produce a ""higher quality"" version of a random image."

B. Use MASK_IMAGE_BLACK,This is a specific setting for Inpainting (editing a part of an existing image) or Image-to-Image tasks. It defines how the model treats masked areas but does not govern general prompt specificity.

D. Increase the prompt strength,"While ""prompt strength"" sounds similar, it is not a standard global parameter for text-to-image in the Stable Diffusion API. It usually refers to denoising strength in image-to-image tasks, which determines how much the original image is changed."

Pro-Tip for Specificity: Prompt Weighting

If increasing the CFG scale makes the whole image look "over-processed," you can instead use Prompt Weighting. This allows you to tell the model that specific words (e.g., "leather texture") are more important than others without turning up the "dial" for the entire prompt. In Bedrock, this is often done using syntax like (leather texture:1.5).
