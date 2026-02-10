const image_generation_models = [
  {
    title: 'PixArt Sigma XL (1024 MS)',
    model_id: 'PixArt-alpha/PixArt-Sigma-XL-2-1024-MS',
    hf_url: 'https://huggingface.co/PixArt-alpha/PixArt-Sigma-XL-2-1024-MS',
    params_text: '0.611B',
    desc: 'Transformer-based latent diffusion (PixArt-Σ) designed for high-res text-to-image generation, including 1024px outputs and beyond.',
    prompt: 'PLACEHOLDER',
    imgs: [
      { src: '/image_models/PixArt_alpha/output_1770677863.png', prompt: 'Tokyo at night, cyberpunk style, neon lights, futuristic, robots.' },
      { src: '/image_models/PixArt_alpha/output_1770676558.png', prompt: 'Anime girl walking her dog at the park.' },
      { src: '/image_models/PixArt_alpha/output_1770676659.png', prompt: 'Cat walking on the moon.' },
      { src: '/image_models/PixArt_alpha/output_1770676872.png', prompt: 'Beautiful garden with flowers and trees.' },
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
      { src: '/image_models/Anima/output_1770678982.png', prompt: 'Cute anime cat girl with long blue hair, laying against tree in forest.' },
      { src: '/image_models/Anima/output_1770679143.png', prompt: 'Cute anime cat girl with long blue hair, walking through city at night.' },
      { src: '/image_models/Anima/output_1770679289.png', prompt: 'Cute anime cat girl with long blue hair, sitting on window sill in her apartement.' },
      { src: '/image_models/Anima/output_1770679495.png', prompt: 'Cute anime cat girl with long blue hair, walking through large gardens.' },
      { src: '/image_models/Anima/output_1770679654.png', prompt: 'Cute anime cat girl with long blue hair, leaning over the edge of the bath.' },
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
      { src: '/image_models/Kandinsky/output_1770681870.png', prompt: 'Cat flooting on mars next to rocket, with earth in background.' },
      { src: '/image_models/Kandinsky/output_1769224121.png', prompt: 'A cat with a fancy hat.' },
      { src: '/image_models/Kandinsky/output_1770680930.png', prompt: 'Girl walking dog in public.' },
      { src: '/image_models/Kandinsky/output_1770684271.png', prompt: 'Diver swiming through under water city.' },
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
      { src: '/image_models/z_image_turbo/output_1770685655.png', prompt: 'Dog skateboarding through garden.' },
      { src: '/image_models/z_image_turbo/output_1770686034.png', prompt: 'A mossy castle, with ivy on the walls at sunset.' },
      { src: '/image_models/z_image_turbo/output_1770686265.png', prompt: 'Girl throwing leaves into the air, next to mud hut in forest.' },
      { src: '/image_models/z_image_turbo/output_1770686374.png', prompt: 'Bikers exploring crashed rocket.' },
      { src: '/image_models/z_image_turbo/output_1770686614.png', prompt: 'Couple kissing under tree eating dinner, next to camp fire.' },
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
      { src: '/image_models/stable_diffusion/output_1770689308.png', prompt: 'Motorbike riding through buring building.' },
      { src: '/image_models/stable_diffusion/output_1770689008.png', prompt: 'Girl walking though dark alley way at night' },
      { src: '/image_models/stable_diffusion/output_1770689713.png', prompt: 'Bomb exploding inside ship cabin.' },
      { src: '/image_models/stable_diffusion/output_1770690332.png', prompt: 'Church filled with flowers.' },
      { src: '/image_models/stable_diffusion/output_1770690629.png', prompt: 'Astronaut exploring alien planet with purple sky and two suns.' }
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
      { src: '/image_models/black_forest_flux1/output_1770694524.png', prompt: 'Alien spaceship invading mars.' },
      { src: '/image_models/black_forest_flux1/output_1770693832.png', prompt: 'Grand clock in abandoned building.' },
      { src: '/image_models/black_forest_flux1/output_1770693294.png', prompt: 'Dragon blowing fire onto castle.' },
      { src: '/image_models/black_forest_flux1/output_1770692634.png', prompt: 'Cute puppy on window sill next to plant pot.' },
      { src: '/image_models/black_forest_flux1/output_1768412551.png', prompt: 'Anime girl with blur hair, standing on city street.' }
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
      { src: '/image_models/glm_image/output_1770698369.png', prompt: 'Design a fantasy travel poster for the underwater city of Atlantis featuring glowing coral towers, merfolk markets, and mysterious ancient architecture with readable elegant typography that says "VISIT ATLANTIS" and "Where Legends Live Beneath the Waves", emphasizing imaginative worldbuilding and vibrant artistic storytelling with a cinematic fantasy aesthetic.' },
      { src: '/image_models/glm_image/output_1770699417.png', prompt: 'Create a cinematic first-person POV scene of someone walking through a bustling futuristic city on Mars with red dust in the air and advanced architecture, focusing on a glowing street sign in the foreground with clearly readable text saying "WELCOME TO NEW ARES DISTRICT" written in stylized Martian glyphs alongside English translation, emphasizing immersive realism, imaginative sci-fi design, and natural environmental storytelling.'},
      { src: '/image_models/glm_image/output_1770698606.png', prompt: 'Illustrate a whimsical storybook scene of floating islands and dragons soaring through magical skies with a decorative title reading "The Skybound Kingdom" and short readable story text saying "Above the clouds lies a world untouched by gravity where dragons guard ancient secrets", rendered like a richly detailed illustrated fantasy novel page.' },
      { src: '/image_models/glm_image/output_1770698874.png', prompt: 'Create a futuristic museum exhibit poster about artificial intelligence evolution showing robots, holograms, and a timeline across eras with bold text saying "THE AGE OF THINKING MACHINES" and smaller captions like "From Vacuum Tubes to Synthetic Minds", designed as a creative sci-fi infographic blending imaginative visuals with clean modern typography.' },
      { src: '/image_models/glm_image/output_1770699217.png', prompt: 'Generate a cinematic interstellar cruise advertisement featuring a massive spaceship traveling through colorful nebulae with readable promotional text including "STARLINE CRUISES" and "Your Journey Beyond Infinity Begins Here", styled like a luxury space tourism poster that balances imaginative science fiction visuals with strong graphic design.' }
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
      { src: '/image_models/qwen_image/output_1770701801.png', prompt: 'Anime girl sitting on park bench, reading a book, the books title is "Amazing plants and where to find them"' }
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
      { src: '/image_models/black_forest_flux2/flux2_output_1769298330.png', prompt: 'A fantasy landscape with mountains, rivers, and a castle in the background, vibrant colors, highly detailed.' },
      { src: '/image_models/black_forest_flux2/flux2_output_1770596011.png', prompt: 'Anime girl with blue hair, sitting on park bench under blossom tree.' }
    ]
  }
]

export default image_generation_models
