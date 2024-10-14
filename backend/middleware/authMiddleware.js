const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  
  // Protect the route for premium content
app.get('/api/premium-content', authMiddleware, (req, res) => {
    res.send('This is premium content for logged-in users.');
  });
  
  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
