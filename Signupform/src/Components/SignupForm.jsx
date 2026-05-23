import { useState } from "react";

function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const canSubmit = form.name && form.email && form.password;

  function updateField(field, value) {
    setForm({ ...form, [field]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (form.name.length < 2) {
      newErrors.name = "Name too short";
    }

    if (
      !form.email.includes("@") ||
      !form.email.includes(".") ||
      form.email.includes(" ")
    ) {
      newErrors.email = "Invalid email";
    }

    if (form.password.length < 8) {
      newErrors.password = "Password too short";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Submitted:", form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={form.name}
        onChange={(e) => updateField("name", e.target.value)}
        placeholder="Name"
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <input
        value={form.email}
        onChange={(e) => updateField("email", e.target.value)}
        placeholder="Email"
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <input
        type={showPassword ? "text" : "password"}
        value={form.password}
        onChange={(e) => updateField("password", e.target.value)}
        placeholder="Password"
      />

      <label>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        Show password
      </label>

      {errors.password && (
        <p style={{ color: "red" }}>{errors.password}</p>
      )}

      <button type="submit" disabled={!canSubmit}>
        Sign up
      </button>
    </form>
  );
}

export default SignupForm;