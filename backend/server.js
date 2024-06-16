const express = require('express');
const app = express();
const PORT = process.env.PORT || 5009;

app.use(express.json());

app.get('/api/time', (req, res) => {
  const currentTime = new Date();
  res.json({ time: currentTime });
});

app.get('/api/prayer-times', (req, res) => {
  const prayerTimes = {
    fajr: '04:04',
    zuhr: '13:09',
    asr: '17:06',
    maghrib: '20:31',
    isha: '22:06',
    shouruq: '05:45',
    nextAdhan: '04:04' // example next Adhan time
  };
  res.json(prayerTimes);
});

app.get('/api/masjid-info', (req, res) => {
  const masjidInfo = {
    name: 'Darwen Madina Masjid',
    address: 'Victoria Street, Darwen'
  };
  res.json(masjidInfo);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
