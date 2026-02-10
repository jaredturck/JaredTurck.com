const semantic_search_models = [
  {
    title: 'all-MiniLM-L6-v2',
    model_id: 'sentence-transformers/all-MiniLM-L6-v2',
    hf_url: 'https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2',
    params_text: '0.0227B',
    desc: 'Small, fast embedding model for semantic text search over docs, notes, or FAQs.',
    query: 'Find docs about: "how to add pagination to an API endpoint"'
  },
  {
    title: 'ColBERTv2.0',
    model_id: 'colbert-ir/colbertv2.0',
    hf_url: 'https://huggingface.co/colbert-ir/colbertv2.0',
    params_text: '0.1B',
    desc: 'Late-interaction retrieval model that can improve relevance on longer documents and tricky queries.',
    query: 'Search: "dense retrieval vs BM25 differences and when to use each"'
  },
  {
    title: 'all-mpnet-base-v2',
    model_id: 'sentence-transformers/all-mpnet-base-v2',
    hf_url: 'https://huggingface.co/sentence-transformers/all-mpnet-base-v2',
    params_text: '0.11B',
    desc: 'Stronger embedding baseline for semantic search; typically more accurate than MiniLM at higher cost.',
    query: 'Find: "vite react router 404 on refresh fix"'
  },
  {
    title: 'CLIP ViT-B/32',
    model_id: 'openai/clip-vit-base-patch32',
    hf_url: 'https://huggingface.co/openai/clip-vit-base-patch32',
    params_text: '0.151B',
    desc: 'Text↔image embedding model for searching images by text or finding similar images in a dataset.',
    query: 'Find images matching: "a tabby cat sitting on a laptop keyboard"'
  }
]

export default semantic_search_models
