import { Box, Button, Input, Typography } from "@mui/joy";
import { useState } from "react";
import { callApi } from "../utils";
import ResultTable from "./ResultTable";
import CustomSnack from "./CustomSnack";

const Similarity = () => {
  const [word, setWord] = useState("");

  const [result, setResult] = useState<[string, number][]>([]);

  const [snackText, setSnackText] = useState<string>('');

  // Handler for form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent default form submission behavior

    const url = `https://adenhaus.pythonanywhere.com/analogy/?pos1=${word}&topn=5`;

    try {
      const data = await callApi(url);
      setResult(data);
      setSnackText('');
    } catch (error) {
      if (error instanceof Error) {
        setSnackText(error.message);
      } else {
        setSnackText('An unexpected error occurred');
      }
      setResult([]);
    }
  };

  const handleClear = () => {
    setWord("");
    setResult([]);
    setSnackText('');
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          // height: '75vh',
          justifyContent: 'center',
          pt: 2,
          px: 2,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Input
              placeholder="Vector"
              value={word}
              onChange={(e) => {setWord(e.target.value.replace(/\s+/g, '').toLowerCase())}} // Disallow spaces
              sx={{ minWidth: '100px', maxWidth: '100px', flex: 1 }}
            />
            <Button
              sx={{ minWidth: '40px', maxWidth: '40px' }}
              variant='outlined'
              type='submit'
              disabled={!word}
            >
              Go
            </Button>
            <Button
              sx={{ minWidth: '60px', maxWidth: '60px' }}
              variant='outlined'
              color='neutral'
              disabled={!word}
              onClick={handleClear}
            >
              Reset
            </Button>
          </Box>
          <Box sx={{ minHeight: '30px' }}>
          </Box>
        </form>
        {result.length !== 0 ? <Box sx={{ minHeight: '100px' }}><ResultTable result={result} /></Box> : <Box sx={{ minHeight: '100px' }}></Box>}
      </Box>
      <CustomSnack text={snackText} open={snackText !== ''} setSnackText={setSnackText} />
    </>
  );
};

export default Similarity;