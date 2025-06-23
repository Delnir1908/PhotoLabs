const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // Get all topics
  router.get('/', (req, res) => {
    db.query('SELECT * FROM topics')
      .then(data => res.json(data.rows))
      .catch(err => res.status(500).json({ error: err.message }));
  });

  // Get all photos for a specific topic
  router.get('/:topic_id/photos', (req, res) => {
    const topicId = req.params.topic_id;
    db.query(
      `SELECT photos.* 
       FROM photos
       WHERE photos.topic_id = $1`,
      [topicId]
    )
      .then(data => res.json(data.rows))
      .catch(err => res.status(500).json({ error: err.message }));
  });

  return router;
};
