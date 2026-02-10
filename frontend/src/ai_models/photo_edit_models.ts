const photo_edit_models = [
  {
    title: 'ChronoEdit',
    model_id: 'kayte0342/chronoedit',
    hf_url: 'https://huggingface.co/kayte0342/chronoedit',
    params_text: '14B',
    desc: 'General-purpose photo editing model for prompt-based edits and transformations.',
    imgs: [
      { src: '', prompt: 'Before: -' },
      { src: '', prompt: 'After: -' },
    ]
  },
  {
    title: 'Qwen Image Edit (4-bit)',
    model_id: 'ovedrive/Qwen-Image-Edit-2511-4bit',
    hf_url: 'https://huggingface.co/ovedrive/Qwen-Image-Edit-2511-4bit',
    params_text: '20B',
    desc: 'Prompt-driven image editor (quantized) for practical edits like swaps, relighting, and object-level changes.',
    imgs: [
      { src: '/image_models/qwen_image_edit/sample.png', prompt: 'Before: Give the girl blue hair and a blue dress.' },
      { src: '/image_models/qwen_image_edit/output.png', prompt: 'After: Give the girl blue hair and a blue dress.' },
    ]
  },
  {
    title: 'RMBG 1.4 (Background Removal)',
    model_id: 'briaai/RMBG-1.4',
    hf_url: 'https://huggingface.co/briaai/RMBG-1.4',
    params_text: '0.044B',
    desc: 'Fast background removal / matting model for clean cutouts and transparent PNG outputs.',
    imgs: [
      { src: '/image_models/rmbg/image_0077.jpg', prompt: 'Lion photo - remove background' },
      { src: '/image_models/rmbg/output_image_0077.png', prompt: 'Lion photo - remove background' },
      { src: '/image_models/rmbg/image_0027.jpg', prompt: 'Person by beach - remove background' },
      { src: '/image_models/rmbg/output_image_0027.png', prompt: 'Person by beach - remove background' },
      { src: '/image_models/rmbg/image_0004.jpg', prompt: 'Women reading book - remove background' },
      { src: '/image_models/rmbg/output_image_0004.png', prompt: 'Women reading book - remove background' },
    ]
  }
]

export default photo_edit_models
