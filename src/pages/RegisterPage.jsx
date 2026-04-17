import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  PersonOutline,
  CheckCircleOutline,
  ArrowForward,
  ArrowBack,
  AssignmentOutlined,
  FavoriteBorderOutlined,
  LockOutlined,
} from "@mui/icons-material";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import CheckboxGroup from "../components/CheckboxGroup";
import FormWrapper from "../components/FormWrapper";
import "../styles/Register.css";

// Step configuration extracted from form
const steps = [
  {
    name: "Basic Info",
    desc: "Personal information",
    icon: <PersonOutline />,
    fields: ["first_name", "last_name", "date_of_birth", "gender", "marital_status", "religion", "subcaste"]
  },
  {
    name: "Profile Details", 
    desc: "Professional details",
    icon: <AssignmentOutlined />,
    fields: ["age", "phone", "occupation", "interests", "languages"]
  },
  {
    name: "Preferences",
    desc: "Preferences & expectations", 
    icon: <FavoriteBorderOutlined />,
    fields: ["height", "weight", "religion", "education", "expectations", "lifestyle"]
  }
];

// Form field configurations
const formConfig = {
  step1: {
    first_name: { type: "text", placeholder: "First Name", required: true },
    last_name: { type: "text", placeholder: "Last Name", required: true },
    date_of_birth: { type: "date", placeholder: "Date Of Birth", required: true },
    gender: { type: "select", placeholder: "Select Gender", required: true, 
      options: [,
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ] },
    marital_status: { type: "select", placeholder: "Select Marital Status", required: true,
      options: [
        { label: "Single", value: "single" },
        { label: "Divorced", value: "divorced" },
        { label: "Widowed", value: "widowed" },
      ] },
    religion: { type: "select", placeholder: "Select religion", required: true,
      options: [
        { label: "Hindu", value: "hindu" },
        { label: "Christian", value: "christian" }
      ] },
    subcaste: { type: "select", placeholder: "Select subcaste", required: true,
      options: [
      { label: "Karukku Pattaiyathar", value: "karukku_pattaiyathar" },
      { label: "Melnattar", value: "melnattar" },
      { label: "Nattathi Nadar", value: "nattathi_nadar" },
      { label: "Kodikal Nadar", value: "kodikal_nadar" },
      { label: "Kalla Nadar", value: "kalla_nadar" },
      { label: "Gramani", value: "gramani" },
      { label: "Chetty Nadar", value: "chetty_nadar" },
      { label: "Pandya Vamsam Nadars", value: "pandya_vamsam_nadars" },
      { label: "Kongu Nadar", value: "kongu_nadar" }
    ] }
  },
  step2: {
    phone: { type: "tel", placeholder: "Phone Number", required: true },
    occupation: { type: "select", placeholder: "Select Occupation", required: true,
      options: [
        { label: "Select Occupation", value: "" },
        { label: "Software Engineer", value: "engineer" },
        { label: "Doctor", value: "doctor" },
        { label: "Teacher", value: "teacher" },
        { label: "Business", value: "business" },
        { label: "Student", value: "student" },
        { label: "Other", value: "other" },
      ] },
    interests: { type: "checkbox", label: "Interests", required: true,
      options: [
        { label: "✈️ Travel", value: "travel" },
        { label: "📖 Reading", value: "reading" },
        { label: "🎬 Movies", value: "movies" },
        { label: "🍳 Cooking", value: "cooking" },
        { label: "🎮 Gaming", value: "gaming" },
      ] },
    languages: { type: "checkbox", label: "Languages Known", required: true,
      options: [
        { label: "English", value: "english" },
        { label: "Hindi", value: "hindi" },
        { label: "Tamil", value: "tamil" },
        { label: "Telugu", value: "telugu" },
        { label: "Spanish", value: "spanish" },
      ] }
  },
  step3: {
    height: { type: "number", placeholder: "Height (cm)", required: true },
    weight: { type: "number", placeholder: "Weight (kg)", required: true },
    religion: { type: "select", placeholder: "Select Religion", required: true,
      options: [
        { label: "Select Religion", value: "" },
        { label: "Hindu", value: "hindu" },
        { label: "Christian", value: "christian" },
        { label: "Muslim", value: "muslim" },
        { label: "Sikh", value: "sikh" },
        { label: "Buddhist", value: "buddhist" },
        { label: "Other", value: "other" },
      ] },
    education: { type: "select", placeholder: "Select Education", required: true,
      options: [
        { label: "Select Education", value: "" },
        { label: "High School", value: "highschool" },
        { label: "Bachelor's Degree", value: "graduate" },
        { label: "Master's Degree", value: "pg" },
        { label: "PhD", value: "phd" },
        { label: "Diploma", value: "diploma" },
      ] },
    expectations: { type: "checkbox", label: "Expectations", required: true,
      options: [
        { label: "💼 Good Job", value: "job" },
        { label: "👨‍👩‍👧‍👦 Family", value: "family" },
        { label: "💰 Financial Stability", value: "financial" },
        { label: "🏠 Own House", value: "house" },
        { label: "🚗 Car", value: "car" },
      ] },
    lifestyle: { type: "checkbox", label: "Lifestyle Preferences", required: true,
      options: [
        { label: "🥬 Vegetarian", value: "veg" },
        { label: "🍖 Non-Vegetarian", value: "nonveg" },
        { label: "🌱 Vegan", value: "vegan" },
        { label: "🏋️ Fitness Enthusiast", value: "fitness" },
        { label: "🚭 Non-Smoker", value: "nonsmoker" },
      ] }
  }
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const [form, setForm] = useState({
    first_name: "", last_name:"", date_of_birth:"", gender: "", marital_status: "", 
    religion: "", subcaste: "", age: "", phone: "", occupation: "", interests: [],
    languages: [], height: "", weight: "", religion: "",
    education: "", expectations: [], lifestyle: [],
  });

  // Update completed steps based on validation
  useEffect(() => {
    const newCompletedSteps = [];
    for (let i = 0; i <= activeStep; i++) {
      if (isStepValidForIndex(i)) {
        newCompletedSteps.push(i);
      }
    }
    setCompletedSteps(newCompletedSteps);
  }, [form, activeStep]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getStepErrors = (stepIndex = activeStep) => {
    const errors = [];
    const currentStepConfig = formConfig[`step${stepIndex + 1}`];
    
    Object.entries(currentStepConfig).forEach(([fieldName, config]) => {
      if (config.required) {
        const value = form[fieldName];
        
        if (config.type === "checkbox") {
          if (value.length === 0) {
            errors.push(`${config.label} is required`);
          }
        } else if (!value || (typeof value === "string" && !value.trim())) {
          errors.push(`${config.placeholder || fieldName} is required`);
        } else if (config.type === "number" && config.min && config.max) {
          const numValue = Number(value);
          if (numValue < config.min || numValue > config.max) {
            errors.push(`${config.placeholder} must be between ${config.min} and ${config.max}`);
          }
        }
      }
    });
    
    return errors;
  };

  const isStepValidForIndex = (stepIndex) => {
    return getStepErrors(stepIndex).length === 0;
  };

  const isStepValid = () => {
    return isStepValidForIndex(activeStep);
  };

  const canNavigateToStep = (stepIndex) => {
    // Can always go to steps that are already completed or previous steps
    if (stepIndex <= activeStep) return true;
    
    // Can only go to next step if current step is valid
    if (stepIndex === activeStep + 1 && isStepValid()) return true;
    
    // Cannot skip ahead
    return false;
  };

  const handleStepClick = (index) => {
    if (canNavigateToStep(index)) {
      setActiveStep(index);
    } else if (index > activeStep) {
      setSnackbar({ 
        open: true, 
        message: `Please complete the current step (${steps[activeStep].name}) first before moving to ${steps[index].name}.`, 
        severity: "warning" 
      });
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.status === 200) {
        setSnackbar({ open: true, message: "Registration successful! Redirecting...", severity: "success" });
        setTimeout(() => navigate("/home"), 2000);
      } else {
        const data = await response.json();
        setSnackbar({ open: true, message: data.message || "Registration failed", severity: "error" });
      }
    } catch {
      setSnackbar({ open: true, message: "Something went wrong. Please try again.", severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    const errors = getStepErrors();
    if (errors.length > 0) {
      setSnackbar({ open: true, message: errors[0], severity: "warning" });
      return;
    }
    if (activeStep === steps.length - 1) {
      handleSubmit();
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  // Update progress line height
  useEffect(() => {
    const stepList = document.querySelector('.step-list');
    if (stepList) {
      const completedCount = completedSteps.length;
      const totalSteps = steps.length;
      const progressPercentage = (completedCount / totalSteps) * 100;
      
      // Get the first step item's position
      const firstStep = stepList.querySelector('.step-item');
      const lastStep = stepList.querySelector('.step-item:last-child');
      
      if (firstStep && lastStep) {
        const firstStepTop = firstStep.offsetTop + 17; // Half of step number height
        const lastStepBottom = lastStep.offsetTop + 17;
        const totalHeight = lastStepBottom - firstStepTop;
        const progressHeight = (progressPercentage / 100) * totalHeight;
        
        const pseudoAfter = stepList.querySelector('::after');
        if (pseudoAfter) {
          stepList.style.setProperty('--progress-height', `${progressHeight}px`);
        }
      }
    }
  }, [completedSteps]);

  const renderField = (fieldName, config) => {
    if (config.type === "select") {
      return (
        <SelectField
          key={fieldName}
          name={fieldName}
          value={form[fieldName]}
          onChange={handleChange}
          options={config.options}
          required={config.required}
          label={config.placeholder}
        />
      );
    } else if (config.type === "checkbox") {
      return (
        <CheckboxGroup
          key={fieldName}
          label={config.label}
          values={form[fieldName]}
          onChange={(val) => setForm({ ...form, [fieldName]: val })}
          options={config.options}
          required={config.required}
        />
      );
    } else {
      return (
        <InputField
          key={fieldName}
          name={fieldName}
          type={config.type}
          placeholder={config.placeholder}
          value={form[fieldName]}
          onChange={handleChange}
          required={config.required}
        />
      );
    }
  };

  const renderStepContent = () => {
    const currentStepConfig = formConfig[`step${activeStep + 1}`];
    return Object.entries(currentStepConfig).map(([fieldName, config]) => 
      renderField(fieldName, config)
    );
  };

  return (
    <div className="register-container">
      <div className="overlay" />

      <div className="register-card">
        <div className="register-sidebar">
          <div className="step-list">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`step-item 
                  ${activeStep === index ? "step-active" : ""} 
                  ${completedSteps.includes(index) ? "step-done" : ""}
                  ${canNavigateToStep(index) ? "step-clickable" : ""}`}
                onClick={() => handleStepClick(index)}
                disabled={!canNavigateToStep(index)}
              >
                <div className="step-number">
                  {completedSteps.includes(index) && index !== activeStep
                    ? <CheckCircleOutline style={{ fontSize: 18 }} />
                    : index + 1}
                </div>
                <div className="step-text">
                  <span className="step-label">{step.name}</span>
                  <span className="step-desc">{step.desc}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="register-content">
          <div className="register-scrollable">
            <div className="content-header">
              <h2 className="content-title">{steps[activeStep].name}</h2>
              <p className="content-subtitle">
                {activeStep === 0 && "Let's start with your basic information"}
                {activeStep === 1 && "Tell us more about your professional background"}
                {activeStep === 2 && "Almost done! Share your preferences"}
              </p>
            </div>

            <div className="form-section">
              <FormWrapper>
                {renderStepContent()}
              </FormWrapper>
            </div>
          </div>

          <div className="button-group">
            <button
              className="btn-back"
              disabled={activeStep === 0 || loading}
              onClick={handleBack}
            >
              <ArrowBack style={{ fontSize: 18 }} />
              Back
            </button>

            <button
              className="btn-next"
              disabled={!isStepValid() || loading}
              onClick={handleNext}
            >
              {loading ? (
                <CircularProgress size={20} style={{ color: "#fff" }} />
              ) : activeStep === steps.length - 1 ? (
                <>
                  <LockOutlined style={{ fontSize: 18 }} />
                  Submit Registration
                </>
              ) : (
                <>
                  Next
                  <ArrowForward style={{ fontSize: 18 }} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%", borderRadius: "12px" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RegisterPage;