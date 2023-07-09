import LogNewForm from "../Components/LogNewForm";
import "../Components/LogNewForm.css"; // Import the CSS file for LogNewForm

function New() {
  return (
    <div className="New">
      <h2>New</h2>
      <div className="form-container"> {/* Apply the form-container class */}
        <LogNewForm />
      </div>
    </div>
  );
}

export default New;
