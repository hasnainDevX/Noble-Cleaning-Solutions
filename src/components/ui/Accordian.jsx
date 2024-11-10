import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "8px",
  marginBottom: theme.spacing(2),
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosIcon sx={{ fontSize: "1.4rem" }} />}
    {...props}
  />
))(({ theme, expanded }) => ({
  backgroundColor: expanded ? "#2CA2FC" : "rgba(44, 162, 252, 0.05)", // Change bg when expanded
  color: expanded ? "#fff" : "inherit", // White text when expanded
  flexDirection: "row-reverse",
  padding: theme.spacing(2, 2),
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    transition: "transform 0.2s ease",
    color: expanded ? "#fff" : "inherit", // White icon when expanded
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme, expanded }) => ({
  padding: theme.spacing(2, 3),
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  backgroundColor: expanded ? "#2CA2FC" : "#fff", // Background color when expanded
  color: expanded ? "#fff" : theme.palette.text.secondary, // Text color when expanded
  textAlign: "left", // Ensures text is left-aligned
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="flex flex-col gap-3">
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expanded={expanded === "panel2"}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography fontWeight={600}>What services do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails expanded={expanded === "panel2"}>
          <Typography>
            Our comprehensive cleaning services include: Regular cleaning
            (weekly, bi-weekly, or monthly) Deep cleaning, Window cleaning (for move-ins,
            move-outs, or special occasions) Spring cleaning, Post-construction
            cleaning, Commercial cleaning and Carpet cleaning
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expanded={expanded === "panel3"}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography fontWeight={600}>
            How do I book a cleaning service?
          </Typography>
        </AccordionSummary>
        <AccordionDetails expanded={expanded === "panel3"}>
          <Typography>
            <p className="flex flex-col">
              Booking a cleaning service is easy! You can book online through
              our website or contact us directly for a quote. You can email
              mapleleafcleanersplus@gmail.com. We'll work with you to schedule a
              time that works best for you.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expanded={expanded === "panel1"}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography fontWeight={600}>
            What cleaning products do you use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails expanded={expanded === "panel1"}>
          <Typography className=" ">
            We use eco-friendly cleaning products that are safe for your family
            and the environment. We can also use your preferred cleaning
            products if you have specific requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
