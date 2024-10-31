import { Box, Link, Typography } from "@mui/joy";

const About = () => {
  return (
    <Box sx={{ px: { xs: '15px', md: '50px', lg: '50px' } }}>

      <Typography level='h1' sx={{ mb: 1, mt: 8 }}>
        What are word embeddings?
      </Typography>
      <Box sx={{ mt: 2 }}>
        <img
          src='/graph.png'
          alt="Image of a graph with three axes and word vectors."
          style={{ maxWidth: '500px', width: '100%', display: 'block', margin: '0 auto' }}
        />
        <Typography level='body-xs' sx={{ mb: 8, mt: 1 }}>
          I do not own this image. Credit to <Link href='https://www.youtube.com/shorts/FJtFZwbvkI4' target='_blank'>3blue1brown</Link>.
        </Typography>
      </Box>


      <Typography level='body-md' sx={{ mb: 1 }}>
        <Link href='https://www.ibm.com/topics/neural-networks' target='_blank'>Neural networks</Link>, which are machine learning architectures used to power many of the AI applications we use today, require data to be in a numerical format. However, words are not numerical. Word embeddings are a way to convert words into numerical vectors. These vectors can then be used as input to a neural network.
      </Typography>
      <Typography level='title-lg' sx={{ mb: 1, mt: 3 }}>
        One-Hot Encoding
      </Typography>
      <Typography level='body-md' sx={{ mb: 1 }}>
        The simplest way to do this is <Link href='https://machinelearningmastery.com/why-one-hot-encode-data-in-machine-learning/' target='_blank'>One-Hot Encoding</Link>, whereby you create vectors with as many cells as there are words in your vocabulary. Each cell is set to 0, except for the cell corresponding to the word you are encoding, which is set to 1. This isn't great as it is a very sparse representation, uses a lot of memory and does not capture the relationships between words.
      </Typography>
      <Typography level='title-lg' sx={{ mb: 1, mt: 3 }}>
        Word Embeddings
      </Typography>
      <Typography level='body-md' sx={{ mb: 1 }}>
        Word embeddings are an improved type of word representation that allows words with similar meaning to have similar representations (dense vectors). This is useful because it allows the neural network to learn the relationships between words. For example, in a word embedding space, the vectors for "king" and "queen" will be closer together than the vectors for "king" and "dog".
      </Typography>
      <Typography level='body-md' sx={{ mb: 1 }}>
        This allows us to perform some operations like addition and subtraction on the vectors or, conceptually, on the words they represent. We can find words that are semantically similar to other words, or do analogies, like A is to B as C is to ?. In vector space, this is effectively A - B + C. If this returns D, then this can be formulated as A - B = C - D. <Typography fontWeight={700}>Exploring this surprising, and quite delightful, consequence is the point of this web app.</Typography> By playing around with analogies we can see how the neural network has learned the relationships between words, and detect biases in the data it was trained on. (If you're interested in attempts at de-biasing pretrained word embeddings, start with this <Link href='https://arxiv.org/abs/1607.06520' target='_blank'>this paper</Link>).
      </Typography>
      <Typography level='body-md' sx={{ mb: 1 }}>
        Some popular pretrained word embedding models are <Link href='https://arxiv.org/abs/1301.3781' target='_blank'>Word2Vec</Link> (where it all began, Google), <Link href='https://nlp.stanford.edu/pubs/glove.pdf' target='_blank'>GloVe</Link> (by Stanford University, improved upon Word2Vec) and <Link href='https://arxiv.org/abs/1712.09405' target='_blank'>fastText</Link> (by Facebook, which can handle out-of-vocabulary words).
      </Typography>
      <Typography level='body-md' sx={{ mb: 1 }}>
        You can use the <Link href='https://github.com/piskvorky/gensim' target='_blank'>Gensim</Link> Python library to manipulate pretrained word embeddings. This <Link href='https://www.ibm.com/topics/word-embeddings' target='_blank'>article by IBM</Link>, <Link href='https://www.youtube.com/watch?v=5MaWmXwxFNQ&ab_channel=AssemblyAI' target='_blank'>YouTube video by AssemblyAI</Link> (which also shows how to use Gensim) and, for those with shorter attention spans, <Link href='https://www.youtube.com/shorts/FJtFZwbvkI4' target='_blank'>YouTube short by 3blue1brown</Link> are all great if you want to learn more.
      </Typography>
      <Typography level='title-lg' sx={{ mb: 1, mt: 3 }}>
        LLMs
      </Typography>
      <Typography level='body-md' sx={{ mb: 10 }}>
        Even pretrained word embeddings are relatively old-fashioned nowadays. The problem with pretrained word embeddings is that they are static - they don't change based on context. This paradigm changed with the advent of pretrained language models like <Link href='https://arxiv.org/abs/1802.05365' target='_blank'>ELMo</Link> and Google's <Link href='https://arxiv.org/abs/1810.04805' target='_blank'>BERT</Link>. BERT is a transformer model that can be fine-tuned for a specific task. It is the basis for many of the language models we use today.
      </Typography>
    </Box>
  );
};

export default About;