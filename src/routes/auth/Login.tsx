import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const { user, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t("login.invalidEmail"));
      return;
    }
    if (!password) {
      setError(t("login.invalidPassword"));
      return;
    }
    try {
      await login(email, password);
      const role = user?.role || "user";
      window.location.href = role === "admin" ? "/admin" : "/dashboard";
    } catch (err: any) {
      setError(err.message || t("login.error"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-black">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow"
      >
        <h1 className="text-xl font-bold text-center">{t("login.title")}</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div>
          <label className="block text-sm mb-1">{t("login.email")}</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">{t("login.password")}</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full">
          {t("login.submit")}
        </Button>
      </form>
    </div>
  );
}
