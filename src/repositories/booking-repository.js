const { StatusCodes } = require('http-status-codes');
const { Op } = require("sequelize");

const { Booking } = require('../models');
const CrudRepository = require('./crud-repository');
const {Enums} = require('../utils/common');
const { CANCELLED, BOOKED } = Enums.BOOKING_STATUS;

class BookingRepository extends CrudRepository {
    constructor() {
        super(Booking);
    }
}

module.exports= BookingRepository;