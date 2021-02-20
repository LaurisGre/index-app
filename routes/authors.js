import express from 'express';
const router = express.Router();

// All Authors Route
router.get('/', (req, res) => {
    res.render('authors/index');
});

// New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new');
});

// Create Author Route;
router.post('/', (req, res) => {
    res.send('CREATING AUTHOR');
});

export default router;
