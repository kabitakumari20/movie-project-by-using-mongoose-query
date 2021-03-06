const bookingdata = require("../controller/booking");
const { sendmailbookTicket, sendmailReminder } = require("../nodeemail/email");

const express = require("express");

const router = express.Router();

// router.get("/count_booking_movie", bookingdata.count_booking_movie);
router.get("/count_booking_movie_by_user",bookingdata.count_booking_movie_by_user)
router.get("/get_Userid_showid_movieId", bookingdata.get_Userid_showid_movieId);

router.post("/filter", bookingdata.filterdata);

router.get("/", bookingdata.get);
router.post("/", bookingdata.create);
router.post("/remaimder", sendmailReminder, bookingdata.create);

router.post("/sendmail", sendmailbookTicket, bookingdata.create);

router.patch("/:id", bookingdata.patch);

router.delete("/:id", bookingdata.remove);

module.exports = router;
