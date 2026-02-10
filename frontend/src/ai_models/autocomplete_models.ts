const autocomplete_models = [
  {
    title: 'BERT Base Uncased',
    model_id: 'bert-base-uncased',
    hf_url: 'https://huggingface.co/bert-base-uncased',
    params_text: '0.11B',
    desc: 'Classic fill-mask / autocomplete baseline. Great for fast “missing word” completion and lightweight NLP prototypes.',
    prompt: 'Hello I\'m a [MASK] model.',
    output: 'Top prediction: "language"\nCompleted: Hello I\'m a language model.'
  },
  {
    title: 'ELECTRA Base Discriminator',
    model_id: 'google/electra-base-discriminator',
    hf_url: 'https://huggingface.co/google/electra-base-discriminator',
    params_text: '0.11B',
    desc: 'Token plausibility checker: scores whether a word looks “replaced”. Useful for autocomplete-style ranking and spotting odd tokens.',
    prompt: 'Hello I\'m a [MASK] model.',
    output: 'Candidate ranking idea:\n- language (most plausible)\n- neural\n- transformer\n\n(With ELECTRA-discriminator you typically score candidates rather than directly generate the mask token.)'
  },
  {
    title: 'RoBERTa Base',
    model_id: 'roberta-base',
    hf_url: 'https://huggingface.co/roberta-base',
    params_text: '0.125B',
    desc: 'Strong BERT-style masked-token model; a popular default for fill-mask and “autocomplete” style completions.',
    prompt: 'Hello I\'m a <mask> model.',
    output: 'Top prediction: "language"\nCompleted: Hello I\'m a language model.'
  }
]

export default autocomplete_models
