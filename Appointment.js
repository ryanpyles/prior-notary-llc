import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const CLIENT_ID = 'YOUR_ACTUAL_CLIENT_ID';
const API_KEY = 'YOUR_ACTUAL_API_KEY';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

const AppointmentSection = styled.section`
    background-color: white;
    margin: 2rem 0;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`;

const Appointment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://apis.google.com/js/api.js";
        script.onload = () => {
            window.gapi.load('client:auth2', initClient);
        };
        document.body.appendChild(script);
    }, []);

    const initClient = () => {
        window.gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
        }).then(() => {
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(setIsAuthorized);
            setIsAuthorized(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        }).catch(error => {
            console.error('Error initializing Google API client:', error);
        });
    };

    const handleAuthClick = () => {
        window.gapi.auth2.getAuthInstance().signIn();
    };

    const handleSignoutClick = () => {
        window.gapi.auth2.getAuthInstance().signOut();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!isAuthorized) {
            alert('Please sign in to book an appointment.');
            return;
        }

        const eventDetails = {
            summary: `Notary Appointment - ${name}`,
            description: `Appointment with ${name} (${email})`,
            start: {
                dateTime: `${date}T${time}:00`,
                timeZone: 'America/New_York',
            },
            end: {
                dateTime: `${date}T${getEndTime(time)}:00`,
                timeZone: 'America/New_York',
            },
        };

        const request = window.gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: eventDetails,
        });

        request.execute((event) => {
            alert('Appointment booked successfully!');
            console.log(event);
        });
    };

    const getEndTime = (startTime) => {
        const [hour, minute] = startTime.split(':');
        const date = new Date(0, 0, 0, hour, minute);
        date.setMinutes(date.getMinutes() + 30);
        return date.toTimeString().substr(0, 5);
    };

    const generateTimeOptions = () => {
        const times = [];
        for (let hour = 9; hour <= 17; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                const displayTime = new Date(`1970-01-01T${timeString}:00Z`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
                times.push({ value: timeString, label: displayTime });
            }
        }
        return times;
    };

    return (
        <AppointmentSection id="appointment">
            <Container>
                <Typography variant="h2" component="div" gutterBottom>
                    Make an Appointment
                </Typography>
                {isAuthorized ? (
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <TextField
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <TextField
                            label="Date"
                            type="date"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                        <TextField
                            label="Time"
                            select
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        >
                            {generateTimeOptions().map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Book Appointment
                        </Button>
                        <Button onClick={handleSignoutClick} variant="contained" color="secondary" fullWidth style={{ marginTop: '1rem' }}>
                            Sign Out
                        </Button>
                    </form>
                ) : (
                    <Button onClick={handleAuthClick} variant="contained" color="primary" fullWidth>
                        Sign In with Google
                    </Button>
                )}
            </Container>
        </AppointmentSection>
    );
};

export default Appointment;
