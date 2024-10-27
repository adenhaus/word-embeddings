import * as React from 'react';
import Table from '@mui/joy/Table';
import { Box } from '@mui/joy';

interface Props {
  result: [string, number][];
}

export default function ResultTable({ result }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Table aria-label="basic table" sx={{ maxWidth: '500px', mx: 'auto' }}>
        <thead>
          <tr>
            <th style={{ width: '70%' }}>Word</th>
            <th>Similarity</th>
          </tr>
        </thead>
        <tbody>
          {result.map(([word, score], index) => (
            <tr key={index}>
              <td>{word}</td>
              <td>{score.toFixed(2)}</td> {/* Format score to 2 decimal places */}
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
}