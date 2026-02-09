const image_generation_models = [
  {
    title: 'PixArt Sigma XL (1024 MS)',
    model_id: 'PixArt-alpha/PixArt-Sigma-XL-2-1024-MS',
    hf_url: 'https://huggingface.co/PixArt-alpha/PixArt-Sigma-XL-2-1024-MS',
    params_text: '0.611B',
    desc: 'Transformer-based latent diffusion (PixArt-Σ) designed for high-res text-to-image generation, including 1024px outputs and beyond.',
    prompt: 'PLACEHOLDER',
    imgs: [
      { src: '/image_models/PixArt_alpha/output_1770676558.png', prompt: 'Anime girl walking her dog at the park.' },
      { src: '/image_models/PixArt_alpha/output_1770676659.png', prompt: 'Cat walking on the moon.' },
      { src: '/image_models/PixArt_alpha/output_1770676872.png', prompt: 'Beautiful garden with flowers and trees.' },
      { src: '/image_models/PixArt_alpha/output_1770677863.png', prompt: 'Tokyo at night, cyberpunk style, neon lights, futuristic, robots.' },
    ]
  },
  {
    title: 'Anima',
    model_id: 'circlestone-labs/Anima',
    hf_url: 'https://huggingface.co/circlestone-labs/Anima',
    params_text: '2B',
    desc: 'A 2B text-to-image model focused on anime concepts, characters, and non-photorealistic illustration styles (not aimed at realism).',
    prompt: 'PLACEHOLDER',
    imgs: [
      'https://placehold.co/1400x900?text=Anima+PLACEHOLDER+1',
      'https://placehold.co/1400x900?text=Anima+PLACEHOLDER+2',
      'https://placehold.co/1400x900?text=Anima+PLACEHOLDER+3'
    ]
  },
  {
    title: 'Kandinsky 5.0 T2I Lite (SFT, Diffusers)',
    model_id: 'kandinskylab/Kandinsky-5.0-T2I-Lite-sft-Diffusers',
    hf_url: 'https://huggingface.co/kandinskylab/Kandinsky-5.0-T2I-Lite-sft-Diffusers',
    params_text: '6B',
    desc: 'Lightweight Kandinsky 5.0 text-to-image model targeting ~1K resolution, with strong text rendering and good Russian prompt understanding.',
    prompt: 'PLACEHOLDER',
    imgs: [
      'https://placehold.co/1400x900?text=Kandinsky+5.0+PLACEHOLDER+1',
      'https://placehold.co/1400x900?text=Kandinsky+5.0+PLACEHOLDER+2',
      'https://placehold.co/1400x900?text=Kandinsky+5.0+PLACEHOLDER+3'
    ]
  },
  {
    title: 'Z-Image Turbo',
    model_id: 'Tongyi-MAI/Z-Image-Turbo',
    hf_url: 'https://huggingface.co/Tongyi-MAI/Z-Image-Turbo',
    params_text: '6B',
    desc: 'Distilled Z-Image variant built for speed (low NFE inference), aimed at strong prompt adherence, photorealism, and bilingual (EN/ZH) text rendering.',
    prompt: 'PLACEHOLDER',
    imgs: [
      'https://placehold.co/1400x900?text=Z-Image-Turbo+PLACEHOLDER+1',
      'https://placehold.co/1400x900?text=Z-Image-Turbo+PLACEHOLDER+2',
      'https://placehold.co/1400x900?text=Z-Image-Turbo+PLACEHOLDER+3'
    ]
  },
  {
    title: 'Stable Diffusion 3.5 Large',
    model_id: 'stabilityai/stable-diffusion-3.5-large',
    hf_url: 'https://huggingface.co/stabilityai/stable-diffusion-3.5-large',
    params_text: '8.1B',
    desc: 'Stability AI’s MMDiT-based text-to-image model focused on higher image quality, better typography, and improved complex prompt understanding.',
    prompt: 'PLACEHOLDER',
    imgs: [
      'https://placehold.co/1400x900?text=SD+3.5+Large+PLACEHOLDER+1',
      'https://placehold.co/1400x900?text=SD+3.5+Large+PLACEHOLDER+2',
      'https://placehold.co/1400x900?text=SD+3.5+Large+PLACEHOLDER+3'
    ]
  },
  {
    title: 'FLUX.1 [dev]',
    model_id: 'black-forest-labs/FLUX.1-dev',
    hf_url: 'https://huggingface.co/black-forest-labs/FLUX.1-dev',
    params_text: '12B',
    desc: 'A 12B rectified-flow transformer for text-to-image generation (open weights), widely used in Diffusers and ComfyUI workflows.',
    prompt: 'PLACEHOLDER',
    imgs: [
      'https://placehold.co/1400x900?text=FLUX.1+dev+PLACEHOLDER+1',
      'https://placehold.co/1400x900?text=FLUX.1+dev+PLACEHOLDER+2',
      'https://placehold.co/1400x900?text=FLUX.1+dev+PLACEHOLDER+3'
    ]
  },
  {
    title: 'GLM-Image',
    model_id: 'zai-org/GLM-Image',
    hf_url: 'https://huggingface.co/zai-org/GLM-Image',
    params_text: '16B',
    desc: 'Hybrid autoregressive + diffusion image model (9B generator + 7B decoder) designed to excel at text rendering and knowledge-dense generation, plus image editing.',
    prompt: 'PLACEHOLDER',
    imgs: [
      'https://placehold.co/1400x900?text=GLM-Image+PLACEHOLDER+1',
      'https://placehold.co/1400x900?text=GLM-Image+PLACEHOLDER+2',
      'https://placehold.co/1400x900?text=GLM-Image+PLACEHOLDER+3'
    ]
  },
  {
    title: 'Qwen-Image',
    model_id: 'Qwen/Qwen-Image',
    hf_url: 'https://huggingface.co/Qwen/Qwen-Image',
    params_text: '20B',
    desc: 'Qwen’s image generation foundation model with a strong emphasis on complex text rendering and precise image editing (notably strong with Chinese text).',
    prompt: 'PLACEHOLDER',
    imgs: [
      'https://placehold.co/1400x900?text=Qwen-Image+PLACEHOLDER+1',
      'https://placehold.co/1400x900?text=Qwen-Image+PLACEHOLDER+2',
      'https://placehold.co/1400x900?text=Qwen-Image+PLACEHOLDER+3'
    ]
  },
  {
    title: 'FLUX.2 [dev]',
    model_id: 'black-forest-labs/FLUX.2-dev',
    hf_url: 'https://huggingface.co/black-forest-labs/FLUX.2-dev',
    params_text: '32B',
    desc: 'A 32B rectified-flow transformer for generating, editing, and combining images directly from text instructions.',
    prompt: 'PLACEHOLDER',
    imgs: [
      'https://placehold.co/1400x900?text=FLUX.2+dev+PLACEHOLDER+1',
      'https://placehold.co/1400x900?text=FLUX.2+dev+PLACEHOLDER+2',
      'https://placehold.co/1400x900?text=FLUX.2+dev+PLACEHOLDER+3'
    ]
  }
]

export default image_generation_models
