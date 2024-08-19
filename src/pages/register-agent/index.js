import Header from './Header';
import RegisterUserForm from './RegisterUserForm';

export default function RegisterUser() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-14">
      <Header />
      <RegisterUserForm />
    </div>
  );
}
