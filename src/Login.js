import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import {useState} from 'react';

function Login({token, setToken}) {
  const [tokenInput, setTokenInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const requestLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      if (tokenInput === '123') {
        setToken(tokenInput);
        localStorage.setItem('token', tokenInput);
        setLoading(false);
      } else {
        setError('Incorrect Token!');
        setLoading(false);
      }
    }, 1200);
  };

  return (
    <Box
      style={{
        margin: '5rem',
        display: 'flex',
        justifyContent: 'center',
      }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Stack spacing={1} direction="column" textAlign="center">
        <Box>
          <img
            alt="MySQL Logo"
            width={150}
            src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
          />
        </Box>
        <Typography variant="h5">MySQL and Heatwave Workshop</Typography>
        <Typography>Secure Token Login</Typography>
        <TextField
          required
          id="token-input"
          label="Token"
          type="password"
          disabled={loading}
          onChange={(e) => setTokenInput(e.target.value)}
        />
        <Button
          variant="contained"
          disabled={loading || !tokenInput.length}
          onClick={() => requestLogin(tokenInput)}
        >
          Login
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
      </Stack>
    </Box>
  );
}

export default Login;
