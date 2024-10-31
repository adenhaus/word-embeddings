import { useEffect, useState } from "react";
import { Box, Button, Input, Typography } from "@mui/joy";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, ResponsiveContainer } from "recharts";
import CustomSnack from "./CustomSnack";

export async function callPcaApi(words, model = "glove-wiki-gigaword-100") {
  const query = words.map(word => `words=${encodeURIComponent(word)}`).join("&");
  const url = `https://adenhaus.pythonanywhere.com/groups/?${query}&model=${model}`;
  const response = await fetch(url);

  if (response.status === 400) {
    const errorData = await response.json();
    throw new Error(errorData.error);
  } else if (!response.ok) {
    throw new Error("An unknown error occurred");
  }

  return await response.json(); // Expected data is [{word: 'word', x: float, y: float}, ...]
}

const Groups = () => {
  const [data, setData] = useState([]);
  const [words, setWords] = useState(Array(10).fill("")); // Array of 10 empty strings for word inputs
  const [snackText, setSnackText] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredWords = words.filter(word => word); // Only send non-empty words

    if (filteredWords.length === 0) {
      setSnackText("Please enter at least one word.");
      return;
    }

    try {
      const pcaData = await callPcaApi(filteredWords);
      setData(pcaData);
    } catch (err) {
      setSnackText(err.message);
    }
  };

  const handleClear = () => {
    setWords(Array(10).fill("")); // Reset words to empty
    setData([]); // Clear data to hide chart
  };

  const updateWord = (index, value) => {
    setWords(prevWords => {
      const newWords = [...prevWords];
      newWords[index] = value.toLowerCase().replace(/\s+/g, ""); // Disallow spaces
      return newWords;
    });
  };

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: { xs: 'column', lg: 'row' },
      // backgroundColor: 'blue',
    }}
    >

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          py: 2,
          // backgroundColor: 'red',
          width: { xs: '100%', lg: '100%' },
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center'
              }}
            >
              {words.map((word, index) => (
                <Input
                  key={index}
                  placeholder={`Word ${index + 1}`}
                  value={word}
                  onChange={(e) => updateWord(index, e.target.value)}
                  sx={{ minWidth: '100px', maxWidth: '100px' }}
                />
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mx: 'auto', mt: 2 }}>
              <Button
                variant="outlined"
                type="submit"
                disabled={words.filter(word => word).length < 2} // Go button enabled only if at least 2 words
              >
                Go
              </Button>
              <Button
                variant="outlined"
                color="neutral"
                onClick={handleClear}
                disabled={words.every(word => !word)} // Reset button enabled if at least one word
              >
                Reset
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Box sx={{
        width: { xs: '80%', sm: '60%', md: '50%', lg: '100%' }, mx: 'auto',
        display: { xs: 'none', md: 'block' },
      }}>
        <ResponsiveContainer height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="4" fill="#d1a7fa" fillOpacity={0.2} />
              <XAxis dataKey="x" name="PCA X" type="number" domain={['dataMin', 'dataMax']} tickFormatter={(tick) => tick.toFixed(2)} />
              <YAxis dataKey="y" name="PCA Y" type="number" domain={['dataMin', 'dataMax']} tickFormatter={(tick) => tick.toFixed(2)} />
              {/* <Tooltip cursor={{ strokeDasharray: "3 3" }} /> */}
              {/* <Legend /> */}
              <Scatter name="Words" data={data} fill="#8884d8">
                <LabelList dataKey="word" position="top" />
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
      </Box>
      <Box sx={{
        width: { xs: '80%', sm: '60%', md: '50%', lg: '100%' }, mx: 'auto',
        display: { xs: 'block', md: 'none' },
      }}>
        <ResponsiveContainer height={250}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="4" fill="#d1a7fa" fillOpacity={0.2} />
              <XAxis dataKey="x" name="PCA X" type="number" domain={['dataMin', 'dataMax']} tickFormatter={(tick) => tick.toFixed(2)} />
              <YAxis dataKey="y" name="PCA Y" type="number" domain={['dataMin', 'dataMax']} tickFormatter={(tick) => tick.toFixed(2)} />
              {/* <Tooltip cursor={{ strokeDasharray: "3 3" }} /> */}
              {/* <Legend /> */}
              <Scatter name="Words" data={data} fill="#8884d8">
                <LabelList dataKey="word" position="top" />
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
      </Box>
      <CustomSnack text={snackText} open={snackText !== ""} setSnackText={setSnackText} />
    </Box>
  );
};

export default Groups;