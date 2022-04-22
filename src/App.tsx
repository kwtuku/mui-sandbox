import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Navbar />
      <Stack direction="row">
        <Box flex={2} p={2}>
          <Sidebar />
        </Box>
        <Box flex={5} p={2}>
          <Feed />
        </Box>
        <Box flex={3} p={2}>
          <Rightbar />
        </Box>
      </Stack>
    </>
  );
}

export default App;
