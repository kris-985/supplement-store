import { string, func } from "prop-types";

const FormInput = ({ htmlFor, label, type, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={htmlFor} className="text-muted mb-1">
        <small className="text-danger fw-bold">{label}</small>
      </label>
      <input
        id={htmlFor}
        name={label.replace(/\s/g, "").toLowerCase()}
        className="form-control"
        type={type ? type : "text"}
        placeholder={label}
        autoComplete="off"
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormInput;

FormInput.propTypes = {
  htmlFor: string,
  label: string,
  type: string || undefined,
  onChange: func,
};
