const video_generation_models = [
  {
    title: 'SkyReels V2 DF (540p)',
    model_id: 'Skywork/SkyReels-V2-DF-1.3B-540P-Diffusers',
    hf_url: 'https://huggingface.co/Skywork/SkyReels-V2-DF-1.3B-540P-Diffusers',
    params_text: '1.3B',
    desc: 'Cinematic “film-style” model built for long-form generation via Diffusion Forcing, letting you extend videos well past the usual few-seconds limit. Supports both text-to-video and image-to-video at 540p.',
    videos: [
      { src: '', prompt: '' }
    ]
  },
  {
    title: 'Kandinsky 5 T2V Lite (10s)',
    model_id: 'kandinskylab/Kandinsky-5.0-T2V-Lite-distilled16steps-10s-Diffusers',
    hf_url: 'https://huggingface.co/kandinskylab/Kandinsky-5.0-T2V-Lite-distilled16steps-10s-Diffusers',
    params_text: '2B',
    desc: 'Speed-optimized Kandinsky 5 Lite (2B) distilled to 16 steps for ~10s clips, aiming for strong quality-per-compute and fast iterations. Especially handy if you want good prompt understanding (English/Russian) without jumping to huge models.',
    videos: [
      { src: '', prompt: '' }
    ]
  },
  {
    title: 'NVIDIA Cosmos Predict2 (Video2World)',
    model_id: 'nvidia/Cosmos-Predict2-2B-Video2World',
    hf_url: 'https://huggingface.co/nvidia/Cosmos-Predict2-2B-Video2World',
    params_text: '2B',
    desc: 'Physics-aware “world prediction” model: given a prompt plus a starting frame (image or short video), it forecasts future frames into a coherent 5-second scene. Best suited for realistic motion, simulation/synthetic data, and physical-AI style workflows (heavier GPU demands).',
    videos: [
      { src: '', prompt: '' }
    ]
  },
  {
    title: 'Allegro',
    model_id: 'rhymes-ai/Allegro',
    hf_url: 'https://huggingface.co/rhymes-ai/Allegro',
    params_text: '2.98B',
    desc: 'Efficient short-clip generator (6s @ 15fps) that targets crisp 720×1280 output, with a 2.8B VideoDiT + 175M VideoVAE setup. A nice pick for portrait-format/social-style clips and quick iteration—can run around ~10GB VRAM with CPU offload.',
    videos: [
      { src: '', prompt: '' }
    ]
  },
  {
    title: 'CogVideoX',
    model_id: 'THUDM/CogVideoX-5b',
    hf_url: 'https://huggingface.co/THUDM/CogVideoX-5b',
    params_text: '5B',
    desc: 'General-purpose 5B diffusion transformer tuned for longer, more temporally consistent videos, using a 3D causal VAE to reduce flicker. Good “all-rounder” choice when you want higher fidelity motion, with practical VRAM-saving options (tiling/quantization).',
    videos: [
      { src: '', prompt: '' }
    ]
  },
  {
    title: 'HunyuanVideo (720p)',
    model_id: 'hunyuanvideo-community/HunyuanVideo-1.5-Diffusers-720p_t2v',
    hf_url: 'https://huggingface.co/hunyuanvideo-community/HunyuanVideo-1.5-Diffusers-720p_t2v',
    params_text: '8.3B',
    desc: 'Tencent’s lightweight-but-punchy 8.3B model aiming for state-of-the-art visual quality and motion coherence at consumer-friendly cost. This 720p Diffusers checkpoint is a strong middle-ground when you want sharper detail without going ultra-huge.',
    videos: [
      { src: '', prompt: '' }
    ]
  },
  {
    title: 'Kandinsky 5 T2V Pro (distilled 5s)',
    model_id: 'kandinskylab/Kandinsky-5.0-T2V-Pro-distilled-5s-Diffusers',
    hf_url: 'https://huggingface.co/kandinskylab/Kandinsky-5.0-T2V-Pro-distilled-5s-Diffusers',
    params_text: '19B',
    desc: 'Kandinsky 5 Pro (19B) for HD, cinematic generations with controllable camera motion, using a distilled setup to generate 5-second clips in far fewer steps. The move when you want a “Pro look” but need faster turnaround than full SFT.',
    videos: [
      { src: '', prompt: '' }
    ]
  },
  {
    title: 'Kandinsky 5 T2V Pro (sft 5s)',
    model_id: 'kandinskylab/Kandinsky-5.0-T2V-Pro-sft-5s-Diffusers',
    hf_url: 'https://huggingface.co/kandinskylab/Kandinsky-5.0-T2V-Pro-sft-5s-Diffusers',
    params_text: '19B',
    desc: 'Top-quality Kandinsky 5 Pro SFT checkpoint (19B) aimed at maximum fidelity and prompt adherence (English/Russian), with controllable camera motion. Heavier and slower than distilled, but the go-to for best-looking 5-second results.',
    videos: [
      { src: '', prompt: '' }
    ]
  }
]

export default video_generation_models
