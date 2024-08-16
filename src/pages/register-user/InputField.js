export default function InputField({ label, type, required }) {
    return (
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-600">
          {label}{required && '*'}
        </label>
        <input
          type={type}
          required={required}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
  