const upscaler_models = [
  {
    title: 'Real-ESRGAN',
    model_id: 'xinntao/Real-ESRGAN',
    hf_url: 'https://huggingface.co/xinntao/Real-ESRGAN',
    params_text: '0.0167B',
    desc: 'Classic super-resolution upscaler for sharper details and cleaner edges (great general-purpose baseline).',
    imgs: [
      { src: '/image_models/esrgan/image_0100.jpg', prompt: 'Before - Flowers' },
      { src: '/image_models/esrgan/output_image_0100.jpg', prompt: 'After - Flowers' },
      { src: '/image_models/esrgan/image_0045.jpg', prompt: 'Before - Car' },
      { src: '/image_models/esrgan/output_image_0045.jpg', prompt: 'After - Car' },
      { src: '/image_models/esrgan/image_0004.jpg', prompt: 'Before - Women reading' },
      { src: '/image_models/esrgan/output_image_0004.jpg', prompt: 'After - Women reading' },
    ]
  },
  {
    title: 'Stable Diffusion x4 Upscaler',
    model_id: 'stabilityai/stable-diffusion-x4-upscaler',
    hf_url: 'https://huggingface.co/stabilityai/stable-diffusion-x4-upscaler',
    params_text: '0.473B',
    desc: 'Diffusion-based x4 upscaler that can add detail while upscaling (more “creative” than ESRGAN).',
    imgs: [
      { src: '/image_models/x4_upscaler/image_0100.jpg', prompt: 'Before - Flowers' },
      { src: '/image_models/x4_upscaler/output_image_0100.png', prompt: 'After - Flowers' },
      { src: '/image_models/x4_upscaler/image_0045.jpg', prompt: 'Before - Car' },
      { src: '/image_models/x4_upscaler/output_image_0045.png', prompt: 'After - Car' },
      { src: '/image_models/x4_upscaler/image_0004.jpg', prompt: 'Before - Women reading' },
      { src: '/image_models/x4_upscaler/output_image_0004.png', prompt: 'After - Women reading' },
    ]
  }
]

export default upscaler_models
