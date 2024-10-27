import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import PageLayout from './components/PageLayout';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Analogy from './components/Analogy';
import Groups from './components/Groups';
import Similarity from './components/Similarity';
import theme from './theme.tsx';

function App() {
  return (
    <CssVarsProvider defaultMode="light" disableTransitionOnChange theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
            '--Cover-width': '50vw', // must be `vw` only
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s', // set to `none` to disable transition
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PageLayout />
          }>
            <Route index element={<Navigate replace to="/analogy" />} />
            <Route path="/analogy" element={<Analogy />} />
            <Route path="/similarity" element={<Similarity />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  )
}

export default App
