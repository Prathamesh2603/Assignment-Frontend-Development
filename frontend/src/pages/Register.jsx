import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-10 max-w-sm mx-auto">
      <h1 className="text-2xl mb-4">Register</h1>
      <input className="border p-2 w-full mb-2" placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="border p-2 w-full mb-2" placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="border p-2 w-full mb-2" type="password" placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button className="bg-black text-white px-4 py-2 w-full">
        Register
      </button>
    </form>
  );
}