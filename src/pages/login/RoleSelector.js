export default function RoleSelector({ selectedRole, onRoleChange }) {
    return (
      <div className="flex justify-center mb-4 space-x-4">
        <button
          className={`text-sm py-1 px-4 border-b-2 ${
            selectedRole === 'user' ? 'text-blue-600 border-blue-600' : 'text-gray-400 border-transparent'
          }`}
          onClick={() => onRoleChange('user')}
        >
          사용자
        </button>
        <button
          className={`text-sm py-1 px-4 border-b-2 ${
            selectedRole === 'agent' ? 'text-blue-600 border-blue-600' : 'text-gray-400 border-transparent'
          }`}
          onClick={() => onRoleChange('agent')}
        >
          공인중개사
        </button>
      </div>
    );
  }
  