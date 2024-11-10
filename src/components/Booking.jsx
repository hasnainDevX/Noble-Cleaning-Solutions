import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { setHours, setMinutes } from "date-fns";
import emailjs from "emailjs-com";
import { motion, useInView } from "framer-motion";
import { default as React, useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import RangeSlider from "./ui/Range";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    email: "",
    houseSize: [1000, 5000],
    selectedDate: null,
    selectedTime: null,
    package: "Standard",
  });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    email: "",
    selectedDate: "",
    selectedTime: "",
  });

  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const imgVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const minTime = setHours(setMinutes(new Date(), 0), 7);
  const maxTime = setHours(setMinutes(new Date(), 0), 20);
  const minSelectableDate = new Date();
  minSelectableDate.setDate(minSelectableDate.getDate() + 2);
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phoneNumber.replace(/\D/g, ""))) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number without country code";
      isValid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    }

    if (!formData.selectedDate) {
      newErrors.selectedDate = "Please select a date";
      isValid = false;
    }

    if (!formData.selectedTime) {
      newErrors.selectedTime = "Please select a time";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  const handleDateChange = (newDate) => {
    setFormData((prev) => ({ ...prev, selectedDate: newDate }));
    if (errors.selectedDate) {
      setErrors({ ...errors, selectedDate: "" });
    }
  };
  const handleTimeChange = (newTime) => {
    setFormData((prev) => ({ ...prev, selectedTime: newTime }));
    if (errors.selectedTime) {
      setErrors({ ...errors, selectedTime: "" });
    }
  };
  const handleSliderChange = (event, newValue) => {
    setFormData((prevData) => ({ ...prevData, houseSize: newValue }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    const emailData = {
      to_name: "Admin",
      from_name: "Maple Leaf Cleaners Plus",
      client_name: formData.fullName,
      client_phone: formData.phoneNumber,
      client_address: formData.address,
      client_email: formData.email || "Not provided",
      house_size: `${formData.houseSize[0]} - ${formData.houseSize[1]} sq ft`,
      client_package: formData.package,
      booking_date: formData.selectedDate?.toLocaleDateString(),
      booking_time: formData.selectedTime?.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    try {
      const response = await emailjs.send(
        "service_xefrq6d",
        "template_apozibw",
        emailData,
        "rY3JMVuy3R264K20Z"
      );

      if (response.status === 200) {
        toast.success(
          `Thank you ${formData.fullName}! Your appointment has been scheduled for ${emailData.booking_date} at ${emailData.booking_time}. We will contact you shortly.`,
          {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          }
        );

        setFormData({
          fullName: "",
          phoneNumber: "",
          address: "",
          email: "",
          houseSize: [1000, 5000],
          selectedDate: null,
          selectedTime: null,
          package: "Standard",
        });
      }
    } catch (error) {
      console.error("Error sending form:", error);
      toast.error("There was an issue submitting your form. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div
        ref={sectionRef}
        id="get-a-quote"
        className="md:mt-[4rem] mt-4 md:py-[4rem] md:px-[8rem] py-8 px-11 flex flex-col md:flex-row md:!justify-between 2xl:!justify-center items-center gap-[4rem]"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariant}
          className="textpart flex-1 space-y-5 flex items-start justify-center flex-col !max-w-5xl"
        >
          <h2 className="mx-auto text-4xl md:text-5xl 2xl:text-7xl font-bold text-blue-950">
            Request a Free Cleaning Quote today!
          </h2>
          <p className="2xl:text-xl">
            Simply provide us with your contact information along with your
            requirements, and we will get back to you within 24 hours.
          </p>
          <h3 className="2xl:text-xl font-semibold">Not convinced yet?</h3>
          <button className="flex gap-2 justify-center items-center btn1 px-4 py-3 text-white rounded-3xl bg-[#2CA2FC] font-[500]">
            <span>Contact</span>
            <FaLocationArrow />
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imgVariant}
          className="form flex-1 flex items-center flex-col bg-[#0d397209] shadow-2xl 2xl:!max-w-3xl"
        >
          <h3 className="text-center mx-auto text-3xl md:text-5xl md:px-4 font-bold text-blue-950 my-8">
            Book an Appointment
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 flex flex-col items-center w-full py-5 px-1"
          >
            {/* Full Name and Phone Number Row */}
            <div className="row flex w-full px-5 gap-3 flex-wrap md:flex-nowrap">
              <div className="flex flex-col w-full">
                <label className="text-sm font-semibold mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  className={`border ${
                    errors.fullName ? "border-red-500" : "border-blue-300"
                  } p-2 rounded-lg placeholder:text-blue-950 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm font-semibold mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  className={`border ${
                    errors.phoneNumber ? "border-red-500" : "border-blue-300"
                  } p-2 rounded-lg placeholder:text-blue-950 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>

            {/* Address and Email Row */}
            <div className="row flex w-full px-5 gap-3 flex-wrap md:flex-nowrap">
              <div className="flex flex-col w-full">
                <label className="text-sm font-semibold mb-1">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  className={`border ${
                    errors.address ? "border-red-500" : "border-blue-300"
                  } p-2 rounded-lg placeholder:text-blue-950 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm font-semibold mb-1">
                  Email <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={`border ${
                    errors.email ? "border-red-500" : "border-blue-300"
                  } p-2 rounded-lg placeholder:text-blue-950 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Date and Time Row */}
            <div className="row flex w-full px-5 gap-3 flex-wrap md:flex-nowrap">
              <div className="flex flex-col w-full">
                <label className="text-sm font-semibold mb-1">
                  Day of Service <span className="text-red-500">*</span>
                </label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={formData.selectedDate}
                    onChange={handleDateChange}
                    minDate={minSelectableDate}
                    renderInput={(props) => (
                      <TextField
                        {...props}
                        fullWidth
                        error={!!errors.selectedDate}
                        helperText={errors.selectedDate}
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm font-semibold mb-1">
                  Time of Service <span className="text-red-500">*</span>
                </label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    value={formData.selectedTime}
                    onChange={handleTimeChange}
                    minTime={minTime}
                    maxTime={maxTime}
                    renderInput={(props) => (
                      <TextField
                        {...props}
                        fullWidth
                        error={!!errors.selectedTime}
                        helperText={errors.selectedTime}
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </div>

            {/* Package Selection */}
            <div className="w-full px-5 flex justify-center items-end gap-14 flex-wrap md:flex-nowrap">
              {/* House Size Slider */}
              <RangeSlider
                value={formData.houseSize}
                handleChange={handleSliderChange}
                className="flex-[60%]"
              />
              <div className="flex gap-2 flex-wrap flex-[50%]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="package"
                    value="Standard"
                    checked={formData.package === "Standard"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-500"
                  />
                  <span>Standard Package</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="package"
                    value="Convenient"
                    checked={formData.package === "Convenient"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-500"
                  />
                  <span>Convenient Package</span>
                </label>
                <a href="#pricing" className="text-sm font-medium my-3 block">
                  Compare Packages
                </a>
              </div>
            </div>

            <button
              type="submit"
              className={`md:block hidden btn2 border-none green outline-1 !px-9 !py-4 bg-white rounded-3xl text-[#2CA2FC] !border ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Booking;
