// controllers/eventController.js
import Event from "../../models/events.js";

// Create a new event
export const createEvent = async (req, res) => {
  const { eventName, description, dateTime, audience, picture, society } =
    req.body;
  try {
    const event = new Event({
      eventName,
      description,
      dateTime,
      audience,
      picture,
      society,
    });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: "Error creating event", error: err });
  }
};

// Get all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: "Error fetching events", error: err });
  }
};

// Get event by ID
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: "Error fetching event", error: err });
  }
};

// Update event
export const updateEvent = async (req, res) => {
  const { eventName, description, dateTime, status, picture, audience } =
    req.body;
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { eventName, description, dateTime, status, audience, picture },
      { new: true }
    );
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (err) {
    res.status(400).json({ message: "Error updating event", error: err });
  }
};

// Delete event
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting event", error: err });
  }
};

export const getEventsBySociety = async (req, res) => {
  try {
    const events = await Event.find({ society: req.params.society });
    if (!events || events.length === 0) {
      return res
        .status(404)
        .json({ message: "No events found for this society" });
    }
    res.status(200).json(events);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching events for society", error: err });
  }
};
