const llm_models = [
  {
    title: 'Falcon H1 0.5B Instruct',
    model_id: 'tiiuae/Falcon-H1-0.5B-Instruct',
    hf_url: 'https://huggingface.co/tiiuae/Falcon-H1-0.5B-Instruct',
    params_text: '0.5B',
    desc: 'Ultra-small Falcon-H1 instruct model from the hybrid-head (Transformer-SSM) family — great for quick prompt-format and UX experiments.',
    prompt: 'solve for x where 2x = 6',
    output: 'x = 6 / 2\nx = 3'
  },
  {
    title: 'GPT-2 Large',
    model_id: 'openai-community/gpt2-large',
    hf_url: 'https://huggingface.co/openai-community/gpt2-large',
    params_text: '0.774B',
    desc: 'A classic continuation-style baseline that’s still handy for lightweight generation tests and historical comparisons.',
    prompt: 'The cat jumped over the',
    output: 'The cat jumped to the side of the road and ran to the car where the driver, a man in his 50s, was standing. He called the police and the animal was taken to the animal shelter.'
  },
  {
    title: 'LFM2.5 1.2B Instruct',
    model_id: 'LiquidAI/LFM2.5-1.2B-Instruct',
    hf_url: 'https://huggingface.co/LiquidAI/LFM2.5-1.2B-Instruct',
    params_text: '1.17B',
    desc: 'On-device focused hybrid model tuned for fast edge inference and low memory use, aimed at agentic tasks, extraction, and RAG-style workflows.',
    prompt: 'Does does AES work?',
    output: 'Yes, **AES (Advanced Encryption Standard)** works.\nAES is a widely used symmetric encryption algorithm that is considered secure and efficient for protecting data. It was adopted as the standard encryption method by the U.S. National Institute of Standards and Technology (NIST) in 2001.'
  },
  {
    title: 'Command R7B (12-2024)',
    model_id: 'CohereLabs/c4ai-command-r7b-12-2024',
    hf_url: 'https://huggingface.co/CohereLabs/c4ai-command-r7b-12-2024',
    params_text: '7B',
    desc: 'Cohere’s Command R7B research release with 128K context, tuned for enterprise-style tasks like summarisation, QA, RAG, and tool-based agent flows.',
    prompt: 'What is a magic method?',
    output: 'Magic methods are special methods in PHP that are called automatically by PHP for certain events or actions. They are also known as special functions or built-in functions. These methods provide a way to perform specific tasks or behaviors that are not directly available in the language.'
  },
  {
    title: 'Mistral 7B Instruct v0.3',
    model_id: 'mistralai/Mistral-7B-Instruct-v0.3',
    hf_url: 'https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3',
    params_text: '7B',
    desc: 'A refreshed Mistral 7B instruct checkpoint commonly used for chat, structured extraction, and function-calling style outputs.',
    prompt: 'What is the highest rated chess bot?',
    output: 'There are several high-rated chess bots, but the most popular and highly rated ones are:\n1. Stockfish: Stockfish is an open-source chess engine that is highly regarded for its accuracy and speed. It consistently ranks at the top of computer chess tournaments and is used by many chess enthusiasts and professionals.'
  },
  {
    title: 'Falcon H1 7B Instruct',
    model_id: 'tiiuae/Falcon-H1-7B-Instruct',
    hf_url: 'https://huggingface.co/tiiuae/Falcon-H1-7B-Instruct',
    params_text: '7B',
    desc: 'Mid-size Falcon-H1 instruct model from TII’s hybrid-head (Transformer-SSM) family, aimed at strong general reasoning and instruction following.',
    prompt: 'compute ∫_0^∞ sin(x)/x dx',
    output: 'This integral is a well-known result in integral calculus, and WolframAlpha will return the exact value: π/2'
  },
  {
    title: 'Meta Llama 3.1 8B Instruct',
    model_id: 'meta-llama/Meta-Llama-3.1-8B-Instruct',
    hf_url: 'https://huggingface.co/meta-llama/Meta-Llama-3.1-8B-Instruct',
    params_text: '8B',
    desc: 'Instruction-tuned Llama 3.1 8B with long-context support, designed for general assistant chat and summarisation.',
    prompt: 'y = 3x + 2, solve for x',
    output: 'We have an equation with one variable, x. To solve for x, we need to isolate x on one side of the equation.\ny = 3x + 2\nSubtract 2 from both sides of the equation:\ny - 2 = 3x + 2 - 2\ny - 2 = 3x\nDivide both sides of the equation by 3:\n(y - 2) / 3 = 3x / 3\n(y - 2) / 3 = x\nx = (y - 2) / 3'
  },
  {
    title: 'Gemma 2 9B IT',
    model_id: 'google/gemma-2-9b-it',
    hf_url: 'https://huggingface.co/google/gemma-2-9b-it',
    params_text: '9B',
    desc: 'Google’s instruction-tuned Gemma 2 9B variant, built as an efficient open-weight assistant model for general chat and helpfulness tasks.',
    prompt: 'Explain what electricity is in 2 sentences.',
    output: 'Electricity is the flow of electric charge. This charge is typically carried by tiny particles called electrons, which move through a conductor like a wire.'
  },
  {
    title: 'GLM-4 9B Chat',
    model_id: 'zai-org/glm-4-9b-chat-hf',
    hf_url: 'https://huggingface.co/zai-org/glm-4-9b-chat-hf',
    params_text: '9B',
    desc: 'GLM-4 9B chat model with long-context support and explicit support for things like browsing/function-calling/code-execution style workflows.',
    prompt: 'Explain a JavaScript promise in 2 sentences.',
    output: 'A JavaScript promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a sequential, readable manner.'
  },
  {
    title: 'Falcon3 10B Instruct',
    model_id: 'tiiuae/Falcon3-10B-Instruct',
    hf_url: 'https://huggingface.co/tiiuae/Falcon3-10B-Instruct',
    params_text: '10B',
    desc: 'TII’s Falcon3 instruct model, trained with longer context and function-calling style data for general assistant use.',
    prompt: 'Is Password1234 a secure password? Explain in 2 sentences.',
    output: 'Password1234 is not a secure password because it is a commonly used and easily guessable password. It lacks complexity, including a mix of uppercase and lowercase letters, numbers, and special characters, making it vulnerable to brute-force attacks.'
  },
  {
    title: 'OLMo-2 13B Instruct',
    model_id: 'allenai/OLMo-2-1124-13B-Instruct',
    hf_url: 'https://huggingface.co/allenai/OLMo-2-1124-13B-Instruct',
    params_text: '13B',
    desc: 'AllenAI’s OLMo-2 instruct release — a research-friendly, openly documented instruction-following model.',
    prompt: '-',
    output: '-'
  },
  {
    title: 'Phi-4 Reasoning',
    model_id: 'microsoft/Phi-4-reasoning',
    hf_url: 'https://huggingface.co/microsoft/Phi-4-reasoning',
    params_text: '14B',
    desc: 'A Phi-4 variant specifically tuned for reasoning-heavy prompts (math/logic), intended to improve reliability on multi-step problems.',
    prompt: '-',
    output: '-'
  },
  {
    title: 'Qwen2.5 14B Instruct',
    model_id: 'Qwen/Qwen2.5-14B-Instruct',
    hf_url: 'https://huggingface.co/Qwen/Qwen2.5-14B-Instruct',
    params_text: '14B',
    desc: 'Mid-large Qwen2.5 instruct checkpoint with strong general instruction following and long-context support.',
    prompt: '-',
    output: '-'
  },
  {
    title: 'DeepSeek R1 Distill (Qwen) 32B',
    model_id: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-32B',
    hf_url: 'https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B',
    params_text: '33B',
    desc: 'A Qwen-based dense model distilled from DeepSeek-R1, aimed at stronger reasoning behaviour and structured problem solving.',
    prompt: '-',
    output: '-'
  },
  {
    title: 'Qwen2.5 32B Instruct',
    model_id: 'Qwen/Qwen2.5-32B-Instruct',
    hf_url: 'https://huggingface.co/Qwen/Qwen2.5-32B-Instruct',
    params_text: '32B',
    desc: 'Large Qwen2.5 instruct model designed for higher-quality general responses and stronger coding/math at scale.',
    prompt: '-',
    output: '-'
  },
  {
    title: 'Falcon H1 34B Instruct',
    model_id: 'tiiuae/Falcon-H1-34B-Instruct',
    hf_url: 'https://huggingface.co/tiiuae/Falcon-H1-34B-Instruct',
    params_text: '34B',
    desc: 'Flagship Falcon-H1 instruct model from the hybrid-head (Transformer-SSM) family, intended for higher quality long-form and tougher reasoning workloads.',
    prompt: '-',
    output: '-'
  },
  {
    title: 'Qwen3 Coder Next',
    model_id: 'Qwen/Qwen3-Coder-Next',
    hf_url: 'https://huggingface.co/Qwen/Qwen3-Coder-Next',
    params_text: '80B',
    desc: 'Coding-agent focused Qwen model (80B total / ~3B active) with very long context, designed for tool-heavy coding workflows and IDE/CLI integration.',
    prompt: '-',
    output: '-'
  }
]

export default llm_models
