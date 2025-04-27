import rant from '../models/rantModels.js';

export const addRant = async (req, res, io) => {
  const { name, message, date, time } = req.body;

  if (!name || !message || !date || !time) {
    return res.json({ error: 'Invalid Details' });
  }

  try {
    // Create a new rant in the database
    const newRant = await rant.create({ name, message, date, time });

    // Emit a 'newRant' event to all connected clients
    io.emit('newRant', newRant); // Broadcast the new rant to all clients

    return res.status(201).json({ message: 'Successfully added', Rants: newRant });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong', details: error });
  }
};

// In your rantController.js
export const getRants = async (req, res) => {
  try {
    const rants = await rant.find();  // Fetch all rants from DB
    res.status(200).json(rants);      // Return the rants as JSON
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

