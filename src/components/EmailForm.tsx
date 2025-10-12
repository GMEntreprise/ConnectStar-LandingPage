import { ArrowRight, Mail } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useBevoSignup } from "../hooks/useBevoSignup";
import { emailSchema } from "../schemas/email";

interface EmailFormProps {
  onSuccess?: () => void;
}

const EmailForm: React.FC<EmailFormProps> = ({ onSuccess }) => {
  const { t } = useTranslation("common");
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const signupMutation = useBevoSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const validation = emailSchema.safeParse({ email });

    if (!validation.success) {
      setValidationError(validation.error.errors[0].message);
      return;
    }

    try {
      await signupMutation.mutateAsync(validation.data.email);
      setEmail("");
      onSuccess?.();
    } catch {
      // Erreur gérée par le hook via toast
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Mail className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (validationError) setValidationError(null);
          }}
          placeholder={t("emailForm.placeholder")}
          className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none transition-colors duration-200 text-lg ${
            validationError
              ? "border-red-300 focus:border-red-500"
              : "border-gray-200 focus:border-blue-500"
          }`}
        />
        {validationError && (
          <p className="mt-2 text-sm text-red-600">{validationError}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={signupMutation.isPending}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
      >
        {signupMutation.isPending ? (
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
        ) : (
          <>
            <span>{t("emailForm.submit")}</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
};

export default EmailForm;
