const PORT = 3001;
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const authRoutes = require('./routes/auth');