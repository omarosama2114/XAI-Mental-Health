import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import ResponseCard from '../components/responseCard.jsx';

const AdminPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [responses, setResponses] = useState([]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', { username, password });
      if (response.data.success) {
        setIsLoggedIn(true);
        fetchResponses();
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login error', error);
      alert('Login error');
    }
  };

  const fetchResponses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/get-surveys');
      setResponses(response.data);
    } catch (error) {
      console.error('Fetch error', error);
    }
  };

  if (!isLoggedIn) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Admin Login
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                label="Username" 
                variant="standard"
                fullWidth
                margin="normal"
                value={username}
                inputProps={{
                  spellCheck: 'false',
                  style:{ outline: 'none', boxShadow: 'none'} 
                  }}
                InputLabelProps={{
                  shrink: true // Color for the label
                  }}  
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Password"
                name='password'
                type="password"
                variant="standard"
                InputLabelProps={{ shrink: true }} 
                fullWidth
                margin="normal"
                value={password}
                inputProps={{
                  spellCheck: 'false',
                  style:{ outline: 'none', boxShadow: 'none'} 
                  }}  
                onChange={(e) => setPassword(e.target.value)}
                
              />
              <Button 
              type="submit"  
              variant="contained"
              sx={{
                backgroundColor: '#19b394',
                '&:hover': {
                  backgroundColor: '#167a6a', // A darker shade of #19b394 for hover effect
                },
              }} 
              fullWidth>
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <div>
      <h2 style={{ color: 'black', fontFamily: 'Inter', fontWeight: 'bold', fontSize: '40px', marginTop: '10px', marginBottom: '20px' }}> &nbsp; Responses</h2>
      <Box sx={{ margin: 2 }}>
        {responses.map((response, index) => (
          <ResponseCard key={index} response={response} index={index} />
        ))}
      </Box>
    </div>
  );
};

export default AdminPage;
