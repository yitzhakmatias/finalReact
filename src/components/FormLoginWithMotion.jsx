import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from '../store/form/formSlice';
import {
    Box,
    Button,
    TextField,
    Typography,
    InputAdornment,
    IconButton,
    Grid,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const FormLoginWithMotion = () => {
    const dispatch = useDispatch();
    const { module } = useSelector((state) => state.form);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const expectedPassword = `mod7USIP-${formData.username}`;
        if (formData.password === expectedPassword) {
            dispatch(updateForm({ ...formData, module }));
            alert('Form data saved successfully!');
        } else {
            alert('Password mismatch!');
        }
    };

    return (
        <Box
            sx={{
                maxWidth: 400,
                mx: 'auto',
                mt: 4,
                p: 3,
                border: '1px solid #ddd',
                borderRadius: 2,
                boxShadow: 1,
            }}
        >
            <form onSubmit={handleSubmit}>
                <Typography variant="h5" align="center" gutterBottom>
                    Login Form
                </Typography>

                <Grid container spacing={2}>
                    {/* Module Field */}
                    <Grid item xs={12}>
                        <TextField
                            label="Module"
                            value={module}
                            fullWidth
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>

                    {/* Username Field */}
                    <Grid item xs={12}>
                        <TextField
                            label="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                    </Grid>

                    {/* Email Field */}
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                    </Grid>

                    {/* Password Field */}
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword((prev) => !prev)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default FormLoginWithMotion;
