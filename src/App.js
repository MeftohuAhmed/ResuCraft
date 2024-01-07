// Import necessary components and functions
import Grid from "@mui/material/Grid";
import MultiStepper from "./Components/MultiStepper";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import ShowTemplate from "./Components/ShowTemplate";
import EmployeeInfo from "./Components/EmployeeInfo";
import EmployeeExperience from "./Components/EmployeeExperience";
import EmployeeEducation from "./Components/EmployeeEducation";
import EmployeeSkills from "./Components/EmployeeSkills";
import EmployeeInterests from "./Components/EmployeeInterests";
import Resume from "./Components/Resume";

function App() {
  // Get the active step from the Redux store using useSelector
  const { activeStep } = useSelector((store) => store.stepper);

  // Function to render different forms based on the active step
  function renderForms(activeStep) {
    switch (activeStep) {
      case 0:
        return <EmployeeInfo />; // Render EmployeeInfo component for step 0

      case 1:
        return <EmployeeExperience />; // Render EmployeeExperience component for step 1

      case 2:
        return <EmployeeEducation />; // Render EmployeeEducation component for step 2

      case 3:
        return <EmployeeSkills />; // Render EmployeeSkills component for step 3

      case 4:
        return <EmployeeInterests />; // Render EmployeeInterests component for step 4

      default:
        break;
    }
  }

  return (
    <div className="App">
      {/* Container for the application */}
      <Container sx={{ mt: 10, mb: 10 }}>
        {/* MultiStepper component */}
        <MultiStepper sx={{ mt: 6 }} />
        {activeStep < 5 ? ( // Check if active step is less than 5 (not on the final step)
          <Grid container>
            {/* Left column for rendering forms */}
            <Grid item md={8} lg={8} sm={12}>
              {renderForms(activeStep)} {/* Render the appropriate form based on the active step */}
            </Grid>
            {/* Right column for showing the template */}
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <ShowTemplate /> {/* Render the ShowTemplate component */}
            </Grid>
          </Grid>
        ) : (
          // Display the resume when active step is 5 (final step)
          <Grid container>
            <Resume /> {/* Render the Resume component */}
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default App;
