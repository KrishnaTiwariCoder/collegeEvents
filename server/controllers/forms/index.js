import Registration from "../../models/form.js";
import Event from "../../models/events.js";

export const createRegistration = async (req, res) => {
  const { formName, description, eventID, fields } = req.body;

  try {
    // Check if event exists
    const event = await Event.findById(eventID);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Create registration
    const registration = new Registration({
      formName,
      description,
      eventID,
      fields,
      userID: req.user._id,
    });
    await registration.save();
    res.status(201).json({ message: "form successful", registration });
  } catch (err) {
    res.status(500).json({ message: "Error creating form", error: err });
  }
};

export const getRegistrationsByEvent = async (req, res) => {
  try {
    const registrations = await Registration.find({
      eventID: req.params.eventID,
    });
    if (registrations.length === 0) {
      return res
        .status(404)
        .json({ message: "No registrations found for this event" });
    }
    res.status(200).json(registrations);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching registrations", error: err });
  }
};

// Get registration by ID
export const getRegistrationById = async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }
    res.status(200).json(registration);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching registration", error: err });
  }
};

// Update registration status (admin feature)
export const updateRegistrationStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const registration = await Registration.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }
    res
      .status(200)
      .json({ message: "Registration status updated", registration });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating registration", error: err });
  }
};

export const getRegistrationsByUser = async (req, res) => {
  try {
    const registrations = await Registration.find({
      userID: req.user._id,
    });
    if (!registrations || registrations.length === 0) {
      return res
        .status(404)
        .json({ message: "No registrations found for this user" });
    }
    res.status(200).json(registrations);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching registrations", error: err });
  }
};
