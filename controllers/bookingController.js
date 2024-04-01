import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      booking: savedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to book. Try again",
    });
  }
};

export const getSingleBooking = async (req, res) => {
  const id = req.params.id;
  try{
    const book = await Booking.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully",
      booking: book,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
}

export const getAllBooking = async (req, res) => {
  try{
    const books = await Booking.find();

    res.status(200).json({
      success: true,
      message: "Successfully",
      booking: books,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Internal server",
    });
  }
}