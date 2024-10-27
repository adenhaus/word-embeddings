import { Box, Button, Input, Typography } from "@mui/joy";
import { useState } from "react";
import ResultTable from "./ResultTable";

const Analogy = () => {
  // State to hold the values of the inputs
  const [king, setKing] = useState("");
  const [man, setMan] = useState("");
  const [woman, setWoman] = useState("");

  const [result, setResult] = useState<[string, number][]>([]);

  // Handler for form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Construct the API URL using the input values
    const url = `https://adenhaus.pythonanywhere.com/analogy/?pos1=${woman}&pos2=${king}&neg=${man}&topn=1`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: { word: string; score: number }[] = await response.json();

      // Convert the JSON data to a list of tuples
      const resultTuples: [string, number][] = data.map(({ word, score }) => [word, score]);

      setResult(resultTuples);
    } catch (error) {
      alert(`Error fetching data: ${error}`);
    }
  };

  const handleClear = () => {
    setKing("");
    setMan("");
    setWoman("");
    setResult([]);
  };

  // Check if all three inputs have text
  const isGoDisabled = !(king && man && woman);
  // Check if any input has text to enable/disable Clear button
  const isClearDisabled = !(king || man || woman);

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
            }}
          >
            <Input
              placeholder="Man"
              value={man}
              onChange={(e) => { setMan(e.target.value.replace(/\s+/g, '').toLowerCase()); console.log(e.target.value) }} // Disallow spaces
              sx={{ minWidth: '100px', maxWidth: '100px', flex: 1 }}
            />
            <Typography level='body-md' sx={{ whiteSpace: 'nowrap' }}>
              is to
            </Typography>
            <Input
              placeholder="king"
              value={king}
              onChange={(e) => setKing(e.target.value.replace(/\s+/g, '').toLowerCase())} // Disallow spaces
              sx={{ minWidth: '100px', maxWidth: '100px', flex: 1 }}
            />
            <Typography level='body-md' sx={{ whiteSpace: 'nowrap' }}>
              as
            </Typography>
            <Input
              placeholder="woman"
              value={woman}
              onChange={(e) => setWoman(e.target.value.replace(/\s+/g, '').toLowerCase())} // Disallow spaces
              sx={{ minWidth: '100px', maxWidth: '100px', flex: 1 }}
            />
            <Typography level='body-md' sx={{ whiteSpace: 'nowrap' }}>
              is to
            </Typography>
            <Input
              placeholder="?"
              disabled
              sx={{ minWidth: '35px', maxWidth: '35px', flex: 1 }}
            />
            <Button
              sx={{ minWidth: '40px', maxWidth: '40px' }}
              variant='outlined'
              type='submit'
              disabled={isGoDisabled}
            >
              Go
            </Button>
            <Button
              sx={{ minWidth: '60px', maxWidth: '60px' }}
              variant='outlined'
              color='neutral'
              disabled={isClearDisabled}
              onClick={handleClear}
            >
              Reset
            </Button>
          </Box>
          <Box sx={{ minHeight: '30px' }}>
          </Box>
        </form>
        {result.length !== 0 ? <Box sx={{minHeight: '100px'}}><ResultTable result={result}/></Box> : <Box sx={{minHeight: '100px'}}></Box>}
      </Box>
    </>
  );
};

export default Analogy;
