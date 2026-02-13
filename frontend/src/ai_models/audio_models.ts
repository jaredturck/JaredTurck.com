const audio_models = [
  {
    title: 'Stable Audio Open 1.0',
    model_id: 'stabilityai/stable-audio-open-1.0',
    hf_url: 'https://huggingface.co/stabilityai/stable-audio-open-1.0',
    params_text: '1.322B',
    desc: 'Text-to-audio for SFX, music, and short song-style generations.',
    audios: [
      { src: '/audio_models/stable_audio/music_1768854807.wav', prompt: 'Upbeat bass loop.' }
    ]
  },
  {
    title: 'AudioLDM2 Large',
    model_id: 'cvssp/audioldm2-large',
    hf_url: 'https://huggingface.co/cvssp/audioldm2-large',
    params_text: '1.5B',
    desc: 'General audio generation model for SFX and music; great baseline for text-to-audio demos.',
    audios: [
      { src: '/audio_models/audioldm/sfx_1768850067.wav', prompt: 'Women screaming' }
    ]
  },
  {
    title: 'Qwen3 TTS (Voice Clone)',
    model_id: 'Qwen/Qwen3-TTS-12Hz-1.7B-Base',
    hf_url: 'https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-Base',
    params_text: '1.7B',
    desc: 'TTS / voice cloning style model: condition on a voice sample and generate matching speech.',
    audios: [
      { src: '/audio_models/qwen3_tts/1770942807.9589732.wav', prompt: 'Trumps view on border security.' }
    ]
  },
  {
    title: 'Whisper Large v3 (ASR)',
    model_id: 'openai/whisper-large-v3',
    hf_url: 'https://huggingface.co/openai/whisper-large-v3',
    params_text: '2B',
    desc: 'Automatic speech recognition: transcribe speech audio into text.',
    audios: [
      { src: '', prompt: '' }
    ]
  },
  {
    title: 'ACE-Step v1 (Music Gen)',
    model_id: 'ACE-Step/ACE-Step-v1-3.5B',
    hf_url: 'https://huggingface.co/ACE-Step/ACE-Step-v1-3.5B',
    params_text: '3.5B',
    desc: 'Music generation foundation model for coherent, controllable song/instrumental output.',
    audios: [
      { src: '/audio_models/ace_step/output_20260205121608_0.wav', prompt: 'calming music.' }
    ]
  },
  {
    title: 'PersonaPlex (Real-time Speech-to-Speech)',
    model_id: 'nvidia/personaplex-7b-v1',
    hf_url: 'https://huggingface.co/nvidia/personaplex-7b-v1',
    params_text: '7B',
    desc: 'Real-time speech-to-speech conversation model (low-latency, natural turn-taking).',
    audios: [
      { src: '', prompt: '' }
    ]
  }
]

export default audio_models
